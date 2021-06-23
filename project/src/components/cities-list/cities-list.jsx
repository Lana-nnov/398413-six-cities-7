import React from 'react';
import { connect } from 'react-redux';
import { ActionCreator } from '../../store/action';
import City from '../city/city';
import PropTypes from 'prop-types';
import cityProp from '../../prop-types/city.prop';

function CitiesList(props) {
  const { cities, changeCity, city } = props;

  const handleClick = (evt) => {
    if (evt.target.innerText === city) {
      return;
    }
    changeCity(evt.target.innerText);
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((elem, i) => (
          <City onClick={handleClick}
            isActive={elem.name === city}
            key={i.toString()} city={elem.name}
          />))}

        {/*<li className="locations__item">
          <a className="locations__item-link tabs__item" href="#">
            <span>Paris</span>
          </a>
        </li>
        <li className="locations__item">
          <a className="locations__item-link tabs__item" href="#">
            <span>Cologne</span>
          </a>
        </li>
        <li className="locations__item">
          <a className="locations__item-link tabs__item" href="#">
            <span>Brussels</span>
          </a>
        </li>
        <li className="locations__item">
          <a className="locations__item-link tabs__item tabs__item--active">
            <span>Amsterdam</span>
          </a>
        </li>
        <li className="locations__item">
          <a className="locations__item-link tabs__item" href="#">
            <span>Hamburg</span>
          </a>
        </li>
        <li className="locations__item">
          <a className="locations__item-link tabs__item" href="#">
            <span>Dusseldorf</span>
          </a>
  </li>*/}
      </ul>
    </section>
  );
}

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(cityProp).isRequired,
  changeCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
    {/* {type: "CHANGE_CITY", payload: "nn"} */ }
  },
});

export { CitiesList };
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
