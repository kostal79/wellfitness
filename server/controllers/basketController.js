const Basket = require("../models/basket")
const User = require("../models/user")

function findDevice(basket, device_id) {
    for (let item of basket) {
        if (item.device.toString() === device_id) {
            return item._id
        };
    }
    return false
}

class BasketController {
    async getAll(req, res) {
        try {
            const baskets = await Basket.find()
            return res.json(baskets)
        } catch (error) {
            res.status(500).json({ message: "No baskets yet" })
        }
    }

    async getOne(req, res) {
        const {id} = req.params;
        try {
            const basket = await Basket.findById(id)
            if (basket) {
                return res.status(200).json(basket)
            } else {
                return res.status(400).json({ message: "Basket don't exist" })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Error: can't get basket" })
        }
    }

    async add(req, res) {
        try {
            const {basket_id, device_id, quantity} = req.body;
            const basket = await Basket.findById(basket_id)
            if (basket) {
                if(!findDevice(basket.devices, device_id)) {
                    basket.devices.push({device: device_id, quantity: quantity})
                    await basket.save();
                    return res.status(200).json(basket)
                } else {
                    res.status(400).json({message: "Device already in basket. Use incrementation"})
                }
            } else {
                res.status(400).json({message: "Basket don't exist"})
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({message: "Server error"})
        }
    }

    async removeFrom(req, res) {
        const {basket_id, device_id} = req.body;
        const basket = await Basket.findById(basket_id)
        try {
            const searchedDevice = findDevice(basket.devices, device_id);
            if (searchedDevice){
                const subdoc = basket.devices.id(searchedDevice)
                await subdoc.deleteOne()
                await basket.save()
                res.status(200).json(basket)
            } else {
                res.status(400).json({message: "Device in basket did't found"})
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({message: "Server error"})
        }
    }

    async incrementQuantity(req, res) {
        const {basket_id, device_id} = req.body;
        const basket = await Basket.findById(basket_id)
        try {
            const searchedDevice = findDevice(basket.devices, device_id);
            if (searchedDevice){
                const subdoc = basket.devices.id(searchedDevice)
                subdoc.quantity += 1;
                await basket.save()
                res.status(200).json(basket)
            } else {
                res.status(400).json({message: "Device in basket did't found"})
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({message: "Server error"})
        }
    }

    async decrementQuantity(req, res) {
        const {basket_id, device_id} = req.body;
        const basket = await Basket.findById(basket_id)
        try {
            const searchedDevice = findDevice(basket.devices, device_id);
            if (searchedDevice){
                const subdoc = basket.devices.id(searchedDevice)
                subdoc.quantity -= 1;
                await basket.save()
                res.status(200).json(basket)
            } else {
                res.status(400).json({message: "Device in basket did't found"})
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({message: "Server error"})
        }
    }

    async clear(req, res) {
        const basket_id = req.body.basket_id;
        try {
            const filter = {_id: basket_id};
            const update = {devices: []};
            const option = {new: true}
            const basket = await Basket.findOneAndUpdate(filter, update, option)
            if (basket) {
                return res.status(200).json(basket)
            } else {
                res.status(400).json({message: "Basket don't exist"})
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({message: "Server error"})
        }
    }
}

module.exports = new BasketController;