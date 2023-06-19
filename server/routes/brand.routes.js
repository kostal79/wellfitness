const Router = require("express");
const router = new Router();
const multerBrandMiddleware = require("../middleware/multerBrandMiddleware");
const brandController = require("../controllers/brandController");
const isAdminMiddlaware = require("../middleware/isAdminMiddleware");

router.post("/create", multerBrandMiddleware.single("logo"), brandController.create);
router.get("/all", brandController.readAll);
router.get("/:id", brandController.readOne);
router.put("/:id",  brandController.update);
router.delete("/:id",  brandController.remove);

module.exports = router;