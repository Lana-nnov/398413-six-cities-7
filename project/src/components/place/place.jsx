import React from 'react';
import { Link } from 'react-router-dom';
import offerProp from '../../prop-types/offer.prop';

function Place(props) {
  const { offer } = props;
  const { price, images, isPremium, description, features, id } = offer;
  const { type } = features;

  return (
    <article className="cities__place-card place-card">
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={images[0]} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>
            {description}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article >
  );
}

Place.propTypes = {
  offer: offerProp,
};

export default Place;
