import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  guest: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isPro: PropTypes.bool.isRequired,
  }).isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
}).isRequired;
