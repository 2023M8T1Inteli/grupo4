/*
  Warnings:

  - A unique constraint covering the columns `[nome_jogo]` on the table `Jogos` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Jogos_nome_jogo_key" ON "Jogos"("nome_jogo");
