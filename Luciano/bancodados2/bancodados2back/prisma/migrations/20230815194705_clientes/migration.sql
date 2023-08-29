/*
  Warnings:

  - You are about to drop the column `cpf` on the `clientes` table. All the data in the column will be lost.
  - Added the required column `cpf_cnpj` to the `clientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rg_ie` to the `clientes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `clientes` DROP COLUMN `cpf`,
    ADD COLUMN `cpf_cnpj` VARCHAR(191) NOT NULL,
    ADD COLUMN `rg_ie` VARCHAR(191) NOT NULL;
