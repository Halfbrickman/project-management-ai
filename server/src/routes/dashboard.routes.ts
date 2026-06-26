import { Router } from "express";

import { summary } from "../controllers/dashboard.controller";

import { authenticateToken } from "../middleware/auth.middleware";

const router = Router();

router.get(
  "/",
  authenticateToken,
  summary
);

export default router;