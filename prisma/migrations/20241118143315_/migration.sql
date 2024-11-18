/*
  Warnings:

  - The values [THRUSDAY] on the enum `Day` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `student` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `tilte` on the `Assignment` table. All the data in the column will be lost.
  - You are about to drop the column `supervisonId` on the `Class` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `Admin` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `username` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Assignment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endTime` to the `Lesson` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `Lesson` table without a default value. This is not possible if the table is not empty.
  - Added the required column `score` to the `Result` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthday` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthday` to the `Teacher` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Day_new" AS ENUM ('MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY');
ALTER TABLE "Lesson" ALTER COLUMN "day" TYPE "Day_new" USING ("day"::text::"Day_new");
ALTER TYPE "Day" RENAME TO "Day_old";
ALTER TYPE "Day_new" RENAME TO "Day";
DROP TYPE "Day_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "Class" DROP CONSTRAINT "Class_supervisonId_fkey";

-- DropIndex
DROP INDEX "Admin_student_key";

-- AlterTable
ALTER TABLE "Admin" DROP COLUMN "student",
ADD COLUMN     "username" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Assignment" DROP COLUMN "tilte",
ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Class" DROP COLUMN "supervisonId",
ADD COLUMN     "supervisorId" TEXT;

-- AlterTable
ALTER TABLE "Lesson" ADD COLUMN     "endTime" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "startTime" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Result" ADD COLUMN     "score" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "birthday" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Teacher" ADD COLUMN     "birthday" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Admin_username_key" ON "Admin"("username");

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_supervisorId_fkey" FOREIGN KEY ("supervisorId") REFERENCES "Teacher"("id") ON DELETE SET NULL ON UPDATE CASCADE;
