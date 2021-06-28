export const AppRoute = {
  LOGIN: '/login',
  FAVORITE: '/favorites',
  ROOM: '/offer/:id?',
  ROOT: '/',
};

{/*
export const CityType = {
  PARIS: 'Paris',
  COLOGNE: 'Cologne',
  BRUSSELS: 'Brussels',
  AMSTERDAM: 'Amsterdam',
  HUMBURG: 'Humburg',
  DUSSELDORF: 'Dusseldorf',
};*/}

export const cities = [
  { name: 'Paris' },
  { name: 'Cologne' },
  { name: 'Brussels' },
  { name: 'Amsterdam' },
  { name: 'Hamburg' },
  { name: 'Dusseldorf' },
];

export const DEFAULT_CITY = 'Paris';

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const APIRoute = {
  OFFERS: '/hotels',
  LOGIN: '/login',
  LOGOUT: '/logout',
};

