export type RoutesProps = {
  route: string,
  isPrivate: boolean,
  component: () => JSX.Element,
 }

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

export type ReviewDTO = {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: HostAdapted,
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

export type HostAdapted = {
  ['avatar_url']: string,
  id: number,
  ['is_pro']: boolean,
  name: string,
}

export type OfferDTO = {
  bedrooms: number,
  city: City,
  description: string,
  goods: string[],
  host: HostAdapted,
  id: number,
  images: string[],
  ['is_premium']: boolean,
  location: Location,
  ['is_favorite']: boolean,
  ['max_adults']: number,
  ['preview_image']: string,
  price: number,
  rating: number,
  title: string,
  type: string,
 }

export type AuthData = {
  login: string,
  password: string,
};

export type PostComment = {
  id: number,
  comment: string,
  rating: string,
}
