import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../store/api-actions';
import { AppRoute, AuthorizationStatus } from '../../const';
import { logout } from '../../store/api-actions';

function Header(props) {
  const { authorizationStatus, toLogout } = props;
  const isLogin = authorizationStatus === AuthorizationStatus.AUTH;
  console.log(isLogin);
  let email = '';
  if (localStorage.getItem('userInfo') != null) {
    email = localStorage.getItem('userInfo').replace(/\"/g, "")
  }
  const handleClick = (evt) => {
    evt.preventDefault();
    toLogout();
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link" href="main.html">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {isLogin ? <React.Fragment>
                <li className="header__nav-item user">
                  <Link to={AppRoute.FAVORITE} className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{email}</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link"
                    onClick={handleClick}
                    to={AppRoute.ROOT}>
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </React.Fragment> : <li className="header__nav-item user">
                <Link to={AppRoute.LOGIN} className="header__nav-link header__nav-link--profile">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__login">Sign in</span>
                </Link>
              </li>}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  toLogout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  toLogout() {
    dispatch(logout());
  },
});

export { Header };
export default connect(mapStateToProps, mapDispatchToProps)(Header);
