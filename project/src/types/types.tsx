export type Host = {
  isPro: boolean,
  avatarUrl: string,
  id: number,
  name: string,
 }

export type City = {
  location: Location,
  name: string,
}

export type Location = {
    latitude: number,
    longitude: number,
    zoom: number,
}

export type Review = {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: Host,
 }

export type Offer = {
  bedrooms: number,
  city: City,
  description: string,
  goods: string[],
  host: Host,
  id: number,
  images: string[],
  isPremium: boolean,
  location: Location,
  isFavorite: boolean,
  maxAdults: number,
  previewImage: string,
  price: number,
  rating: number,
  title: string,
  type: string,
 }
