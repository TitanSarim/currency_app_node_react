/*
  Warnings:

  - You are about to alter the column `cnic` on the `currency` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `amount` on the `currency` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `totalamount` on the `currency` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- AlterTable
ALTER TABLE `currency` MODIFY `cnic` INTEGER NOT NULL,
    MODIFY `amount` INTEGER NOT NULL,
    MODIFY `totalamount` INTEGER NOT NULL;
