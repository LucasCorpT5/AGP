-- AlterTable
ALTER TABLE "Tokens" ADD COLUMN     "postsId" TEXT;

-- AddForeignKey
ALTER TABLE "Tokens" ADD FOREIGN KEY ("postsId") REFERENCES "Posts"("id") ON DELETE SET NULL ON UPDATE CASCADE;
