const Router = require("express");
const router = new Router();
const isAdmin = require("../middleware/isAdminMiddleware");
const servisController = require("../controllers/servisController");
const multerServisMiddleware = require("../middleware/multerServisMiddleware");

router.post("/create", multerServisMiddleware.single("file"), servisController.create);
router.get("/all", servisController.readAll);
router.get("/:orderId", servisController.readOne);
router.put("/:orderId", servisController.update);
router.delete("/:orderId", servisController.remove);

module.exports = router;