type Host = {
  isPro: boolean,
  avatarUrl: string,
  id: number,
  name: string,
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
  city: {name: string}
  description: string,
  goods: string[],
  host: Host,
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
}

export type Strings = string[];
