/*
  Warnings:

  - You are about to drop the column `content` on the `comments` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `comments` table. All the data in the column will be lost.
  - Added the required column `comment` to the `comments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "comments" DROP COLUMN "content",
DROP COLUMN "title",
ADD COLUMN     "comment" TEXT NOT NULL;
