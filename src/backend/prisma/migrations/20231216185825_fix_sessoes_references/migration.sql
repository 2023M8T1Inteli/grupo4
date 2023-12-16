/*
  Warnings:

  - You are about to drop the column `Jogos_id` on the `Sessoes` table. All the data in the column will be lost.
  - You are about to drop the column `Paciente_id` on the `Sessoes` table. All the data in the column will be lost.
  - You are about to drop the column `Terapeuta_id` on the `Sessoes` table. All the data in the column will be lost.
  - Added the required column `jogos_id` to the `Sessoes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paciente_id` to the `Sessoes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `terapeuta_email` to the `Sessoes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Sessoes" DROP CONSTRAINT "Sessoes_Jogos_id_fkey";

-- DropForeignKey
ALTER TABLE "Sessoes" DROP CONSTRAINT "Sessoes_Paciente_id_fkey";

-- DropForeignKey
ALTER TABLE "Sessoes" DROP CONSTRAINT "Sessoes_Terapeuta_id_fkey";

-- AlterTable
ALTER TABLE "Sessoes" DROP COLUMN "Jogos_id",
DROP COLUMN "Paciente_id",
DROP COLUMN "Terapeuta_id",
ADD COLUMN     "jogos_id" INTEGER NOT NULL,
ADD COLUMN     "paciente_id" TEXT NOT NULL,
ADD COLUMN     "terapeuta_email" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Sessoes" ADD CONSTRAINT "Sessoes_paciente_id_fkey" FOREIGN KEY ("paciente_id") REFERENCES "Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sessoes" ADD CONSTRAINT "Sessoes_terapeuta_email_fkey" FOREIGN KEY ("terapeuta_email") REFERENCES "Terapeuta"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sessoes" ADD CONSTRAINT "Sessoes_jogos_id_fkey" FOREIGN KEY ("jogos_id") REFERENCES "Jogos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
