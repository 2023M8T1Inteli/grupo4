-- DropForeignKey
ALTER TABLE "Sessoes" DROP CONSTRAINT "Sessoes_paciente_id_fkey";

-- DropForeignKey
ALTER TABLE "Sessoes" DROP CONSTRAINT "Sessoes_terapeuta_email_fkey";

-- AlterTable
ALTER TABLE "Sessoes" ALTER COLUMN "paciente_id" DROP NOT NULL,
ALTER COLUMN "terapeuta_email" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Sessoes" ADD CONSTRAINT "Sessoes_paciente_id_fkey" FOREIGN KEY ("paciente_id") REFERENCES "Paciente"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sessoes" ADD CONSTRAINT "Sessoes_terapeuta_email_fkey" FOREIGN KEY ("terapeuta_email") REFERENCES "Terapeuta"("email") ON DELETE SET NULL ON UPDATE CASCADE;
