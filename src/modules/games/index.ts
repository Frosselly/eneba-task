
import { Elysia } from 'elysia'

// import { Games } from './service'
import { GamesModel } from './model'
import { prisma } from '../../lib/prisma';
import { Game, Prisma } from '../../generated/prisma/client';





export const GamesController = () => new Elysia()
    .get(
        '/list',
        async ({ query }) => {
            const { pageIndex, pageSize, search = "" } = query as GamesModel.params

            // pagination
            const start = Number(pageIndex) * Number(pageSize)
            // search filter
            const hasFilter = search.trim().length > 0;

            const whereSql = hasFilter
                ? Prisma.sql`
                    WHERE
                    name % ${search}
                    OR name ILIKE '%' || ${search} || '%'
                `
                : Prisma.empty;

            //Raw SQL because prisma doesn't support fuzzy
            const [countResult, games] = await Promise.all([
                prisma.$queryRaw<{ count: bigint }[]>`
                    SELECT COUNT(*)::bigint AS count
                    FROM "Game"
                    ${whereSql}
                `,
                prisma.$queryRaw<Game[]>`
                    SELECT *
                    FROM "Game"
                    ${whereSql}
                    OFFSET ${start}
                    LIMIT ${pageSize}
                `,
            ]);

            return {
                data: games,
                recordCount: countResult[0].count.toString()
            } satisfies GamesModel.gamesListResponse
        },
        {
            query: GamesModel.params
        }
    );

