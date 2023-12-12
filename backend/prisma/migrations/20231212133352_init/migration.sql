-- CreateTable
CREATE TABLE `currency` (
    `userid` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `cnic` BIGINT NOT NULL,
    `currency` VARCHAR(191) NOT NULL,
    `amount` BIGINT NOT NULL,
    `totalamount` BIGINT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`userid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
