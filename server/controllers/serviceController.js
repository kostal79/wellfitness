const path = require("path");
const Service = require("../models/service");
const fs = require("fs");

class ServiceController {
    async create(req, res) {
        try {
            const {
                brand,
                model,
                serial_number,
                varanty_number,
                purchase_date,
                city,
                street,
                house,
                block,
                apart,
                message,
                first_name,
                tel,
                email,
            } = req.body;
            const file = req.file;
            const file_ref = file ? file.filename : "";
            const newService = await Service.create(
                {
                    device: {
                        brand,
                        model,
                    },
                    serial_number,
                    varanty_number,
                    purchase_date,
                    address: {
                        city,
                        street,
                        house,
                        block,
                        apart,
                    },
                    message,
                    contacts: {
                        first_name,
                        tel,
                        email,
                    },
                    file_ref,
                }
            );
            res.status(201).json(newService);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error creating order" });
        }
    }

    async readAll(req, res) {
        const query = req.query ? req.query : {};
        try {
            const orders = await Service.find(query.query)
                .limit(query.limit)
                .sort(query.sort)
                .skip((query.page - 1) * query.limit)
                .select(query.select)
                .populate("device.brand", "name")
                .populate("device.model", "name")
            res.status(200).json(orders);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error reading orders" });
        }
    }

    async readOne(req, res) {
        try {
            const { orderId } = req.params;

            const order = await Service.findById(orderId)
                .populate("device.brand", "name")
                .populate("device.model", "name")

            if (!order) {
                return res.status(404).json({ message: "Order not found" });
            }

            res.status(200).json(order);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Read order error" });
        }
    }

    async update(req, res) {
        try {
            const { orderId } = req.params;
            const {
                brand,
                model,
                serial_number,
                varanty_number,
                purchase_date,
                city,
                street,
                house,
                block,
                apart,
                message,
                first_name,
                tel,
                email,
            } = req.body;

            const updatedService = await Service.findByIdAndUpdate(
                orderId,
                {
                    device: {
                        brand,
                        model,
                    },
                    serial_number,
                    varanty_number,
                    purchase_date,
                    address: {
                        city,
                        street,
                        house,
                        block,
                        apart,
                    },
                    message,
                    contacts: {
                        first_name,
                        tel,
                        email,
                    },
                },
                { new: true }
            );

            if (!updatedService) {
                return res.status(404).json({ message: "Order not found" });
            }

            res.status(200).json(updatedService);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Update order error" });
        }
    }

    async remove(req, res) {
        try {
            const { orderId } = req.params;
            const deletedService = await Service.findByIdAndDelete(orderId);
            if (!deletedService) {
                return res.status(404).json({ message: "Order not found" });
            }
            const fileRef = deletedService.file_ref;
            const filePath = path.resolve(__dirname, `../static/serviceFiles/${fileRef}`)
            fs.unlinkSync(filePath);
            res.status(200).json({ message: "Order deleted successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Delet order error" });
        }
    }
}

module.exports = new ServiceController();