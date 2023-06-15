const Router = require("express");
const router = new Router();
const multerBrandMiddleware = require("../middleware/multerBrandMiddleware");
const brandController = require("../controllers/brandController");

router.post("/create", multerBrandMiddleware.single("logo"), brandController.create);
router.get("/all", brandController.readAll);
router.get("/:id", brandController.readOne);
router.put("/:id", brandController.update);
router.delete("/:id", brandController.delete);

module.exports = router;