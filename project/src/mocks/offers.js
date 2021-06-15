import { nanoid } from 'nanoid';

const IMG_ROOM_URL = 'https://loremflickr.com/320/240/room';
const IMG_HOST_URL = 'https://loremflickr.com/320/240/portreit';

const offers = [
  {
    id: nanoid(),
    isPremium: true,
    isFavorite: true,
    rating: 4.8,
    city: `Amsterdam`,
    placeName: 'Sea castle',
    title: 'Beautiful & luxurious apartment at great location',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam',
    features: {
      type: 'Apartment',
      bedRooms: 3,
      roommattes: 4,
    },
    images: [
      `${IMG_ROOM_URL}`, `${IMG_ROOM_URL}`, `${IMG_ROOM_URL}`, `${IMG_ROOM_URL}`, `${IMG_ROOM_URL}`, `${IMG_ROOM_URL}`
    ],
    price: 120,
    accessibilites: [
      `Wi - Fi`, `Heating`, `Kitchen`, `Fridge`
    ],
    host: {
      id: nanoid(),
      name: 'Angelina',
      avatar: IMG_HOST_URL,
      isPro: true,
    }
  }, {
    id: nanoid(),
    isPremium: false,
    isFavorite: true,
    rating: 4.8,
    city: `Amsterdam`,
    placeName: 'Leonardo',
    title: 'Stay in the heart of Amsterdam',
    description: 'Holiday Inn Express Amsterdam - City Hall is in a prime location in the Amsterdam City Centre',
    features: {
      type: 'Apartment',
      bedRooms: 4,
      roommattes: 5,
    },
    images: [
      `${IMG_ROOM_URL}`, `${IMG_ROOM_URL}`, `${IMG_ROOM_URL}`, `${IMG_ROOM_URL}`, `${IMG_ROOM_URL}`, `${IMG_ROOM_URL}`
    ],
    price: 100,
    accessibilites: [
      `Wi - Fi`, `Heating`, `Kitchen`, `Fridge`
    ],
    host: {
      id: nanoid(),
      name: 'Mary',
      avatar: IMG_HOST_URL,
      isPro: true,
    },
  }, {
    id: nanoid(),
    isPremium: true,
    isFavorite: false,
    rating: 4.8,
    city: `Amsterdam`,
    placeName: 'Grand Hotel',
    title: 'One of our top picks in Amsterdam',
    description: 'Jaz in the City Amsterdam offers accommodation in the Zuidoost district of Amsterdam',
    features: {
      type: 'Hotel',
      bedRooms: 1,
      roommattes: 2,
    },
    images: [
      `${IMG_ROOM_URL}`, `${IMG_ROOM_URL}`, `${IMG_ROOM_URL}`, `${IMG_ROOM_URL}`, `${IMG_ROOM_URL}`, `${IMG_ROOM_URL}`
    ],
    price: 150,
    accessibilites: [
      `Wi - Fi`, `Heating`, `Kitchen`, `Fridge`
    ],
    host: {
      id: nanoid(),
      name: 'Alisa',
      avatar: IMG_HOST_URL,
      isPro: true,
    }
  }, {
    id: nanoid(),
    isPremium: true,
    isFavorite: true,
    rating: 4.8,
    city: `Cologne`,
    placeName: 'White castle',
    title: 'This is our guests favourite part of Cologne',
    description: 'Situated in Cologne, 600 metres from Anne Frank House, Mr. Jordaan features air-conditioned rooms with free WiFi and express check-in and check-out.',
    features: {
      type: 'Hotel',
      bedRooms: 3,
      roommattes: 4,
    },
    images: [
      `${IMG_ROOM_URL}`, `${IMG_ROOM_URL}`, `${IMG_ROOM_URL}`, `${IMG_ROOM_URL}`, `${IMG_ROOM_URL}`, `${IMG_ROOM_URL}`
    ],
    price: 90,
    accessibilites: [
      `Wi - Fi`, `Heating`, `Kitchen`, `Fridge`
    ],
    host: {
      id: nanoid(),
      name: 'Rebekka',
      avatar: IMG_HOST_URL,
      isPro: true,
    }
  },
];

export default offers;