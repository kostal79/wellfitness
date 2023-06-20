const Router = require("express");
const router = new Router();
const isAdmin = require("../middleware/isAdminMiddleware");
const projectController = require("../controllers/projectController");
const multerMiddleware = require("../middleware/multerProjedtMiddleware");

router.post("/create", isAdmin, multerMiddleware.array("image", 10), projectController.create );
router.get("/all", projectController.readAll);
router.get("/:id", projectController.readOne);
router.put("/:id",isAdmin, projectController.update);
router.delete("/:id",isAdmin, projectController.remove);


module.exports = router;