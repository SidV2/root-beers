export interface Picture {
  id: number;
  name: string;
  mimetype: string;
  path: string;
  createdAt: string;
  updatedAt: string;
}

export interface Drink {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  reviewCount: number;
  reviewAverageRating: number;
  pictures: Picture[];
}

export interface DrinkResponse {
  items: Drink[];
  total: number;
}

export interface DrinkQueryParams {
  offset?: number;
  length?: number;
  name?: string;
  description?: string;
  minRating?: number;
  maxRating?: number;
  sort?: string;
  desc?: string;
}
