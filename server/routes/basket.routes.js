const Router = require("express");
const router = new Router();
const basketController = require("../controllers/basketController");
const isAuth = require("../middleware/isAuthMiddleware");
const isAdmin = require("../middleware/isAdminMiddleware")

router.get("/:basketId", isAuth, basketController.readOne)
router.put("/:basketId", isAuth, basketController.update)
router.get("/all", isAdmin, basketController.readAll)
router.post("/create", isAuth, basketController.create);

module.exports = router;