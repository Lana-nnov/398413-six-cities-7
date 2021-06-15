import React from 'react';
import reviewProp from '../../prop-types/review.prop';

function Review(props) {
  const { review } = props;
  const { guest, date } = review;
  const { name, avatar } = guest;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatar} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{date.toLocaleString('en-us', { month: 'long', year: 'numeric', day: 'numeric' })} </time>
      </div>
    </li>
  );
}

Review.propTypes = {
  review: reviewProp,
};

export default Review;
