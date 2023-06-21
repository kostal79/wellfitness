const Basket = require("../models/basket")
const User = require("../models/user")

class BasketController {
    async create(req, res) {
        try {
            const { user_id } = req.body;
            const user = await User.findById(user_id);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            if (user.basket) {
                return res.status(403).json({ message: "Basket already exists" })
            }
            const newBasket = await Basket.create(req.body);
            user.basket = newBasket._id;
            await user.save();
            res.status(201).json(newBasket)

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error creating basket" })
        }
    }
    async readAll(req, res) {
        try {
            const collection = await Basket.find();
            res.status(200).json(collection);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error reading baskets" })
        }
    }
    async readOne(req, res) {
        try {
            const { basketId } = req.params;
            const userId = req.user.id;
            const basket = await Basket.findById(basketId)
                .populate("user_id")
                .populate("devices.device");
            if (!basket) {
                return res.status(404).json({ message: "Basket not found" })
            };
            if (!basket.user_id._id.equals(userId)) {
                return res.status(403).json({ message: "Forbidden" });
            }
            res.status(200).json(basket)
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error reading basket" })
        }
    }
    async update(req, res) {
        try {
            const { basketId } = req.params;
            const userId = req.user.id;
            const basketData = req.body;
            const basket = await Basket.findById(basketId)
            if (!basket) {
                return res.status(404).json({ message: "Basket not found" })
            };
            if (!basket.user_id.equals(userId)) {
                return res.status(403).json({ message: "Forbidden" });
            }
            const updatedBasket = await Basket.findByIdAndUpdate(
                basketId,
                basketData,
                { new: true }
            );
            res.status(200).json(updatedBasket);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error updating basket" })
        }
    }
    async remove(req, res) {
        try {
            const { basketId } = req.params;
            const userId = req.user.id;
            const basket = await Basket.findById(basketId)
            if (!basket) {
                return res.status(404).json({ message: "Basket not found" })
            };
            if (!basket.user_id.equals(userId)) {
                return res.status(403).json({ message: "Forbidden" });
            }
            await basket.remove();
            res.status(200).json({ message: "Basket deleted successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error deleting basket" })
        }
    }
}

module.exports = new BasketController();