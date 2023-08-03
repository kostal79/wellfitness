const Router = require("express");
const deviceController = require("../controllers/deviceController");
const router = new Router();
const multerDeviceMiddleware = require("../middleware/multerDeviceMiddleware");
const isAuth = require("../middleware/isAuthMiddleware");
const isAdmin = require("../middleware/isAdminMiddleware")

router.post("/create", multerDeviceMiddleware.array("device", 10), deviceController.create);
router.get("/all", deviceController.readAll);
router.get("/dist", deviceController.getListOfUnique)
router.get("/:id", deviceController.readOne);
router.delete("/:id",  deviceController.remove);
router.put("/:id", deviceController.update);
router.put("/vote/:id", isAuth, deviceController.vote)
module.exports = router;