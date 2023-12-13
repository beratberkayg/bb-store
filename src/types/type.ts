import { Timestamp } from "firebase/firestore";

export interface RatingType {
  rate: number;
  count: number;
}
export interface dataType {
  id?: number;
  title?: string;
  price?: string | number;
  category?: string;
  description?: string;
  image?: string;
  rating?: RatingType;
  cartQuantity?: number;
}

export type CommentProps = {
  id: string;
  comment: string;
  kullaniciAd: string;
  kullaniciId: string;
  tarih: Timestamp;
  item: dataType;
};
