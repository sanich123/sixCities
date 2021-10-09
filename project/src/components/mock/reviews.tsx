import { nanoid } from '@reduxjs/toolkit';
import { Reviews } from '../types/types';

export const mockReviews: Reviews = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2019-05-08T14:13:56.569Z',
    id: nanoid(),
    rating: 4,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: nanoid(),
      isPro: false,
      name: 'Max',
    },
  }, {
    comment: 'Уютненькое местечко возле деревни Бухалово',
    date: '2019-07-08T14:13:56.569Z',
    id: nanoid(),
    rating: 5,
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: nanoid(),
      isPro: true,
      name: 'Василий',
    },
  },
];
