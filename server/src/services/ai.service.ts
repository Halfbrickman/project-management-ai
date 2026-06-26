import prisma from "../config/Prisma";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export const generateRecommendation = async (
  projectId: number
) => {

  const project = await prisma.project.findUnique({
    where: {
      id: projectId,
    },
    include: {
      tasks: {
        include: {
          reports: {
            orderBy: {
              reportDate: "desc",
            },
          },
        },
      },
    },
  });

  if (!project) {
    throw new Error("Project tidak ditemukan");
  }

  const projectContext = {
    projectName: project.name,
    description: project.description,
    status: project.status,

    tasks: project.tasks.map((task) => ({
      title: task.title,
      status: task.status,
      progress: task.progress,
      deadline: task.deadline,

      reports: task.reports.map((report) => ({
        description: report.description,
        progressUpdate: report.progressUpdate,
        reportDate: report.reportDate,
      })),
    })),
  };

  const prompt = `
Anda adalah Senior Project Management Consultant.

Analisis kondisi proyek berikut.

Tugas Anda:

1. Buat ringkasan kondisi proyek.
2. Identifikasi risiko proyek.
3. Berikan rekomendasi tindakan.

PENTING:

Balas HANYA dalam format JSON valid.

{
  "summary": "ringkasan",
  "risks": [
    "risiko 1"
  ],
  "recommendations": [
    "rekomendasi 1"
  ]
}

Data Proyek:

${JSON.stringify(projectContext, null, 2)}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  const text = response.text ?? "{}";

  console.log("===== RAW RESPONSE =====");
  console.log(text);
  console.log("========================");

  const cleaned = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  console.log("===== CLEANED RESPONSE =====");
  console.log(cleaned);
  console.log("============================");

  const aiResult = JSON.parse(cleaned);

  console.log("===== PARSED RESPONSE =====");
  console.log(aiResult);
  console.log("===========================");

  const result = await prisma.aIRecommendation.create({
    data: {
      projectId,

      summary: aiResult.summary,

      risks: aiResult.risks,

      recommendations: aiResult.recommendations,
    },
  });

  return result;
};
export const getRecommendationHistory = async (
  projectId: number
) => {

  return prisma.aIRecommendation.findMany({
    where: {
      projectId,
    },
    orderBy: {
      generatedAt: "desc",
    },
  });

};
export const getLatestRecommendation = async (
  projectId: number
) => {

  return prisma.aIRecommendation.findFirst({
    where: {
      projectId,
    },
    orderBy: {
      generatedAt: "desc",
    },
  });

};