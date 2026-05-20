// const { v2: cloudinary } = require("cloudinary");
// const fs = require("fs");

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_NAME || process.env.CLOUDNARY_NAME,
//   api_key: process.env.CLOUDINARY_KEY || process.env.CLOUDNARY_KEY,
//   api_secret:
//     process.env.CLOUDINARY_SECRET || process.env.CLOUDNARY_SECRATE_KEY,
// });

// exports.cloudinaryMethod = async (buffer) => {
//   if (!buffer) return null;
//   console.log("this is file path", buffer);

//   try {
//     const response = await cloudinary.uploader.upload(buffer, {
//       resource_type: "auto",
//     });

//     if (fs.existsSync(buffer)) {
//       fs.unlinkSync(buffer);
//     }

//     console.log("uploaded file on cloudinary", response);
//     return response;
//   } catch (error) {
//     console.error("Cloudinary upload failed:", error);
//     if (fs.existsSync(buffer)) {
//       fs.unlinkSync(buffer);
//     }
//     throw error;
//   }
// };

//! store the file at cloudinary. send the respone to controller so that data can be store in Db.
let { v2: cloudinary } = require("cloudinary");
let fs = require("fs");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME || process.env.CLOUDNARY_NAME,
  api_key: process.env.CLOUDINARY_KEY || process.env.CLOUDNARY_KEY,
  api_secret:
    process.env.CLOUDINARY_SECRET || process.env.CLOUDNARY_SECRATE_KEY,
});

exports.cloudinaryMethod = async (buffer) => {
  if (!buffer) {
    return null;
  }
  try {
    let response = await cloudinary.uploader.upload(
      `data:image/png;base64,${buffer.toString("base64")}`,
    );

    console.log("cloudinary uploaded", response);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
