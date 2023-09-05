/*
  Warnings:

  - You are about to drop the column `cel_fixo` on the `clientes` table. All the data in the column will be lost.
  - You are about to drop the column `cel_tel` on the `clientes` table. All the data in the column will be lost.
  - You are about to drop the column `numero` on the `clientes` table. All the data in the column will be lost.
  - You are about to drop the column `quantidade` on the `produtos` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `usuario` table. All the data in the column will be lost.
  - Added the required column `casa` to the `clientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefone` to the `clientes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `clientes` DROP COLUMN `cel_fixo`,
    DROP COLUMN `cel_tel`,
    DROP COLUMN `numero`,
    ADD COLUMN `casa` VARCHAR(191) NOT NULL,
    ADD COLUMN `telefone` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `produtos` DROP COLUMN `quantidade`;

-- AlterTable
ALTER TABLE `usuario` DROP COLUMN `nome`;
