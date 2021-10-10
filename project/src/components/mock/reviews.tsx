import { nanoid } from '@reduxjs/toolkit';
import { Reviews } from '../types/types';

export const mockReviews: Reviews = [
  {
    comment: 'Полное говно, совсем не понравилось ничиво',
    date: '2019-05-08T14:13:56.569Z',
    id: nanoid(),
    rating: 2,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: nanoid(),
      isPro: false,
      name: 'Max',
    },
  }, {
    comment: 'Уютненькое местечко возле деревни Бухалово, но многовато алканавтов',
    date: '2019-07-08T14:13:56.569Z',
    id: nanoid(),
    rating: 3,
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: nanoid(),
      isPro: true,
      name: 'Василий',
    },
  },
];
