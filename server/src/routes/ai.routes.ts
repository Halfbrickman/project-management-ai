import { Router } from "express";
import { authenticateToken } from "../middleware/auth.middleware";
import {
  generate,
  history,
  latest,
} from "../controllers/ai.controller";

const router = Router();

router.post(
  "/generate/:projectId",
  authenticateToken,
  generate
);
router.get(
  "/history/:projectId",
  authenticateToken,
  history
);

router.get(
  "/latest/:projectId",
  authenticateToken,
  latest
);

export default router;