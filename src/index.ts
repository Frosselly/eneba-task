import { Elysia, t } from "elysia";
import { openapi } from '@elysiajs/openapi'
import { GamesController } from "./modules/games";

const app = new Elysia()
  .use(openapi())
  .use(GamesController())
  .listen(process.env.PORT ?? 3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
