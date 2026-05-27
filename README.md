# Eneba front page recreation

Front page recreation with back end for Eneba internship task.
Project features a dashboard in which there is a selection of products. Product cards are modular, animated and handle different data based on what it includes.
There is paging and some basic filtering.

## Tech stack

Vite + ElysiaJs

### Front:
- Vite
- React
- React Query
- React router
- zustand

### Back:
- Node.js
- ElysiaJS
- PrismaORM
- Neon database (PostgreSQL)

## Installation
Requires neon database key.

Using docker compose -d
```
docker compose up
```
Contains seeder in [seed.ts](./back/prisma/seed.ts) with 8 default elements for different scenarios.
