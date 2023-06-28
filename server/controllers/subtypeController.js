const Subtype = require("../models/subtype")

class SubtypeController {
    async create(req, res) {
        try {
            const subtypeData = req.body;
            const name = subtypeData.name;
            const subtype = await Subtype.findOne({ name });
            if (subtype) {
                return res.status(403).json({ message: "Subtype already exists" })
            }
            const newSubtype = await Subtype.create(subtypeData);
            return res.status(201).json(newSubtype);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Error in Subtype creation" })
        }
    }
    async readAll(req, res) {
        try {
            const collection = await Subtype.find().populate("devices");
            return res.status(200).json(collection)
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Error in Subtypes reading" })
        }
    }
    async readOne(req, res) {
        try {
            const { subtypeId } = req.params;
            const subtype = await Subtype.findById(subtypeId).populate("devices");
            if (!subtype) {
                return res.status(404).json({message: "Subtype not found"})
            }
            return res.status(200).json(subtype)
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Error in Subtype reading" })
        }
    }
    async update(req, res) {
        try {
            const {subtypeId} = req.params;
            const subtypeData = req.body;
            const updatedSubtype = await Subtype.findByIdAndUpdate(subtypeId, subtypeData, {new: true});
            if (!updatedSubtype) {
                return res.status(404).json({message: "Subtype not found"})
            }
            return res.status(200).json(updatedSubtype);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Error in Subtype updating" })
        }
    }
    async remove(req, res) {
        try {
            const {subtypeId} = req.params;
            const subtype = await Subtype.findById(subtypeId);
            if (!subtype) {
                return res.status(404).json({message: "Subtype not found"})
            }
            if (subtype.devices.length > 0) {
                return res.status(403).json({message: "Subtype consist devices. Impossible delete subtype"})
            }
            await Subtype.deleteOne({_id: subtypeId});
            return res.status(200).json({message: "Subtype deleted successfully"})
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Error in Subtype deleting" })
        }
    }
}

module.exports = new SubtypeController;