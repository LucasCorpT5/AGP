-- CreateTable
CREATE TABLE "UsersLog" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Posts" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "token" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- RenameIndex
ALTER INDEX "Tokens_token_key" RENAME TO "Tokens.token_unique";

-- RenameIndex
ALTER INDEX "Users_email_key" RENAME TO "Users.email_unique";
