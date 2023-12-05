-- CreateTable
CREATE TABLE "Terapeuta" (
    "id" TEXT NOT NULL,
    "nome_completo" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "Terapeuta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Paciente" (
    "id" TEXT NOT NULL,
    "nome_completo" TEXT NOT NULL,
    "data_de_nascimento" TIMESTAMP(3),
    "nome_responsavel" TEXT NOT NULL,
    "contato_responsavel" TEXT NOT NULL,
    "ficha_medica" TEXT,

    CONSTRAINT "Paciente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Jogos" (
    "id" SERIAL NOT NULL,
    "nome_jogo" TEXT NOT NULL,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_edicao" TIMESTAMP(3) NOT NULL,
    "publico" BOOLEAN NOT NULL,
    "arquivo" TEXT,
    "criador" TEXT NOT NULL,

    CONSTRAINT "Jogos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sessoes" (
    "id" TEXT NOT NULL,
    "Paciente_id" TEXT NOT NULL,
    "Terapeuta_id" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "Jogos_id" INTEGER NOT NULL,

    CONSTRAINT "Sessoes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Jogos" ADD CONSTRAINT "Jogos_criador_fkey" FOREIGN KEY ("criador") REFERENCES "Terapeuta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sessoes" ADD CONSTRAINT "Sessoes_Paciente_id_fkey" FOREIGN KEY ("Paciente_id") REFERENCES "Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sessoes" ADD CONSTRAINT "Sessoes_Terapeuta_id_fkey" FOREIGN KEY ("Terapeuta_id") REFERENCES "Terapeuta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sessoes" ADD CONSTRAINT "Sessoes_Jogos_id_fkey" FOREIGN KEY ("Jogos_id") REFERENCES "Jogos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
