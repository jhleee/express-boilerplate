import express from "express";
export const router = express.Router();

import { router as rootRouter } from "./root";
import { router as authRouter } from "./auth";
import { router as adminRouter } from "./admin";
import { authByRole } from "../middlewares/authenticator";

router.use("/", rootRouter);
router.use("/auth", authByRole(), authRouter);
router.use("/admin", authByRole("admin"), adminRouter);

export default router;
