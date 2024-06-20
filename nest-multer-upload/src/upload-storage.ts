import * as multer from 'multer';
import fs from 'fs';
import * as path from 'path';

export const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    try {
      fs.mkdirSync(path.join(process.cwd(), 'my-uploads'));
    } catch (e) {}
    cb(null, path.join(process.cwd(), 'my-uploads'));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix =
      Date.now() +
      '-' +
      Math.round(Math.random() * 1e9) +
      '-' +
      file.originalname;
    cb(null, file.fieldname + '-' + uniqueSuffix);
  },
});
