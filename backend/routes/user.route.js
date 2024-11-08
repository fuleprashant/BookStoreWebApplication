import express from "express";
import { signUp } from "../controllers/user.controllers";

const router = express.Router();
router.get("/", signUp);
export default router;
