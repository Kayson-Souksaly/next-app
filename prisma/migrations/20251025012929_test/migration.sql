-- CreateTable
CREATE TABLE "Comments" (
    "uuid" TEXT NOT NULL,
    "likes" INTEGER NOT NULL DEFAULT 0,
    "user" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "postUuid" TEXT NOT NULL,

    CONSTRAINT "Comments_pkey" PRIMARY KEY ("uuid")
);

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_postUuid_fkey" FOREIGN KEY ("postUuid") REFERENCES "Post"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
