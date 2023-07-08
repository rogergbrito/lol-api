-- CreateTable
CREATE TABLE "champions" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "lore" TEXT,

    CONSTRAINT "champions_pkey" PRIMARY KEY ("id")
);
