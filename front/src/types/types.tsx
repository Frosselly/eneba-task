export type GameMetadataType = {
  id: string;
  name: string;
  price: number;
  discount: number;
  whishlisted: number;
  app: string;
  region: string;
  cover: string;
};

export type PagingType = {
  page: number;
  limit: number;
  total: number;
};

export type GamesResponseType = {
  data: ProductType[];
  recordCount: string;
};

export type ProductType = {
  id: string | null;
  name: string | null;
  region: string | null;
  cashback: number | null;
  cover: string | null;
  priceAmount: number | null;
  priceCurrency: string | null;
  retailPriceAmount: number | null;
  retailPriceCurrency: string | null;
  whishlisted: number | null;
  app: string | null;
  createdAt: Date | null;
  updatedAt: Date | null;
};

export type UserStoreType = {
  shoppingCart: string[];
  addToCart: (gameId: string) => void;
  removeFromCart: (gameId: string) => void;
  wishlist: string[];
  toggleWishlist: (gameId: string) => void;
};
