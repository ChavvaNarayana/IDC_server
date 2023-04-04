let express = require("express");
const imageModel = require("../Model/imageSchemas");
const router = express.Router();
let { upload } = require("../middlewares/imageUpload");
router.use(express.json());
let { getImage } = require("../Controllers/imageControllers");
let { deleteImage } = require("../Controllers/imageControllers");
let { postImage } = require("../Controllers/imageControllers");

router.get("/", getImage);
router.post("/", upload, postImage);
router.delete("/:id", deleteImage);

module.exports = router;
