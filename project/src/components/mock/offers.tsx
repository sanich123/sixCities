import { Offers } from '../types/types';
import { nanoid } from '@reduxjs/toolkit';

export const offers: Offers = [
  {
    id: nanoid(),
    isPremium: false,
    img: 'img/apartment-01.jpg',
    price: 125,
    rating: '100',
    description: 'Beautiful &amp; luxurious apartment at great location',
    type: 'Apartment',
  }, {
    id: nanoid(),
    isPremium: true,
    img: 'img/apartment-02.jpg',
    price: 103,
    rating: '80',
    description: 'Nice, cozy, warm big bed apartment',
    type: 'Private room',
  }, {
    id: nanoid(),
    isPremium: false,
    img: 'img/apartment-03.jpg',
    price: 98,
    rating: '100',
    description: 'Canal View Prinsengracht',
    type: 'Private room',
  }, {
    id: nanoid(),
    isPremium: false,
    img: 'img/apartment-04.jpg',
    price: 75,
    rating: '80',
    description: 'Wood and stone place',
    type: 'Apartment',
  }];

