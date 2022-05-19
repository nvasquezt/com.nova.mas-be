/* eslint-disable @typescript-eslint/no-var-requires */
import fs from 'fs';
import { v2 as cloudinary } from 'cloudinary'
async function UploadImage(image: string) {

  try {
    const result = await cloudinary.uploader.upload(image);
    return result;
  } catch (error) {
    console.log(error);
  } finally{
    fs.unlinkSync(image);
  }
}

export default UploadImage;
