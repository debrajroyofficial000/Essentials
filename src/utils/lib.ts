export interface IReviews {
  comment: string;
  date: string;
  rating: number;
  reviewerEmail: string;
  reviewerName: string;
}

export interface IProduct {
  brand: string;
  category: string;
  description: string;
  id: number;
  images: string[];
  price: number;
  rating: number;
  reviews: IReviews[];
  tags: string[];
  thumbnail: string;
  title: string;
}
