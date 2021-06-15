import React, { useState } from 'react';
import Place from '../place/place';
import PropTypes from 'prop-types';
import offerProp from '../../prop-types/offer.prop';
import { nanoid } from 'nanoid';

function PlacesList(props) {
  const { offers } = props;
  const [selectedOffer, setSelectedOffer] = useState({ idSelected: null });

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((place, id) =>
        <Place key={place.id} offer={place} onMouseOver={() => setSelectedOffer({ ...selectedOffer, idSelected: nanoid() })} />,
      )},
    </div>
  );
}

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
};

export default PlacesList;
