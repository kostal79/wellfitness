const VideoInstruction = require("../models/videoInstruction");

class VideoInstructionController {
    async create(req, res) {
        try {
            const instructionData = req.body;
            const newInstruction = await VideoInstruction.create(instructionData);
            res.status(201).json(newInstruction)
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error creating instruction" })
        }
    }
    async readAll(req, res) {
        const query = req.query ? req.query : {}
        try {
            const collection = await VideoInstruction.find(query.query)
                .limit(query.limit)
                .sort(query.sort)
                .skip((query.page - 1) * query.limit)
                .select(query.select)
            res.status(200).json(collection);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error reading instructions" })
        }
    }
    async readOne(req, res) {
        try {
            const { instructionId } = req.params;
            const candidate = await VideoInstruction.findById(instructionId);
            if (!candidate) {
                return res.status(404).json({ message: "Instruction not found" })
            }
            res.status(200).json(candidate);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error reading instruction" })
        }
    }
    async update(req, res) {
        try {
            const { instructionId } = req.params;
            const instructionData = req.body;
            const updatedInstruction = await VideoInstruction.findByIdAndUpdate(
                instructionId,
                instructionData,
                { new: true }
            )
            if (!updatedInstruction) {
                return res.status(404).json({ message: "Instruction not found" })
            }
            res.status(200).json(updatedInstruction);

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error updating instruction" })
        }
    }
    async remove(req, res) {
        try {
            const { instructionId } = req.params;
            const deletedInstruction = await VideoInstruction.findByIdAndDelete(
                instructionId
            );
            if (!deletedInstruction) {
                return res.status(404).json({ message: "Instruction not found" });
            }
            res.status(200).json({ message: "Instruction deleted successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error removing instruction" })
        }
    }
}

module.exports = new VideoInstructionController();