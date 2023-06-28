const Router = require("express");
const router = new Router();
const subtypeController = require("../controllers/subtypeController");
const isAdmin = require("../middleware/isAdminMiddleware")

router.post("/create", isAdmin, subtypeController.create)
router.get("/all", subtypeController.readAll);
router.get("/:subtypeId", subtypeController.readOne);
router.put("/:subtypeId", isAdmin, subtypeController.update);
router.delete("/:subtypeId", isAdmin, subtypeController.remove)


module.exports = router;