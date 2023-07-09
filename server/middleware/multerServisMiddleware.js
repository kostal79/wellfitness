const multer = require("multer");
const path = require("path");

// Multer disk storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, "../static/servis"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileExtension = path.extname(file.originalname);
    const fileName = file.fieldname + "-" + uniqueSuffix + fileExtension;
    cb(null, fileName);
  },
});

const fileFilter = function (req, file, cb) {
  const types = [
    "image/png",
    "image/jpeg",
    "image/jpg",
    "text/plain",
    "application/rtf",
    "application/pdf",
    "application/msword",
    "image/svg+xml"
  ];
  if (types.includes((file.mimetype))) {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

module.exports = multer({ storage, fileFilter, limits: {
  fileSize: 1024 * 1024 * 10 //10MB
} });