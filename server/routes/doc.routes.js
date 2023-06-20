const Router = require("express");
const router = new Router();
const docController = require("../controllers/docController");
const multerDocMiddleware = require("../middleware/multerDocMiddleware");

router.get("/all",  docController.getList);
router.post("/upload",multerDocMiddleware.single("document"), docController.upload);
router.get("/:id", docController.download);
router.delete("/:id", docController.remove);

module.exports = router;