import React from 'react';
import PropTypes from 'prop-types';

function City(props) {
  const { city, onClick, isActive } = props;

  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`}
        href="#" onClick={onClick}
      >
        <span>{city}</span>
      </a>
    </li >
  );
}

City.propTypes = {
  city: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default City;

