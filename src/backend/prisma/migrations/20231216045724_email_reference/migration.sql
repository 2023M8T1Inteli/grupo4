/*
  Warnings:

  - You are about to drop the column `criadorId` on the `Jogos` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Jogos" DROP CONSTRAINT "Jogos_criadorId_fkey";

-- AlterTable
ALTER TABLE "Jogos" DROP COLUMN "criadorId",
ADD COLUMN     "criadorEmail" TEXT;

-- AddForeignKey
ALTER TABLE "Jogos" ADD CONSTRAINT "Jogos_criadorEmail_fkey" FOREIGN KEY ("criadorEmail") REFERENCES "Terapeuta"("email") ON DELETE SET NULL ON UPDATE CASCADE;
