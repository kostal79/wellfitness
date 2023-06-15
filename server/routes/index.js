const Router = require("express");
const router = new Router();
const authRouter = require("./auth.routes");
const basketRouter = require("./basket.routes");
const userRouter = require("./user.routes");
const blogRouter = require("./blog.routes");
const brandRouter = require("./brandRouter");

router.use("/auth", authRouter);
router.use("/basket", basketRouter);
router.use("/user", userRouter);
router.use("/blog", blogRouter);
router.use("/brand", brandRouter);

module.exports = router