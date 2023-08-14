const path = require("path");
const Device = require("../models/device");
const fs = require("fs");

class DeviceController {
    async create(req, res) {
        try {
            const deviceData = req.body;
            const images_refs = [];
            const files = req.files;
            if (files) {
                for (let file of files) {
                    images_refs.push(file.filename)
                }
            }
            const newDevice = await Device.create({ ...deviceData, images_refs });
            res.status(201).json(newDevice);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Server error" })
        }
    }
    async readAll(req, res) {
        try {
            const { page, limit, sort, ascending, select, minPriceDiler, maxPriceDiler, minPriceRetail, maxPriceRetail, quantity, ...rest } = req.query;
            const query = rest;
            if (quantity) {
                query.quantity = { $gte: 1 }
            } else {
                query.quantity = { $gte: 0 }
            }

            if (minPriceDiler || maxPriceDiler) {
                query["special_price.diler"] = { $gte: parseInt(minPriceDiler), $lte: parseInt(maxPriceDiler) } 

            } else if (minPriceRetail || maxPriceRetail) {
                query["special_price.retail"] = { $gte: parseInt(minPriceRetail), $lte: parseInt(maxPriceRetail) } 
                   
            }
            let collection = await Device.find(query)
                .skip((page - 1) * limit)
                .limit(limit)
                .sort({[sort]: ascending})
                .select(select)

            return res.status(200).json(collection);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Server error" })
        }
    }
    async readOne(req, res) {
        try {
            const { id } = req.params;
            const device = await Device.findById(id).populate("brand");
            if (!device) {
                return res.status(404).json({ message: "Device not found" })
            }
            res.status(200).json(device)
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Server error" })
        }
    }
    async update(req, res) {
        try {
            const { id } = req.params;
            const deviceData = req.body;
            const updatedDevice = await Device.findByIdAndUpdate(id, deviceData, { new: true });
            if (!updatedDevice) {
                return res.status(409).json({ message: "Device not updated" });
            }
            res.status(200).json(updatedDevice);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Server error" })
        }
    }
    async remove(req, res) {
        try {
            const { id } = req.params;
            const device = await Device.findById(id);
            if (!device) {
                return res.status(404).json({ message: "Device not found" })
            }
            const images_refs = device.images_refs;
            images_refs.forEach(image_ref => {
                const filePath = path.resolve(__dirname, `../static/devices/${image_ref}`)
                fs.unlinkSync(filePath);
            });
            await Device.findByIdAndDelete(id);
            res.status(200).json({ message: `Device id: ${id} was deleted` })
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Server error" })
        }
    }

    async getListOfUnique(req, res) {
        const { query, field } = req.query;
        try {
            const result = await Device.distinct(field, query);
            return res.status(200).json(result)
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Server error" })
        }
    }

    async vote(req, res) {
        try {
            const userId = req.user.id;
            const deviceId = req.params.id;
            const device = await Device.findById(deviceId);
            const { functionality, quality, comfort, price } = req.body;
            if (!device) {
                return res.status(404).json({ message: "Device not found" });
            }
            if (functionality) device.voteRatingFunctionality(functionality, userId)
            if (quality) device.voteRatingQuality(functionality, userId)
            if (comfort) device.voteRatingComfort(functionality, userId)
            if (price) device.voteRatingPrice(functionality, userId)
            const updatedDevice = await Device.findByIdAndUpdate(deviceId, {
                rating: device.rating,
                rating_average: device.calcAverageRating(),
            }, { new: true });
            res.status(200).json(updatedDevice)
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Server error" })
        }
    }
}

module.exports = new DeviceController();