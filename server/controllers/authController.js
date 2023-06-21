const router = require("express").Router();
const Basket = require("../models/basket");
const User = require("../models/user");
const bcrypt = require("bcrypt")

class authController {
    async signUp(req, res) {
        const { first_name, last_name, email, password, tel, } = req.body;
        if (!email || !password || !first_name) {
            return res.status(400).json({ message: "No email, password or first name" })
        }
        const candidate = await User.findOne({ email: email });

        if (candidate) {
            return res.status(409).json({ message: `User with email ${email} already exists` })
        }

        try {
            const hashedPass = await bcrypt.hash(password, 5);

            const newUser = new User({
                first_name: first_name,
                last_name: last_name,
                email: email,
                password: hashedPass,
                tel: tel,
            });

            const user_id = newUser.id;

            const newBasket = new Basket({
                user_id: user_id
            })

            const basket_id = newBasket.id;

            newUser.basket = basket_id;

            await Promise.all([newUser.save(), newBasket.save()]);

            req.login(newUser, (err) => {
                if (err) {
                    return res.status(500).json({ message: "Error logging in after signup" });
                }
                return res.redirect("/api/auth/login/success");
            });
        } catch (error) {
            console.log(error);
            res.redirect("/api/auth/login/failed");
        }
    }

    failed(req, res) {
        res.status(401).json({
            success: false,
            message: "Authentication failed",
        })
    }

    success(req, res) {
        res.status(200).json({
            success: true,
            message: 'Authentication successful',
            user: req.user,
        });
    }

    logout(req, res) {
        req.logout();
        res.json({ message: "logout successefull" })
    }

    isAuth(req, res) {
        if (req.isAuthenticated()) {
            const role = req.user.role;
            res.json({message: "Authorized", role: role});
          } else {
            res.json({message: "Not authorized"})
          }
    }
}

module.exports = new authController();