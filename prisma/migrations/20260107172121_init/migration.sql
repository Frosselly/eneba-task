-- CreateTable
CREATE TABLE "Game" (
    "id" TEXT NOT NULL,
    "shortId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "cashback" INTEGER,
    "cover" TEXT,
    "priceAmount" INTEGER NOT NULL,
    "priceCurrency" TEXT NOT NULL,
    "retailPriceAmount" INTEGER NOT NULL,
    "retailPriceCurrency" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Game_shortId_key" ON "Game"("shortId");
