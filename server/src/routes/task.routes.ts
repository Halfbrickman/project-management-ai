import { Router } from "express";

import {
  create,
  findAll,
  updateTaskProgress,
} from "../controllers/task.controller";

import { authenticateToken } from "../middleware/auth.middleware";

const router = Router();

router.post(
  "/",
  authenticateToken,
  create
);

router.get(
  "/",
  authenticateToken,
  findAll
);

router.patch(
  "/:id/progress",
  authenticateToken,
  updateTaskProgress
);

export default router;