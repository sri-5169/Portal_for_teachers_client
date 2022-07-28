import express from "express";
import { GetInfo } from "../controllers/info_controller.js";
import { authenticateToken, createNewToken } from "../controllers/jwt_controller.js";
import { CreateUser, LoginUser } from "../controllers/user_controller.js";

const router = express.Router();
// token 
router.post('/token',createNewToken);

//users

router.post("/signup", CreateUser);
router.post("/login", LoginUser);

//infos
// router.get("/infos", GetAllInfos);
router.post("/detail", authenticateToken, GetInfo);

export default router;
