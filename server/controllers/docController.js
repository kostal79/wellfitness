const Doc = require("../models/doc");
const Device = require("../models/device");
const fs = require("fs");

class DocController {
    async upload(req, res) {
        const file = req.file;
        const docData = req.body;
        if (file) {
            try {
                const file_ref = file.path;
                const newDoc = await Doc.create({...docData, file_ref});
                const updatedDevice = await Device.findByIdAndUpdate(docData.device_id, { $push: { docs_ids: newDoc._id } });
                if (!updatedDevice) {
                    return res.status(404).json({message: "Device not found"})
                }
                res.status(201).json(newDoc)            
            } catch (error) {
                console.log(error);
                res.status(500).json({message: "Server error"})
            }
        }
    }
    async getList(req, res) {
        try {
            const collection = await Doc.find();
            res.status(200).json(collection)
        } catch(error) {
            res.status(500).json({message: "Server error"})
        }
    }
    async download(req, res) {
        const {id} = req.params;
        try {
            const doc = await Doc.findById(id);
            if (!doc) {
                return res.status(404).json({message: `Document id: ${id} not found`});
            }
            res.status(200).json(doc)
        } catch (error) {
            console.error(error);
            res.status(500).json({message: "Server error"});
        }
    }
    async remove(req, res) {
        try {
            const {id} = req.params;
            const doc = await Doc.findById(id);
            if (!doc) {
                return res.status(404).json({message: "File not found"});
            }
            const device = await Device.findById(doc.device_id);
            if (device) {
                await device.removeDoc(id);
            }
            fs.unlinkSync(doc.file_ref);
            await doc.deleteOne();
            res.status(200).json({message: `Document id: ${id} was deleted`});
        } catch (error) {
            console.error(error)
            res.status(500).json({message: "Server error"})
        }
    }
}

module.exports = new DocController();