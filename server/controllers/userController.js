const Router = require("express");
const router = new Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");
const Basket = require("../models/basket")

class UserConroller {
    async getAll(req, res) {
        try {
            const collection = await User.find()
            return res.json(collection)
        } catch (error) {
            console.log(error);
            res.status(500).json({message: "internal error"})
        }
    }

    async getOne(req, res) {
        try {
            const user = await User.findById(req.params.id);
            if(!user) {return res.status(404).json({message: "User not found"})}
            return res.status(201).json(user)
        } catch (error) {
            res.status(500).json({message: "Internal error"})
        }
    }

    async update(req, res) {
        try {
           const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
            );
            if(!updatedUser) {
                return res.status(404).json({message: "User not found"})
            }
            return res.status(201).json(updatedUser)

        }catch(error) {
            res.satus(500).json({message: "Error updating user"})
        }
    }

    async remove(req, res) {
        try {
            const user = await User.findById(req.params.id);
            const basket_id = user.basket;
            const deletedUser = await Promise.all([User.findByIdAndDelete(user.id), Basket.findByIdAndDelete(basket_id)]);
            return res.json(deletedUser)
        } catch (error) {
            console.log(error)
            return res.status(500).json({message: "Error deleting user"})
        }
    }

}

module.exports = new UserConroller();