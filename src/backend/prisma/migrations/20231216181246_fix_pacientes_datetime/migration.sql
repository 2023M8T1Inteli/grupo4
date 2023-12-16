/*
  Warnings:

  - Made the column `data_de_nascimento` on table `Paciente` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Paciente" ALTER COLUMN "data_de_nascimento" SET NOT NULL,
ALTER COLUMN "data_de_nascimento" SET DATA TYPE DATE;
