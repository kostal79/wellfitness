const Brand = require("../models/brand");
const fs = require("fs");

class BrandController {
    async create(req, res) {
        try {
            const { name } = req.body;
            const candidate = await Brand.findOne({ name });
            if (candidate) {
                return res.status(409).json({ message: "Brand name already exists" })
            }
            const file = req.file;
            const newBrand = await Brand.create({
                name,
                logo_ref: file.path,
            })

            return res.status(201).json(newBrand);
        } catch (error) {
            return res.status(500).json({ message: "Server error" })
        }
    }
    async readAll(req, res) {
        try {
            const collection = await Brand.find();
            return res.status(200).json(collection);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Server error" })
        }
    }
    async readOne(req, res) {
        const { id } = req.params
        try {
            const brand = await Brand.findById(id);
            if (!brand) {
                return res.status(404).json({ message: "Brand not found" })
            }
            return res.status(200).json(brand)
        } catch (error) {
            return res.status(500).json({ message: "Server error" })
        }
    }
    async update(req, res) {
        try {
            const { id } = req.params;
            const { name, devices_ids, logo_ref } = req.body;
            const candidate = await Brand.findOne({ name });
            if (candidate) {
                return res.status(409).json({ message: "Brand name already exists" });
            }
            const updatedBrand = await Brand.findByIdAndUpdate(id, { name, devices_ids, logo_ref }, { new: true });
            if (!updatedBrand) {
                return res.status(404).json({ message: "Brand not found" });
            }
            return res.status(200).json(updatedBrand)

        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Server error" })
        }
    }
    async remove(req, res) {
        try {
            const { id } = req.params;
            const brand = await Brand.findById(id);
            if (!brand) {
                return res.status(404).json({ message: "Brend not found" });
            } else {
                const logo_ref = brand.logo_ref;
                fs.unlinkSync(logo_ref);
                await Brand.findByIdAndDelete(id);
                res.status(200).json({message: `Brand id: ${id} was deleted`})
            }         
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Server error" })
        }

    }
}

module.exports = new BrandController;