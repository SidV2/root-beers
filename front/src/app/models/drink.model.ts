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
  Pictures: Picture[];
}

export interface DrinkResponse {
  items: Drink[];
  total: number;
}

export interface Review {
  id: number;
  user_name: string;
  description: string;
  rating: number;
  createdAt: string;
  updatedAt: string;
}

export interface ReviewResponse {
  items: Review[];
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
