export const adaptOfferToClient = (offer) => {

  const adaptedOffer = {
    ...offer,
    city: offer.city.name,
    cityLocation: {
      latitude: offer.city.location.latitude,
      longitude: offer.city.location.longitude,
    },
    placeName: offer.title,
    isFavorite: offer.is_favorite,
    isPremium: offer.is_premium,
    rating: offer.rating,
    features: {
      type: offer.type,
      bedRooms: offer.bedrooms,
      roommattes: offer.max_adults,
    },
    accessibilites: offer.goods,
    host: {
      id: offer.host.id,
      name: offer.host.name,
      avatar: offer.host.avatar_url,
      isPro: offer.host.is_pro,
    },
  };

  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.city.name;
  delete adaptedOffer.title;
  delete adaptedOffer.type;
  delete adaptedOffer.bedrooms;
  delete adaptedOffer.max_adults;
  delete adaptedOffer.goods;
  delete adaptedOffer.host.is_pro;
  delete adaptedOffer.host.avatar_url;

  return adaptedOffer;
};

{/*export const adaptOfferToServer = (offer) => {

  const adaptedOffer = {
    ...offer,
    city: {
      name: offer.city,
      location: {
        latitude: offer.location.latitude,
        longitude: offer.location.longitude,
      },
    },
    title: offer.placeName,
    is_favorite: offer.isFavorite,
    is_premium: offer.isPremium,
    type: offer.features.type,
    bedrooms: offer.features.bedRooms,
    max_adults: offer.features.roommattes,
    goods: offer.accessibilites,
    host: {
      id: offer.host.id,
      name: offer.host.name,
      avatar_url: offer.host.avatar,
      is_pro: offer.host.isPro,
    },
  };

  delete adaptedOffer.city;
  delete adaptedOffer.location;
  delete adaptedOffer.placeName;
  delete adaptedOffer.isFavorite;
  delete adaptedOffer.isPremium;
  delete adaptedOffer.features;
  delete adaptedOffer.accessibilites;
  delete adaptedOffer.isFavorite;
  delete adaptedOffer.host.avatar;
  delete adaptedOffer.host.isPro;

  return adaptedOffer;
};*/}
