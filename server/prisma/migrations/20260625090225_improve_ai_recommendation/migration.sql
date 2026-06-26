/*
  Warnings:

  - You are about to drop the column `recommendation` on the `ai_recommendations` table. All the data in the column will be lost.
  - Added the required column `recommendations` to the `ai_recommendations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `risks` to the `ai_recommendations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ai_recommendations" DROP COLUMN "recommendation",
ADD COLUMN     "recommendations" JSONB NOT NULL,
ADD COLUMN     "risks" JSONB NOT NULL;
