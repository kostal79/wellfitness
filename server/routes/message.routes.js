const Router = require("express");
const router = new Router();
const isAuth = require("../middleware/isAuthMiddleware");
const messageController = require("../controllers/messageController");

router.post("/create", isAuth, messageController.create);
router.get("/all", messageController.readAll);
router.get("/:id", messageController.readOne);
router.put("/:id", isAuth, messageController.update);
router.delete("/:id", isAuth, messageController.remove);

module.exports = router;