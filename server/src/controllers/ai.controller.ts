import { Request, Response } from "express";
import {
  generateRecommendation,
  getRecommendationHistory,
  getLatestRecommendation,
} from "../services/ai.service";


export const generate = async (
  req: Request,
  res: Response
) => {

  try {

    const result =
      await generateRecommendation(
        Number(req.params.projectId)
      );

    res.status(200).json({
      success: true,
      data: result,
    });

  } catch (error: any) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

export const history = async (
  req: Request,
  res: Response
) => {

  try {

    const projectId = Number(req.params.projectId);

    const data =
      await getRecommendationHistory(projectId);

    return res.status(200).json({
      success: true,
      data,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error instanceof Error
        ? error.message
        : "Internal Server Error",
    });

  }

};
export const latest = async (
  req: Request,
  res: Response
) => {

  try {

    const projectId = Number(req.params.projectId);

    const data =
      await getLatestRecommendation(projectId);

    return res.status(200).json({
      success: true,
      data,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error instanceof Error
        ? error.message
        : "Internal Server Error",
    });

  }

};
