/*
  Warnings:

  - You are about to drop the column `shortId` on the `Game` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Game_shortId_key";

-- AlterTable
ALTER TABLE "Game" DROP COLUMN "shortId";
