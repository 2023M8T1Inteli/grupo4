/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Terapeuta` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Terapeuta_email_key" ON "Terapeuta"("email");
