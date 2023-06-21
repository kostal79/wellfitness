const Router = require("express");
const router = new Router();
const shopController = require("../controllers/shopController");
const multerMiddleware = require("../middleware/multerShopsMiddleware");
const isAdmin = require("../middleware/isAdminMiddleware");

router.post("/create", multerMiddleware.array("image", 10), shopController.create);
router.get("/all", shopController.readAll);
router.get("/:shopId", shopController.readOne);
router.put("/:shopId", shopController.update);
router.delete("/:shopId", shopController.remove);

module.exports = router;