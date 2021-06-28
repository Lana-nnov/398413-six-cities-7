import React from 'react';
import { connect } from 'react-redux';
import { ActionCreator } from '../../store/action';
import PropTypes from 'prop-types';
import offerProp from '../../prop-types/offer.prop';
import PlacesList from '../places-list/places-list';
import Map from '../map/map';
import CitiesList from '../cities-list/cities-list';
import { cities } from '../../const';

function MainPage(props) {
  const { city, currentOffers } = props;

  {/*const getPlacesList = () => new Array(placesCount).fill().map((place, i) => <Place key={i.toString()} />);*/ }

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList cities={cities} />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentOffers.length} places to stay in {city}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
              </form>
              <PlacesList offers={currentOffers} />
              {/*<div className="cities__places-list places__list tabs__content">
                {offers.map((place, i) => <Place key={i.toString()} offer={place} />)}
                <article className="cities__place-card place-card">
                  <div className="place-card__mark">
                    <span>Premium</span>
                  </div>
                  <div className="cities__image-wrapper place-card__image-wrapper">
                    <a href="#">
                      <img className="place-card__image" src="img/apartment-01.jpg" width="260" height="200" alt="Place image" />
                    </a>
                  </div>
                  <div className="place-card__info">
                    <div className="place-card__price-wrapper">
                      <div className="place-card__price">
                        <b className="place-card__price-value">&euro;120</b>
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
                      <a href="#">Beautiful &amp; luxurious apartment at great location</a>
                    </h2>
                    <p className="place-card__type">Apartment</p>
                  </div>
  </article >
  </div>*/}
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map currentOffers={currentOffers} city={city} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div >
  );
}

MainPage.propTypes = {
  city: PropTypes.string.isRequired,
  currentOffers: PropTypes.arrayOf(offerProp).isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
  currentOffers: state.currentOffers,
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export { MainPage };
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
