/*
  Warnings:

  - You are about to drop the column `images` on the `blogs` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "blogs" DROP COLUMN "images",
ADD COLUMN     "image" TEXT;
