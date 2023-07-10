const Router = require("express");
const router = new Router();
const typeController = require("../controllers/typeController");
const multerTypesMiddleware = require("../middleware/multerTypesMiddleware");
const isAdmin = require("../middleware/isAdminMiddleware")

router.post("/create", isAdmin, multerTypesMiddleware.single("type"), typeController.create)
router.get("/all", typeController.readAll);
router.get("/:typeId", typeController.readOne);
router.put("/:typeId", isAdmin, typeController.update);
router.put("/:typeId/image", isAdmin,multerTypesMiddleware.single("type"), typeController.updateImage);
router.delete("/:typeId", isAdmin, typeController.remove)


module.exports = router;