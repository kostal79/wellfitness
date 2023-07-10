const Order = require("../models/order");
const User = require("../models/user");

class OrderController {
    async create(req, res) {
        try {
            const userId = req.user.id;
            const orderData = req.body;

            const newOrder = await Order.create({ ...orderData, user: userId });

            await User.findByIdAndUpdate(userId, { $push: { orders: newOrder._id } });

            res.status(201).json(newOrder);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error creating order" });
        }
    }

    async readAll(req, res) {
        const query = req.query ? req.query : {}
        try {
            const orders = await Order.find(query.query)
                .limit(query.limit)
                .sort(query.sort)
                .skip((query.page - 1) * query.limit)
                .select(query.select)
                .populate("user", "first_name last_name email tel city adress");
            res.status(200).json(orders);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error reading orders" });
        }
    }

    async readOne(req, res) {
        try {
            const { orderId } = req.params;

            const order = await Order.findById(orderId)
                .populate("user", "first_name last_name email tel city adress");

            if (!order) {
                return res.status(404).json({ message: "Order not found" });
            }

            res.status(200).json(order);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Server error" });
        }
    }

    async update(req, res) {
        try {
            const { orderId } = req.params;
            const orderData = req.body;

            const updatedOrder = await Order.findByIdAndUpdate(
                orderId,
                orderData,
                { new: true }
            );

            if (!updatedOrder) {
                return res.status(404).json({ message: "Order not found" });
            }

            res.status(200).json(updatedOrder);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Server error" });
        }
    }

    async remove(req, res) {
        try {
            const { orderId } = req.params;
            const userId = req.user.id;

            const deletedOrder = await Order.findByIdAndDelete(orderId);

            if (!deletedOrder) {
                return res.status(404).json({ message: "Order not found" });
            }

            await User.findByIdAndUpdate(userId, { $pull: { orders: orderId } })
            res.status(200).json({ message: "Order deleted successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Server error" });
        }
    }
}

module.exports = new OrderController();