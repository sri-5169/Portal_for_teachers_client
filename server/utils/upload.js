import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";
import dotenv from "dotenv";
dotenv.config();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const storage = new GridFsStorage({
  url: `mongodb+srv://${username}:${password}@cluster0.px9ek.mongodb.net/TEACH_PORT_PROJECT?retryWrites=true&w=majority`,
  // url: 'mongodb://localhost:27017/image-upload',
  options: { useUnifiedTopology: true, useNewUrlParser: true },
  file: (request, file) => {
    const match = ["image/png", "image/jpg"];
    if (match.indexOf(file.memeType) === -1)
      return `${Date.now()}-blog-${file.originalname}`;
    return {
      bucketName: "photos",
      filename: `${Date.now()}-blog-${file.originalname}`,
    };
  },
});
export default multer({ storage });
