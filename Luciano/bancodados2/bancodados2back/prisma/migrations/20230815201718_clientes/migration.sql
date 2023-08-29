/*
  Warnings:

  - A unique constraint covering the columns `[cpf_cnpj,rg_ie]` on the table `clientes` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `clientes_cpf_cnpj_rg_ie_idx` ON `clientes`;

-- CreateIndex
CREATE UNIQUE INDEX `clientes_cpf_cnpj_rg_ie_key` ON `clientes`(`cpf_cnpj`, `rg_ie`);
