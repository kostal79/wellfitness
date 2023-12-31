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
const servisRouter = require("./service.routes");
const shopRouter = require("./shop.routes");
const videoInstructionRouter = require("./videoInstruction.routes");
const typeRouter = require("./type.routes")
const groupRouter = require("./group.routes")

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
router.use("/shops", shopRouter);
router.use("/videoinstructions", videoInstructionRouter);
router.use("/types", typeRouter);
router.use("/groups", groupRouter);

module.exports = router