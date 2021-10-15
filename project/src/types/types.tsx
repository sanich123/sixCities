type User = {
  isPro: boolean,
  avatarUrl: string,
  id: number,
  name: string,
}

export type Offers = {
  bedrooms: number,
  city: {
  name: string
}
  description: string,
  goods: string[],
  host: User,
  id: number,
  images: string[],
  isPremium: boolean,
  isFavorite: boolean,
  maxAdults: number,
  previewImage: string,
  price: number,
  rating: number,
  title: string,
  type: string,
}[];

export type Reviews = {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: User,
}[];

export type Review = {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: User,
}

export type Offer = {
  offer: {
  bedrooms: number,
  city: {name: string}
  description: string,
  goods: string[],
  host: User,
  id: number,
  images: string[],
  isPremium: boolean,
  isFavorite: boolean,
  maxAdults: number,
  previewImage: string,
  price: number,
  rating: number,
  title: string,
  type: string,
}}

export type Strings = string[];
