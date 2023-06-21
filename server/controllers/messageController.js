const Message = require("../models/message");
const User = require("../models/user")

class MessageController {
    async create(req, res) {
        try {
            const user_id = req.user.id;
            const { issue, text } = req.body;

            const newMessage = await Message.create({
                issue,
                text,
                user_id,
            });

            await User.findByIdAndUpdate(user_id, { $push: { messages: newMessage._id } });
            return res.status(201).json(newMessage);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Error creating message" });
        }
    }

    async readAll(req, res) {
        try {
            const collection = await Message.find();
            return res.status(200).json(collection)
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Error reading messages" })
        }
    }

    async readOne(req, res) {
        try {
            const { id } = req.params;
            const message = await Message.findById(id);
            if (!message) {
                return res.status(404).json({ message: "Message not found" })
            }
            return res.status(200).json(message)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: "Server error" })
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const { issue, text } = req.body;
            const userId = req.user.id;
            const candidate = await Message.findById(id);
            if (!candidate) {
                return res.status(404).json({ message: "Message not found" });
            }
            if (!candidate.user_id.equals(userId)) {
                return res.status(403).json({ message: "Forbidden" });
            }
            const updatedMessage = await Message.findByIdAndUpdate(id, {
                issue,
                text
            }, { new: true })
            return res.status(200).json(updatedMessage);

        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Server error" });
        }
    }

    async remove(req, res) {
        try {
            const { id } = req.params;
            const userId = req.user.id;
            const message = await Message.findById(id);
            if (!message) {
                return res.status(404).json({ message: "Message not found" });
            }
            if (!message.user_id.equals(userId)) {
                return res.status(403).json({message: "Forbidden"});
            }
            await Message.findByIdAndDelete(id);
            await User.findByIdAndUpdate(userId, {$pull: {messages: message._id}});
            return res.status(200).json({ message: "Message deleted successfully" });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Server error" });
        }
    }
}

module.exports = new MessageController();