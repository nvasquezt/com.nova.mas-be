/*
  Warnings:

  - A unique constraint covering the columns `[idVehicleFk]` on the table `Dates` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[idVehicleFk]` on the table `Users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "TrackingLogs" (
    "idLog" SERIAL NOT NULL,
    "idVehicleFk" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "TrackingLogs_pkey" PRIMARY KEY ("idLog")
);

-- CreateIndex
CREATE UNIQUE INDEX "TrackingLogs_idVehicleFk_key" ON "TrackingLogs"("idVehicleFk");

-- CreateIndex
CREATE UNIQUE INDEX "Dates_idVehicleFk_key" ON "Dates"("idVehicleFk");

-- CreateIndex
CREATE UNIQUE INDEX "Users_idVehicleFk_key" ON "Users"("idVehicleFk");

-- AddForeignKey
ALTER TABLE "TrackingLogs" ADD CONSTRAINT "TrackingLogs_idVehicleFk_fkey" FOREIGN KEY ("idVehicleFk") REFERENCES "Vehicles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
