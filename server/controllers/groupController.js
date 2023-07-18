const Group = require("../models/group")

class GroupController {
    async create(req, res) {
        try {
            const groupData = req.body;
            const name = groupData.name;
            const fileName = req.file && req.file.filename;
            const group = await Group.findOne({ name });
            if (group) {
                return res.status(403).json({ message: "Group already exists" })
            }
            const newGroup = await Group.create({ ...groupData, image_ref: fileName });
            return res.status(201).json(newGroup);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Error in Group creation" })
        }
    }
    async readAll(req, res) {
        const query = req.query ? req.query : {};
        try {
            const collection = await Group.find(query.query)
                .limit(query.limit)
                .sort(query.sort)
                .skip((query.page - 1) * query.limit)
                .select(query.select)
            return res.status(200).json(collection)
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Error in Groups reading" })
        }
    }
    async readOne(req, res) {
        try {
            const { groupId } = req.params;
            const group = await Group.findById(groupId);
            if (!group) {
                return res.status(404).json({ message: "Group not found" })
            }
            return res.status(200).json(group)
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Error in Group reading" })
        }
    }
    async update(req, res) {
        try {
            const { groupId } = req.params;
            const groupData = req.body;
            const updatedGroup = await Group.findByIdAndUpdate(groupId, groupData, { new: true });
            if (!updatedGroup) {
                return res.status(404).json({ message: "Group not found" })
            }
            return res.status(200).json(updatedGroup);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Error in Group updating" })
        }
    }

    async updateImage(req, res) {
        try {
            const { groupId } = req.params;
            const imageRef = req.file && req.file.filename;
            const updatedGroup = await Group.findByIdAndUpdate(groupId, { image_ref: imageRef }, { new: true });
            if (!updatedGroup) {
                return res.status(404).json({ message: "Group not found" })
            }
            return res.status(200).json(updatedGroup);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Error in Group updating" })
        }
    }
    async remove(req, res) {
        try {
            const { groupId } = req.params;
            const group = await Group.findById(groupId);
            if (!group) {
                return res.status(404).json({ message: "Group not found" })
            }
            if (group.image_ref) {
                try {
                    const filePath = path.resolve(__dirname, `../static/groups/${group.image_ref}`)
                    fs.unlinkSync(filePath)
                } catch (error) {
                    console.error(error);
                    return res.status(500).json({ message: "Error in deleting file" })
                }
            }
            await Group.deleteOne({ _id: groupId });
            return res.status(200).json({ message: "Group deleted successfully" })
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Error in Group deleting" })
        }
    }
}

module.exports = new GroupController;