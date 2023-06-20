const Router = require("express");
const router = new Router();
const authRouter = require("./auth.routes");
const basketRouter = require("./basket.routes");
const userRouter = require("./user.routes");
const blogRouter = require("./blog.routes");
const brandRouter = require("./brand.routes");
const deviceRouter = require("./device.routes");
const docRouter = require("./doc.routes");
const feedbackRouter = require("./feedback.routes");
const messageRouter = require("./message.routes");
const orderRouter = require("./order.routes");
const projectRouter = require("./project.routes");
const servisRouter = require("./servis.routes");

router.use("/auth", authRouter);
router.use("/baskets", basketRouter);
router.use("/users", userRouter);
router.use("/blogs", blogRouter);
router.use("/brands", brandRouter);
router.use("/devices", deviceRouter);
router.use("/docs", docRouter);
router.use("/feedback", feedbackRouter);
router.use("/messages", messageRouter);
router.use("/orders", orderRouter);
router.use("/projects", projectRouter);
router.use("/servis", servisRouter);

module.exports = router