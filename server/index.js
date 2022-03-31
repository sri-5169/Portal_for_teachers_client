import express from "express";
import dotenv from "dotenv";
import Router from "./routes/routes.js";
import Connection from "./database/db.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
dotenv.config();
const PORT = process.env.PORT || 8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
app.use("/", Router);
Connection(username, password);
app.listen(PORT, () => console.log(`Server is running at PORT ${PORT}`));
