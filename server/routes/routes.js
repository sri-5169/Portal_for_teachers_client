import express from "express";
import {
  CreateComplaint,
  GetAdminNames,
  GetAllComplaints,
  GetComplaint,
} from "../controllers/complaint_contoller.js";
import { GetImage, UploadImage } from "../controllers/image_controller.js";
import { GetInfo, GetSalaries } from "../controllers/info_controller.js";
import { authenticateToken, createNewToken } from "../controllers/jwt_controller.js";
import { CreateReport, GetAllReports, GetReport } from "../controllers/report_controller.js";
import { CreateUser, ForgotPassword, LoginUser } from "../controllers/user_controller.js";
import upload from "../utils/upload.js";

const router = express.Router();
// token 
router.post('/token',createNewToken);
//users
router.post("/signup", CreateUser);
router.post("/login", LoginUser);
router.post("/forgotpassword",ForgotPassword);

//infos
// router.get("/infos", GetAllInfos);
router.post("/detail", authenticateToken, GetInfo);
router.post("/salaries",authenticateToken, GetSalaries);

// images
router.post("/file/upload", upload.single("file"), UploadImage);
router.get("/file/:filename", GetImage);

// complaints
router.get("/adminNames",authenticateToken,GetAdminNames);
router.post("/complaints/create", authenticateToken, CreateComplaint);
router.get("/complaints/:UANNumber", authenticateToken, GetAllComplaints);
router.get("/complaint/:id", authenticateToken, GetComplaint);

// reports
router.post("/reports/create", authenticateToken, CreateReport);
router.get("/reports", authenticateToken, GetAllReports);
router.get("/report/:id", authenticateToken, GetReport);
export default router;
