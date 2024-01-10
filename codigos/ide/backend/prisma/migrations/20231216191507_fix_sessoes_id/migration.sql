/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Paciente` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Terapeuta` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Paciente_id_key" ON "Paciente"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Terapeuta_id_key" ON "Terapeuta"("id");
