export type Offers = {
bedrooms: number,
city: {
  name: string,
  // location: {
  //   latitude: number,
  //   longitude: number,
  //   zoom: number,
  // }
}
description: string,
goods: string[],
host: {
  isPro: boolean,
  avatarUrl: string,
  id: string,
  name: string,
}
  id: string,
  images: string[],
  isPremium: boolean,
  isFavorite: boolean,
  // location: {
  //   latitude: number,
  //   longitude: number,
  //   zoom: number,
  // }
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
  id: string,
  rating: number,
  user: {
    avatarUrl: string,
    id: string,
    isPro: boolean,
    name: string,
  }
}[];

export type Strings = string[];
