const Router = require("express");
const router = new Router();
const userController = require("../controllers/userController")
const isAdmin = require("../middleware/isAdminMiddleware")

router.get("/getall", userController.getAll);
router.get("/:id", userController.getOne);
router.put("/:id", userController.update);
router.delete("/:id", isAdmin, userController.remove)


module.exports = router;