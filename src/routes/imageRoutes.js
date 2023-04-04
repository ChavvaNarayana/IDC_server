const express = require("express");
const router = express.Router();

const {
  getImage,
  deleteImage,
  postImage,
} = require("../Controllers/imageControllers");
const { upload } = require("../middlewares/imageUpload");

router.get("/", getImage);
router.post("/", upload, postImage);
router.delete("/:id", deleteImage);

module.exports = router;
