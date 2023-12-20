/*
  Warnings:

  - You are about to drop the column `criador` on the `Jogos` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Jogos" DROP CONSTRAINT "Jogos_criador_fkey";

-- AlterTable
ALTER TABLE "Jogos" DROP COLUMN "criador",
ADD COLUMN     "criadorId" TEXT;

-- AddForeignKey
ALTER TABLE "Jogos" ADD CONSTRAINT "Jogos_criadorId_fkey" FOREIGN KEY ("criadorId") REFERENCES "Terapeuta"("id") ON DELETE SET NULL ON UPDATE CASCADE;
