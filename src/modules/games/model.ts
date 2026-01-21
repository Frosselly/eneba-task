
import { t } from 'elysia'

export namespace GamesModel {

    export const params = t.Object({
        pageIndex: t.Optional(t.Number({ default: 0 })),
        pageSize: t.Optional(t.Number({ default: 10 })),
        search: t.Optional(t.String({ default: '' })),
    })
    export type params = typeof params.static


    export const gamesListResponse = t.Object({
        data: t.Array(t.Any()),
        recordCount: t.String()
    })
    export type gamesListResponse = typeof gamesListResponse.static
}