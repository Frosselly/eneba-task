type GameMetadataType = {
    name: string;
    priceAmount: number;
    priceCurrency: string;
    retailPriceAmount: number;
    retailPriceCurrency: string;
    whishlisted: number;
    app: string;
    region: string;
    cashback?: number;
    cover: string; // image URL
};

const BASE_GAMES = [
    {
        baseName: "Split Fiction",
        cover: "https://example.com/covers/split-fiction.jpg",
        apps: ["EA App"],
    },
    {
        baseName: "Red Dead Redemption 2",
        cover: "https://example.com/covers/red-dead-redemption-2.jpg",
        apps: ["Rockstar", "Steam", "Xbox Live", "PlayStation Network"],
    },
];

const PLATFORMS = ["PC", "Xbox One", "PS5"];
const KEY_TYPES = ["Key", "Gift Key", "Green Gift Key"];
const REGIONS = ["GLOBAL", "EU", "US"];

function random<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}

function randomPrice(min: number, max: number): number {
    return Number((Math.random() * (max - min) + min).toFixed(2));
}

function randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function buildName(
    base: string,
    app: string,
    platform: string,
    keyType: string,
    region: string
): string {
    return `${base} (${platform}) ${app} ${keyType} ${region}`;
}

export function generateMockGames(count = 10): GameMetadataType[] {
    const result: GameMetadataType[] = [];

    for (let i = 0; i < count; i++) {
        const game = random(BASE_GAMES);
        const platform = random(PLATFORMS);
        const app = random(game.apps);
        const keyType = random(KEY_TYPES);
        const region = random(REGIONS);

        const retailPrice = randomPrice(59.99, 79.99);
        const salePrice = Number((retailPrice * randomPrice(0.6, 0.85)).toFixed(2));

        result.push({
            name: buildName(
                game.baseName,
                app,
                platform,
                keyType,
                region
            ),
            priceAmount: salePrice,
            priceCurrency: "USD",
            retailPriceAmount: retailPrice,
            retailPriceCurrency: "USD",
            whishlisted: randomInt(1000, 25000),
            app,
            region,
            cashback: randomInt(3, 10),
            cover: game.cover,
        });
    }

    return result;
}