import { Request, Response } from "express";
import { getDashboardSummary } from "../services/dashboard.service";

export const summary = async (
  req: Request,
  res: Response
) => {

  try {

    const data =
      await getDashboardSummary();

    res.status(200).json({
      success: true,
      data,
    });

  } catch (error: any) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};