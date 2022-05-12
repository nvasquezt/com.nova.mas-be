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
    "vehiclePhone" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Vehicles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "idUser" INTEGER NOT NULL,
    "idVehicleFk" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "userPhone" INTEGER NOT NULL,
    "annotations" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "role" TEXT NOT NULL DEFAULT E'user',

    CONSTRAINT "Users_pkey" PRIMARY KEY ("idUser")
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

-- CreateIndex
CREATE UNIQUE INDEX "Vehicles_licensePlate_key" ON "Vehicles"("licensePlate");

-- CreateIndex
CREATE UNIQUE INDEX "Vehicles_soatCode_key" ON "Vehicles"("soatCode");

-- CreateIndex
CREATE UNIQUE INDEX "Vehicles_insurancePolicy_key" ON "Vehicles"("insurancePolicy");

-- CreateIndex
CREATE UNIQUE INDEX "PrevMaintenances_idVehicleFk_key" ON "PrevMaintenances"("idVehicleFk");

-- CreateIndex
CREATE UNIQUE INDEX "CtvMaintenances_idVehicleFk_key" ON "CtvMaintenances"("idVehicleFk");

-- CreateIndex
CREATE UNIQUE INDEX "SpecMaintenances_idVehicleFk_key" ON "SpecMaintenances"("idVehicleFk");

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_idVehicleFk_fkey" FOREIGN KEY ("idVehicleFk") REFERENCES "Vehicles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dates" ADD CONSTRAINT "Dates_idVehicleFk_fkey" FOREIGN KEY ("idVehicleFk") REFERENCES "Vehicles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrevMaintenances" ADD CONSTRAINT "PrevMaintenances_idVehicleFk_fkey" FOREIGN KEY ("idVehicleFk") REFERENCES "Vehicles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CtvMaintenances" ADD CONSTRAINT "CtvMaintenances_idVehicleFk_fkey" FOREIGN KEY ("idVehicleFk") REFERENCES "Vehicles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpecMaintenances" ADD CONSTRAINT "SpecMaintenances_idVehicleFk_fkey" FOREIGN KEY ("idVehicleFk") REFERENCES "Vehicles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
