import React from 'react';
import "./FoodCard.css";
export default (props) => {
  const {name, type, excerpt} = props;
  const ty = type.toLowerCase();


  return (
    <article className={"Food__card Food__card--" + ty}>
      <div className="Food__card__image"></div>
      <div className="Food__card__info">
        <span className={"Food__card__type Food__label Food__label--" + ty}>{type}</span>
        <h1 className="Food__card__name">{name}</h1>

        <div className="Food__card__excerpt">{excerpt}</div>
        <div className="Food__card__moreInfo"><span className="Food__card__moreInfo__symbol">{">"}</span> More info</div>
      </div>
    </article>
  );
}