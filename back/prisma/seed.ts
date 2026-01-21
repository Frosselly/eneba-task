
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client.js";

import { generateMockGames } from "./mockGames.js";

if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set");
}

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });


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


