-- CreateTable
CREATE TABLE "Vehicles" (
    "id" INTEGER NOT NULL,
    "licensePlate" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "modelAge" INTEGER NOT NULL,
    "classCar" TEXT NOT NULL,
    "fuelType" TEXT NOT NULL,
    "cylinder" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "soatCode" TEXT NOT NULL,
    "insurancePolicy" TEXT NOT NULL,
    "vehiclePhone" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Vehicles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "idUser" TEXT NOT NULL,
    "idVehicleFk" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "userPhone" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "role" TEXT NOT NULL DEFAULT E'user',
    "password" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("idUser")
);

-- CreateTable
CREATE TABLE "Annotations" (
    "idAnnotation" SERIAL NOT NULL,
    "idUserFk" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL,

    CONSTRAINT "Annotations_pkey" PRIMARY KEY ("idAnnotation")
);

-- CreateTable
CREATE TABLE "Dates" (
    "dateCode" INTEGER NOT NULL,
    "idVehicleFk" INTEGER NOT NULL,
    "soatDate" TIMESTAMP(3) NOT NULL,
    "insuranceDate" TIMESTAMP(3) NOT NULL,
    "legalRevisionDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Dates_pkey" PRIMARY KEY ("dateCode")
);

-- CreateTable
CREATE TABLE "PrevMaintenances" (
    "idMaintenance" SERIAL NOT NULL,
    "idVehicleFk" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "commercialInvoice" TEXT NOT NULL,

    CONSTRAINT "PrevMaintenances_pkey" PRIMARY KEY ("idMaintenance")
);

-- CreateTable
CREATE TABLE "CtvMaintenances" (
    "idCorrective" SERIAL NOT NULL,
    "idVehicleFk" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "picEvidence" TEXT NOT NULL,
    "commercialInvoice" TEXT NOT NULL,

    CONSTRAINT "CtvMaintenances_pkey" PRIMARY KEY ("idCorrective")
);

-- CreateTable
CREATE TABLE "SpecMaintenances" (
    "idSpecific" SERIAL NOT NULL,
    "idVehicleFk" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "picEvidence" TEXT NOT NULL,
    "commercialInvoice" TEXT NOT NULL,

    CONSTRAINT "SpecMaintenances_pkey" PRIMARY KEY ("idSpecific")
);

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
CREATE UNIQUE INDEX "Vehicles_licensePlate_key" ON "Vehicles"("licensePlate");

-- CreateIndex
CREATE UNIQUE INDEX "Vehicles_soatCode_key" ON "Vehicles"("soatCode");

-- CreateIndex
CREATE UNIQUE INDEX "Vehicles_insurancePolicy_key" ON "Vehicles"("insurancePolicy");

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_idVehicleFk_fkey" FOREIGN KEY ("idVehicleFk") REFERENCES "Vehicles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Annotations" ADD CONSTRAINT "Annotations_idUserFk_fkey" FOREIGN KEY ("idUserFk") REFERENCES "Users"("idUser") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dates" ADD CONSTRAINT "Dates_idVehicleFk_fkey" FOREIGN KEY ("idVehicleFk") REFERENCES "Vehicles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrevMaintenances" ADD CONSTRAINT "PrevMaintenances_idVehicleFk_fkey" FOREIGN KEY ("idVehicleFk") REFERENCES "Vehicles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CtvMaintenances" ADD CONSTRAINT "CtvMaintenances_idVehicleFk_fkey" FOREIGN KEY ("idVehicleFk") REFERENCES "Vehicles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpecMaintenances" ADD CONSTRAINT "SpecMaintenances_idVehicleFk_fkey" FOREIGN KEY ("idVehicleFk") REFERENCES "Vehicles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrackingLogs" ADD CONSTRAINT "TrackingLogs_idVehicleFk_fkey" FOREIGN KEY ("idVehicleFk") REFERENCES "Vehicles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
