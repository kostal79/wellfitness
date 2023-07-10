
const Shop = require("../models/shop");
const fs = require("fs");

class ShopController {
    async create(req, res) {
        try {
            const {
                name,
                city,
                street,
                house,
                tel,
                open,
                close,
                url,
                status
            } = req.body;
            const images = req.files;
            const images_refs = images && Array.isArray(images)
                ? images.map((img) => img.path)
                : [];
            const newShop = await Shop.create(
                {
                    name,
                    address: {
                        city,
                        street,
                        house,
                    },
                    tel,
                    working_time: {
                        open,
                        close,
                    },
                    url,
                    status,
                    images_refs,
                }
            );
            res.status(201).json(newShop);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error creating shop" });
        }
    }

    async readAll(req, res) {
        const query = req.query ? req.query : {}
        try {
            const shops = await Shop.find(query.query)
                .limit(query.limit)
                .sort(query.sort)
                .skip((query.page - 1) * query.limit)
                .select(query.select)
            res.status(200).json(shops);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error reading shops" });
        }
    }

    async readOne(req, res) {
        try {
            const { shopId } = req.params;

            const shop = await Shop.findById(shopId);

            if (!shop) {
                return res.status(404).json({ message: "Shop not found" });
            }
            res.status(200).json(shop);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Find shop error" });
        }
    }

    async update(req, res) {
        try {
            const { shopId } = req.params;
            const {
                name,
                city,
                street,
                house,
                tel,
                open,
                close,
                url,
                status
            } = req.body;

            const updatedShop = await Shop.findByIdAndUpdate(
                shopId,
                {
                    name,
                    address: {
                        city,
                        street,
                        house,
                    },
                    tel,
                    working_time: {
                        open,
                        close,
                    },
                    url,
                    status,
                },
                { new: true }
            );

            if (!updatedShop) {
                return res.status(404).json({ message: "Shop not found" });
            }

            res.status(200).json(updatedShop);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Update shop error" });
        }
    }

    async remove(req, res) {
        try {
            const { shopId } = req.params;
            const deletedShop = await Shop.findByIdAndDelete(shopId);
            if (!deletedShop) {
                return res.status(404).json({ message: "Shop not found" });
            }
            const images_refs = deletedShop.images_refs;
            if (images_refs && Array.isArray(images_refs)) {
                images_refs.forEach((ref) => fs.unlinkSync(ref))
            }
            res.status(200).json({ message: "Shop deleted successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Delet shop error" });
        }
    }
}

module.exports = new ShopController();