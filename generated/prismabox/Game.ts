import { t } from "elysia";

import { __transformDate__ } from "./__transformDate__";

import { __nullable__ } from "./__nullable__";

export const GamePlain = t.Object(
  {
    id: t.String(),
    name: t.String(),
    region: t.String(),
    cashback: __nullable__(t.Integer()),
    cover: __nullable__(t.String()),
    priceAmount: t.Integer(),
    priceCurrency: t.String(),
    retailPriceAmount: t.Integer(),
    retailPriceCurrency: t.String(),
    whishlisted: t.Integer(),
    app: t.String(),
    createdAt: t.Date(),
    updatedAt: t.Date(),
  },
  { additionalProperties: false },
);

export const GameRelations = t.Object({}, { additionalProperties: false });

export const GamePlainInputCreate = t.Object(
  {
    name: t.String(),
    region: t.String(),
    cashback: t.Optional(__nullable__(t.Integer())),
    cover: t.Optional(__nullable__(t.String())),
    priceAmount: t.Integer(),
    priceCurrency: t.String(),
    retailPriceAmount: t.Integer(),
    retailPriceCurrency: t.String(),
    whishlisted: t.Integer(),
    app: t.String(),
  },
  { additionalProperties: false },
);

export const GamePlainInputUpdate = t.Object(
  {
    name: t.Optional(t.String()),
    region: t.Optional(t.String()),
    cashback: t.Optional(__nullable__(t.Integer())),
    cover: t.Optional(__nullable__(t.String())),
    priceAmount: t.Optional(t.Integer()),
    priceCurrency: t.Optional(t.String()),
    retailPriceAmount: t.Optional(t.Integer()),
    retailPriceCurrency: t.Optional(t.String()),
    whishlisted: t.Optional(t.Integer()),
    app: t.Optional(t.String()),
  },
  { additionalProperties: false },
);

export const GameRelationsInputCreate = t.Object(
  {},
  { additionalProperties: false },
);

export const GameRelationsInputUpdate = t.Partial(
  t.Object({}, { additionalProperties: false }),
);

export const GameWhere = t.Partial(
  t.Recursive(
    (Self) =>
      t.Object(
        {
          AND: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          NOT: t.Union([Self, t.Array(Self, { additionalProperties: false })]),
          OR: t.Array(Self, { additionalProperties: false }),
          id: t.String(),
          name: t.String(),
          region: t.String(),
          cashback: t.Integer(),
          cover: t.String(),
          priceAmount: t.Integer(),
          priceCurrency: t.String(),
          retailPriceAmount: t.Integer(),
          retailPriceCurrency: t.String(),
          whishlisted: t.Integer(),
          app: t.String(),
          createdAt: t.Date(),
          updatedAt: t.Date(),
        },
        { additionalProperties: false },
      ),
    { $id: "Game" },
  ),
);

export const GameWhereUnique = t.Recursive(
  (Self) =>
    t.Intersect(
      [
        t.Partial(
          t.Object(
            { id: t.String(), name: t.String() },
            { additionalProperties: false },
          ),
          { additionalProperties: false },
        ),
        t.Union(
          [t.Object({ id: t.String() }), t.Object({ name: t.String() })],
          { additionalProperties: false },
        ),
        t.Partial(
          t.Object({
            AND: t.Union([
              Self,
              t.Array(Self, { additionalProperties: false }),
            ]),
            NOT: t.Union([
              Self,
              t.Array(Self, { additionalProperties: false }),
            ]),
            OR: t.Array(Self, { additionalProperties: false }),
          }),
          { additionalProperties: false },
        ),
        t.Partial(
          t.Object(
            {
              id: t.String(),
              name: t.String(),
              region: t.String(),
              cashback: t.Integer(),
              cover: t.String(),
              priceAmount: t.Integer(),
              priceCurrency: t.String(),
              retailPriceAmount: t.Integer(),
              retailPriceCurrency: t.String(),
              whishlisted: t.Integer(),
              app: t.String(),
              createdAt: t.Date(),
              updatedAt: t.Date(),
            },
            { additionalProperties: false },
          ),
        ),
      ],
      { additionalProperties: false },
    ),
  { $id: "Game" },
);

export const GameSelect = t.Partial(
  t.Object(
    {
      id: t.Boolean(),
      name: t.Boolean(),
      region: t.Boolean(),
      cashback: t.Boolean(),
      cover: t.Boolean(),
      priceAmount: t.Boolean(),
      priceCurrency: t.Boolean(),
      retailPriceAmount: t.Boolean(),
      retailPriceCurrency: t.Boolean(),
      whishlisted: t.Boolean(),
      app: t.Boolean(),
      createdAt: t.Boolean(),
      updatedAt: t.Boolean(),
      _count: t.Boolean(),
    },
    { additionalProperties: false },
  ),
);

export const GameInclude = t.Partial(
  t.Object({ _count: t.Boolean() }, { additionalProperties: false }),
);

export const GameOrderBy = t.Partial(
  t.Object(
    {
      id: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      name: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      region: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      cashback: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      cover: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      priceAmount: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      priceCurrency: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      retailPriceAmount: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      retailPriceCurrency: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      whishlisted: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      app: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      createdAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
      updatedAt: t.Union([t.Literal("asc"), t.Literal("desc")], {
        additionalProperties: false,
      }),
    },
    { additionalProperties: false },
  ),
);

export const Game = t.Composite([GamePlain, GameRelations], {
  additionalProperties: false,
});

export const GameInputCreate = t.Composite(
  [GamePlainInputCreate, GameRelationsInputCreate],
  { additionalProperties: false },
);

export const GameInputUpdate = t.Composite(
  [GamePlainInputUpdate, GameRelationsInputUpdate],
  { additionalProperties: false },
);
