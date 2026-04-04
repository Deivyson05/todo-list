/*
  Warnings:

  - You are about to drop the column `userId` on the `Tarefa` table. All the data in the column will be lost.
  - Added the required column `userToken` to the `Tarefa` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Tarefa" DROP CONSTRAINT "Tarefa_userId_fkey";

-- AlterTable
ALTER TABLE "Tarefa" DROP COLUMN "userId",
ADD COLUMN     "userToken" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Tarefa" ADD CONSTRAINT "Tarefa_userToken_fkey" FOREIGN KEY ("userToken") REFERENCES "User"("token") ON DELETE RESTRICT ON UPDATE CASCADE;
