const Router = require("express");
const router = new Router();
const isAdmin = require("../middleware/isAdminMiddleware");
const serviceController = require("../controllers/serviceController");
const multerServiceMiddleware = require("../middleware/multerServiceMiddleware");

router.post("/create", multerServiceMiddleware.single("file"), serviceController.create);
router.get("/all", serviceController.readAll);
router.get("/:orderId", serviceController.readOne);
router.put("/:orderId", serviceController.update);
router.delete("/:orderId", serviceController.remove);

module.exports = router;