const Brand = require("../models/brand");
const fs = require("fs");
const path = require("path")

class BrandController {
    async create(req, res) {
        try {
            const brandData = req.body;
            const candidate = await Brand.findOne({ name: brandData.name });
            if (candidate) {
                return res.status(409).json({ message: "Brand name already exists" })
            }
            const file = req.file ? req.file : "";
            const newBrand = await Brand.create({
                ...brandData,
                logo_ref: file.filename,
            })

            return res.status(201).json(newBrand);
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: "Server error" })
        }
    }
    async readAll(req, res) {
        const query = req.query ? req.query : {}
        try {
            const collection = await Brand.find(query.query)
                .populate({path: "devices_types", select: "name"})
                .limit(query.limit)
                .sort(query.sort)
                .skip((query.page - 1) * query.limit)
                .select(query.select)

            return res.status(200).json(collection);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Server error" })
        }
    }
    async readOne(req, res) {
        const { id } = req.params
        try {
            const brand = await Brand.findById(id).populate("devices_ids");
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
            const brandData = req.body;
            const candidate = await Brand.findOne({ name: brandData.name });
            if (candidate) {
                return res.status(409).json({ message: "Brand name not exists" });
            }
            const updatedBrand = await Brand.findByIdAndUpdate(id, { ...brandData }, { new: true });
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
                const logo_ref = path.resolve(__dirname, `../static/brands/${brand.logo_ref}`);
                fs.unlinkSync(logo_ref);
                await Brand.findByIdAndDelete(id);
                res.status(200).json({ message: `Brand id: ${id} was deleted` })
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Server error" })
        }

    }
}

module.exports = new BrandController();