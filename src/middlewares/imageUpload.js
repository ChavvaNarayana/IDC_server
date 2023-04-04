const multer = require("multer");

const imageConfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./public");
  },
  filename: (req, file, callback) => {
    const timestamp = Date.now();
    const filename = `image-${timestamp}-${file.originalname}`;
    callback(null, filename);
  },
});

const isImage = (req, file, callback) => {
  if (file.mimetype.startsWith("image")) {
    callback(null, true);
  } else {
    const error = new Error("Only image files are allowed");
    error.statusCode = 400;
    callback(error);
  }
};

const upload = multer({
  storage: imageConfig,
  fileFilter: isImage,
}).single("photo");

module.exports = { upload };
