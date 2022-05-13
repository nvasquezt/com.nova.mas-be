-- AlterTable
CREATE SEQUENCE "dates_datecode_seq";
ALTER TABLE "Dates" ALTER COLUMN "dateCode" SET DEFAULT nextval('dates_datecode_seq');
ALTER SEQUENCE "dates_datecode_seq" OWNED BY "Dates"."dateCode";
