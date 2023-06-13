const Router = require("express");
const router = new Router();
const authRouter = require("./authRouter")
const basketRouter = require("./basketRouter")
const userRouter = require("./userRouter")

router.use("/auth", authRouter)
router.use("/basket", basketRouter)
router.use("/user", userRouter)

module.exports = router