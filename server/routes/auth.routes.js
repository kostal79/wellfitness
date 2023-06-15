const Router = require("express");
const router = new Router();
const passport = require("passport")
const authController = require("../controllers/authController")

router.get('/login/success', authController.success);
router.get("/login/failed", authController.failed);
router.get("/logout", authController.logout)
router.post("/signup", authController.signUp)
router.get("/isauth", authController.isAuth)

router.get("/google", passport.authenticate("google", { scope: ["email", "profile"] }));

router.get("/google/callback", passport.authenticate("google", {
  successRedirect: "/api/auth/login/success",
  failureRedirect: "/api/auth/login/failed"
}))

router.get("/facebook", passport.authenticate("facebook", { scope: ["email", "profile"] }));

router.get("/facebook/callback", passport.authenticate("facebook", {
  successRedirect: "/api/auth/login/success",
  failureRedirect: "/api/auth/login/failed"
}))


router.post("/login", passport.authenticate("login", {
  successRedirect: "/api/auth/login/success",
  failureRedirect: "/api/auth/login/failed",
}));



module.exports = router;