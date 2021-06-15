import { nanoid } from 'nanoid';

const IMG_HOST_URL = 'https://loremflickr.com/320/240/portreit';

const reviews = [
  {
    id: nanoid(),
    rating: 4,
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    guest: {
      id: nanoid(),
      name: 'Max',
      avatar: IMG_HOST_URL,
      isPro: false,
    },
    date: new Date(2020, 0, 12),
  }, {
    id: nanoid(),
    rating: 1,
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    guest: {
      id: nanoid(),
      name: 'Mark',
      avatar: IMG_HOST_URL,
      isPro: false,
    },
    date: new Date(2020, 5, 12),
  },
  {
    id: nanoid(),
    rating: 3,
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    guest: {
      id: nanoid(),
      name: 'Ann',
      avatar: IMG_HOST_URL,
      isPro: true,
    },
    date: new Date('April 17, 2021'),
  },
];

export default reviews;