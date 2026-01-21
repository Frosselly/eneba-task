
import { prisma } from "../src/lib/prisma.js";
import { generateMockGames } from "./mockGames.js";

if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set");
}


async function main() {
    console.log("Start seeding...");
    const mockGames = generateMockGames(8);
    await prisma.game.createMany({
        data: mockGames,
        skipDuplicates: true,
    });
    console.log("Seeding finished.");
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });


