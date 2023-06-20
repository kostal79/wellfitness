const Router = require("express");
const router = new Router();
const isAuth = require("../middleware/isAuthMiddleware");
const feedbackController = require("../controllers/feedbackController");

router.post("/create", isAuth, feedbackController.create);
router.get("/all", feedbackController.readAll);
router.get("/:id", feedbackController.readOne);
router.put("/:id", isAuth, feedbackController.update);
router.delete("/:id", isAuth, feedbackController.remove);

module.exports = router;