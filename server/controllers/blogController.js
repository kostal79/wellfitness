const path = require("path");
const Blog = require("../models/blog");
const fs = require("fs");

class BlogController {
    async create(req, res) {
        try {
            const blogData = req.body;
            const files = req.files;
            const images_refs = files && files.map(file => file.filename);

            const newBlog = await Blog.create({ ...blogData, images_refs: images_refs });

            return res.status(201).json(newBlog);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Error creating post" });
        }
    }

    async readAll(req, res) {
        const query = req.query ? req.query : {}
        try {
            const collection = await Blog.find(query.query)
                .limit(query.limit)
                .sort(query.sort)
                .skip((query.page - 1) * query.limit)
                .select(query.select)
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
            const blogData = req.body;
            const updatedPost = await Blog.findByIdAndUpdate(id,
                { ...blogData },
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
                    const filePath = path.resolve(__dirname, `../static/blogs/${imageRef}`)
                    fs.unlinkSync(filePath)
                });
                await Brand.findByIdAndDelete(id);
                return res.status(200).json({ message: `Post id: ${id} deleted successfully` });
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Server error" });
        }
    }
}

module.exports = new BlogController();