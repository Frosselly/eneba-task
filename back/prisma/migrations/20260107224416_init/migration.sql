/*
  Warnings:

  - Added the required column `app` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `whishlisted` to the `Game` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Game" ADD COLUMN     "app" TEXT NOT NULL,
ADD COLUMN     "whishlisted" INTEGER NOT NULL;
