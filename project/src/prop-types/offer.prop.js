import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  rating: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.shape({
    type: PropTypes.string.isRequired,
    bedRooms: PropTypes.number.isRequired,
    roommattes: PropTypes.number.isRequired,
  }).isRequired,
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  price: PropTypes.number.isRequired,
  accessibilites: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  host: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isPro: PropTypes.bool.isRequired,
  }).isRequired,
}).isRequired;

