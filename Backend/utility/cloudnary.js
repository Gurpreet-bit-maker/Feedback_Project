const { v2: cloudinary } = require("cloudinary");
const fs = require("fs");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME || process.env.CLOUDNARY_NAME,
  api_key: process.env.CLOUDINARY_KEY || process.env.CLOUDNARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET || process.env.CLOUDNARY_SECRATE_KEY,
});

exports.cloudinaryMethod = async (filepath) => {
  if (!filepath) return null;

  try {
    const response = await cloudinary.uploader.upload(filepath, {
      resource_type: "auto",
    });

    if (fs.existsSync(filepath)) {
      fs.unlinkSync(filepath);
    }

    console.log("uploaded file on cloudinary", response);
    return response;
  } catch (error) {
    console.error("Cloudinary upload failed:", error);
    if (fs.existsSync(filepath)) {
      fs.unlinkSync(filepath);
    }
    throw error;
  }
};
