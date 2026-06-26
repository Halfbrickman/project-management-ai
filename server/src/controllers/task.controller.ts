import { Request, Response } from "express";
import {
  createTask,
  getTasks,
  updateProgress
} from "../services/task.service";

export const create = async (
  req: Request,
  res: Response
) => {

  try {

    const task = await createTask(
      req.body
    );

    res.status(201).json({
      success: true,
      data: task,
    });

  } catch (error: any) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

export const findAll = async (
  req: Request,
  res: Response
) => {

  const tasks = await getTasks();

  res.json({
    success: true,
    data: tasks,
  });

};

export const updateTaskProgress = async (
  req: Request,
  res: Response
) => {

  const task = await updateProgress(
    Number(req.params.id),
    req.body.progress
  );

  res.json({
    success: true,
    data: task,
  });

};