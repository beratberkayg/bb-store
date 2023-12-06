export interface RatingType {
  rate: number;
  count: number;
}
export interface dataType {
  id?: number;
  title?: string;
  price?: string;
  category?: string;
  description?: string;
  image?: string;
  rating?: RatingType;
}
