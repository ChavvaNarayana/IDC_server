let multer = require("multer");

const imgconfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./public");
  },
  filename: (req, file, callback) => {
    callback(null, `imgae-${Date.now()}.${file.originalname}`);
  },
});

// img filter
const isImage = (req, file, callback) => {
  if (file.mimetype.startsWith("image")) {
    callback(null, true);
  } else {
    callback(new Error("only images is allowed"));
  }
};

const upload = multer({
  storage: imgconfig,
  fileFilter: isImage,
}).single("photo");

module.exports = { upload };
