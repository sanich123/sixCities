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
  id: number,
  name: string,
}
  id: number,
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
  id: number,
  rating: number,
  user: {
    avatarUrl: string,
    id: number,
    isPro: boolean,
    name: string,
  }
}[];

export type Offer = {
  offer: {
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
  id: number,
  name: string,
}
  id: number,
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
}}

export type Strings = string[];
