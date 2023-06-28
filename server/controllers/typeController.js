const Type = require("../models/type");
const fs = require("fs");

class TypeController {
    async create(req, res) {
        try {
            const typeData = req.body;
            const name = typeData.name;
            const filePath = req.file && req.file.path;
            const type = await Type.findOne({ name });
            if (type) {
                return res.status(403).json({ message: "Type already exists" })
            }
            const newType = await Type.create({ ...typeData, image_ref: filePath });
            res.status(201).json(newType);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Error in Type creation" })
        }
    }
    async readAll(req, res) {
        try {
            const collection = await Type.find().populate("subtypes");
            res.status(200).json(collection)
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Error in Types reading" })
        }
    }
    async readOne(req, res) {
        try {
            const { typeId } = req.params;
            const type = await Type.findById(typeId).populate("subtypes");
            if (!type) {
                return res.status(404).json({ message: "Type not found" })
            }
            res.status(200).json(type)
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Error in Type reading" })
        }
    }
    async update(req, res) {
        try {
            const { typeId } = req.params;
            const typeData = req.body;
            const updatedType = await Type.findByIdAndUpdate(typeId, typeData, { new: true });
            if (!updatedType) {
                return res.status(404).json({ message: "Type not found" })
            }
            return res.status(200).json(updatedType);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Error in Type updating" })
        }
    }
    async updateImage(req, res) {
        try {
            const { typeId } = req.params;
            const newImageRef = req.file && req.file.path;
            const updatedType = await Type.findByIdAndUpdate(typeId, { image_ref: newImageRef }, { new: true });
            if (!updatedType) {
                return res.status(404).json({ message: "Type not found" })
            }
            return res.status(200).json(updatedType);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Error in Type updating" })
        }
    }
    async remove(req, res) {
        try {
            const { typeId } = req.params;
            const type = await Type.findById(typeId);
            if (!type) {
                return res.status(404).json({ message: "Type not found" })
            }
            if (type.subtypes.length > 0) {
                return res.status(403).json({ message: "Type consist subtypes. Impossible delete type" })
            }
            if (type.image_ref) {
                try {
                    fs.unlinkSync(type.image_ref)
                } catch (error) {
                    console.error(error);
                    return res.status(500).json({message: "Error in deleting file"})
                }
            }
            await Type.deleteOne({ _id: typeId });
            res.status(200).json({ message: "Type deleted successfully" })
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Error in Type deleting" })
        }
    }
}

module.exports = new TypeController;