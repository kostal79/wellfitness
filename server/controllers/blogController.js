const Blog = require("../models/blog");
const fs = require("fs");

class BlogController {
    async create(req, res) {
        try {
            const { header, promotext, text, use } = req.body;
            const files = req.files;
            const images_refs = files.map(file => file.path);

            const newBlog = await Blog.create({
                header,
                promotext,
                text,
                images_refs,
                use,
            });

            return res.status(201).json(newBlog);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Error creating post" });
        }
    }

    async readAll(req, res) {
        try {
            const collection = await Blog.find();
            return res.status(200).json(collection)
        } catch (error) {
            console.error(error);
            return res.status(404).json({ message: "Error reading posts" })
        }
    }

    async readOne(req, res) {
        try {
            const postId = req.params.id;
            const post = await Blog.findById(postId);
            if (!post) {
                return res.status(404).json({ message: "Post not found" })
            }
            return res.status(200).json(post)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: "Server error" })
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const { header, promotext, text, images_refs, use} = req.body;

            const updatedPost = await Blog.findByIdAndUpdate(id, {
                header,
                promotext,
                text,
                images_refs,
                use
            },
                { new: true }
            );
            if (!updatedPost) {
                return res.status(404).json({ message: "Post not found" })
            }
            return res.status(200).json(updatedPost)

        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Server error" });
        }
    }

    async remove(req, res) {
        try {
            const { id } = req.params;
            const post = await Blog.findById(id);
            if (!post) {
                return res.status(404).json({ message: "Post not found" });
            } else {
                post.images_refs.forEach(imageRef => {
                    fs.unlinkSync(imageRef)
                });
                await Blog.findByIdAndDelete(id);
                return res.status(200).json({ message: "Post deleted successfully" });
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Server error" });
        }
    }
}

module.exports = new BlogController;