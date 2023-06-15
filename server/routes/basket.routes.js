const Router = require("express");
const router = new Router();
const basketController = require("../controllers/basketController");
const isAuth = require("../middleware/isAuthMiddleware");
const isAdmin = require("../middleware/isAdminMiddleware")

router.get("/:id", isAuth, basketController.getOne)
router.get("/all", isAdmin, basketController.getAll)
router.post("/add", isAuth, basketController.add)
router.post("/remove",isAuth, basketController.removeFrom)
router.post("/inc", isAuth,basketController.incrementQuantity)
router.post("/dec", isAuth, basketController.decrementQuantity)

module.exports = router;