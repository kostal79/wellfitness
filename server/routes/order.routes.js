const Router = require("express");
const router = new Router();
const isAuth = require("../middleware/isAuthMiddleware");
const isAdmin = require("../middleware/isAdminMiddleware");
const orderController = require("../controllers/orderController");

router.post("/create", isAuth, orderController.create)
router.get("/all", isAdmin, orderController.readAll);
router.get("/:orderId", isAuth, orderController.readOne);
router.put("/:orderId", isAuth, orderController.update);
router.delete("/:orderId", isAuth, orderController.remove)

module.exports = router;