const cloudinary = require('cloudinary').v2;
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

async function testCloudinary() {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  });

  return new Promise((resolve) => {
    cloudinary.api.ping((error, result) => {
      if (error) {
        console.error('Cloudinary ping failed:', error.message);
        resolve(false);
      } else {
        console.log('SUCCESS: Cloudinary ping response:', result);
        resolve(true);
      }
    });
  });
}

testCloudinary().then(() => process.exit(0));
