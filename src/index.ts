import { Elysia, t } from "elysia";
import { openapi } from '@elysiajs/openapi'
import { GamesController } from "./modules/games";

const app = new Elysia()
  .use(openapi())
  .use(GamesController())
  .get('/', 'Hello Elysia')
  .get('/user/:id', ({ params: { id } }) => id, {
    params: t.Object({
      id: t.Number()
    })
  })
  .post('/form', ({ body }) => body)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
