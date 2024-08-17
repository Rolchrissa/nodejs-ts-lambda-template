import express from "express";
import { ping } from "src/services/health";
const router = express.Router();

router.get("/ping", ping);

export default router;
