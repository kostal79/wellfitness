const Project = require("../models/project");
const fs = require("fs");

class ProjectController {
    async create(req, res) {
        try {
            const projectData = req.body;
            const files = req.files;
            const images_refs = files && Array.isArray(files) ? files.map(file => file.path) : []   ;

            const newProject = await Project.create({
                ...projectData,
                images_refs,
            });

            return res.status(201).json(newProject);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Error creating post" });
        }
    }

    async readAll(req, res) {
        try {
            const collection = await Project.find();
            return res.status(200).json(collection)
        } catch (error) {
            console.error(error);
            return res.status(404).json({ message: "Error reading posts" })
        }
    }

    async readOne(req, res) {
        try {
            const {id} = req.params;
            const post = await Project.findById(id);
            if (!post) {
                return res.status(404).json({ message: "Post not found" })
            }
            return res.status(200).json(post)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: "Error reading post" })
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const projectData = req.body;

            const updatedPost = await Project.findByIdAndUpdate(id, projectData, { new: true });

            if (!updatedPost) {
                return res.status(404).json({ message: "Post not found" })
            }
            return res.status(200).json(updatedPost)

        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Error updating posts" });
        }
    }

    async remove(req, res) {
        try {
            const { id } = req.params;
            const post = await Project.findById(id);
            if (!post) {
                return res.status(404).json({ message: "Post not found" });
            } else {
                post.images_refs.forEach(imageRef => {
                    fs.unlinkSync(imageRef)
                });
                await post.deleteOne({_id: id});
                return res.status(200).json({ message: "Post deleted successfully" });
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Server error" });
        }
    }
}

module.exports = new ProjectController;