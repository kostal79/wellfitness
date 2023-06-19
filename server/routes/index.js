const Router = require("express");
const router = new Router();
const authRouter = require("./auth.routes");
const basketRouter = require("./basket.routes");
const userRouter = require("./user.routes");
const blogRouter = require("./blog.routes");
const brandRouter = require("./brand.routes");
const deviceRouter = require("./device.routes");
const docRouter = require("./docRouter")

router.use("/auth", authRouter);
router.use("/basket", basketRouter);
router.use("/user", userRouter);
router.use("/blog", blogRouter);
router.use("/brand", brandRouter);
router.use("/device", deviceRouter);
router.use("/doc", docRouter)

module.exports = router