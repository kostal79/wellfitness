const Router = require("express");
const router = new Router();
const groupController = require("../controllers/groupController");
const isAdmin = require("../middleware/isAdminMiddleware");
const multerGroupMiddleware = require("../middleware/multerGroupMiddleware");

router.post("/create", isAdmin, multerGroupMiddleware.single("group"), groupController.create)
router.get("/all", groupController.readAll);
router.get("/:groupId", groupController.readOne);
router.put("/:groupId", isAdmin, groupController.update);
router.put("/:groupId/image", isAdmin, multerGroupMiddleware.single("group"), groupController.updateImage);
router.delete("/:groupId", isAdmin, groupController.remove)


module.exports = router;