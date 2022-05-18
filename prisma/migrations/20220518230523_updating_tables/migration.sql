/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[rtmCode]` on the table `Vehicles` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `dateCtvMaint` to the `CtvMaintenances` table without a default value. This is not possible if the table is not empty.
  - Added the required column `datePrevMaint` to the `PrevMaintenances` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateSpecMaint` to the `SpecMaintenances` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CtvMaintenances" ADD COLUMN     "dateCtvMaint" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "PrevMaintenances" ADD COLUMN     "datePrevMaint" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "SpecMaintenances" ADD COLUMN     "dateSpecMaint" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "email" TEXT,
ADD COLUMN     "jobPosition" TEXT,
ADD COLUMN     "picProfile" TEXT;

-- AlterTable
ALTER TABLE "Vehicles" ADD COLUMN     "picVehicle" TEXT,
ADD COLUMN     "rtmCode" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Vehicles_rtmCode_key" ON "Vehicles"("rtmCode");
