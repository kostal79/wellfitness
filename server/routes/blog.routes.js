const Router = require("express");
const blogController = require("../controllers/blogController");
const router = new Router();
const isAdmin = require("../middleware/isAdminMiddleware");
const multerBlogMiddleware = require("../middleware/multerBlogMiddleware");

router.post("/create", isAdmin, multerBlogMiddleware.array("image", 10), blogController.create);
router.get("/all", blogController.readAll);
router.get("/:id", blogController.readOne);
router.put("/:id", isAdmin, blogController.update);
router.delete("/:id", isAdmin, blogController.remove)

module.exports = router;