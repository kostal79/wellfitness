const Feedback = require("../models/feedback");
const Device = require("../models/device");

class FeedbackController {
    async create(req, res) {
        try {
            const user_id = req.user.id;
            const feedbackData = req.body;
            const device = await Device.findById(feedbackData.device_id);
            if (!device) {
                return res.status(404).json({ message: "Device not found" })
            }
            if (device.isPostUnique(user_id)) {
                return res.status(409).json({ message: "Post already exists" });
            }
            const newFeedback = await Feedback.create({ ...feedbackData, user_id });
            device.addFeedback(newFeedback._id, user_id);
            await device.save();
            res.status(201).json(newFeedback);

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Server error" });
        }
    }
    async readAll(req, res) {
        try {
            const collection = await Feedback.find();
            res.status(200).json(collection)
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Server error" });
        }
    }
    async readOne(req, res) {
        try {
            const { id } = req.params;
            const post = await Feedback.findById(id);
            if (!post) {
                return res.status(404).json({ message: "Post not found" });
            }
            res.status(200).json(post);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Server error" });
        }
    }
    async update(req, res) {
        try {
            const userId = req.user.id;
            const { id } = req.params;
            const postData = req.body;
            const candidate = await Feedback.findById(id);
            if (!candidate ) return res.status(404).json({ message: "Post not found" });
            if (String(candidate.user_id) !== String(userId)) {
                return res.status(403).json({message: "Forbidden"});
            }
            const updatedPost = await Feedback.findByIdAndUpdate(id, postData, {new: true})
            res.status(201).json(updatedPost);

        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Server error" });
        }
    }

    async remove(req, res) {
        try {
            const userId = req.user.id;
            const {id} = req.params;
            const deletingPost = await Feedback.findById(id);
            if(!deletingPost) {
                return res.status(404).json({message: "Post not found"})
            }
            if (String(deletingPost.user_id) !== String(userId)){
                return res.status(403).json({message: "Forbidden"});
            }
            const device = await Device.findById(deletingPost.device_id);
            if (!device) {
                return res.status(404).json({message: "Device not found"});
            }
            device.removePost(id, userId);
            await device.save();
            await deletingPost.deleteOne();
            res.status(200).json({message: `Post id: ${id} was deleted`})
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Server error" });
        }
    }
}

module.exports = new FeedbackController;