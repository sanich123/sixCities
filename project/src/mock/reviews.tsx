import { Review } from '../types/types';
import fakerStatic from 'faker/locale/en_GB';

export const mockReviews: Review[] = [
  {
    comment: fakerStatic.lorem.sentences(),
    date: '2019-05-08T14:13:56.569Z',
    id: 1,
    rating: 2,
    user: {
      avatarUrl: fakerStatic.image.avatar(),
      id: 1,
      isPro: false,
      name: fakerStatic.name.findName(),
    },
  }, {
    comment: fakerStatic.lorem.sentences(),
    date: '2019-07-08T14:13:56.569Z',
    id: 2,
    rating: 3,
    user: {
      avatarUrl: fakerStatic.image.avatar(),
      id: 2,
      isPro: true,
      name: fakerStatic.name.findName(),
    },
  },
];
