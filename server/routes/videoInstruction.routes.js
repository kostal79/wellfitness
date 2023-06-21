const Router = require("express");
const router = new Router();
const isAdmin = require("../middleware/isAdminMiddleware");
const videoInstructionController = require("../controllers/videoInstructionController");

router.post("/create", isAdmin, videoInstructionController.create);
router.get("/all", videoInstructionController.readAll);
router.get("/:instructionId", videoInstructionController.readOne);
router.put("/:instructionId", isAdmin, videoInstructionController.update);
router.delete("/:instructionId",isAdmin, videoInstructionController.remove);

module.exports = router;