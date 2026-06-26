import { Router } from "express";

import {
  create,
  findAll,
  findByTask,
} from "../controllers/report.controller";

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

router.get(
  "/task/:taskId",
  authenticateToken,
  findByTask
);

export default router;