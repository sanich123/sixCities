import { Reviews } from '../types/types';

export const mockReviews: Reviews = [
  {
    comment: 'Полное говно, совсем не понравилось ничиво',
    date: '2019-05-08T14:13:56.569Z',
    id: 1,
    rating: 2,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 1,
      isPro: false,
      name: 'Max',
    },
  }, {
    comment: 'Уютненькое местечко возле деревни Бухалово, но многовато алканавтов',
    date: '2019-07-08T14:13:56.569Z',
    id: 2,
    rating: 3,
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 2,
      isPro: true,
      name: 'Василий',
    },
  },
];
