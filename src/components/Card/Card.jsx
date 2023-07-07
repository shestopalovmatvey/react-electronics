import React from "react";

export default function Card({ key, addCartItem, ...props }) {
  const renderCondition = (count, isName = false) => {
    if (isName) {
      if (count > 5) {
        return "condition__lot";
      } else if (count <= 5 && count !== 0) {
        return "condition__few";
      } else {
        return "condition__missing";
      }
    } else {
      if (count > 5) {
        return "В наличии";
      } else if (count <= 5 && count !== 0) {
        return "Мало";
      } else {
        return "Нет в наличии";
      }
    }
  };

  const handlerBtnClick = () => {
    addCartItem(props);
  };
  return (
    <div className="card__element" key={key}>
      <img width={130} height={150} src={props.imgUrl} alt="iphone14pro" />
      <div className="card__element__info">
        <h4>{props.title}</h4>
        <p>{props.text}</p>
      </div>
      <p className={`card__condition ${renderCondition(props.count, true)}`}>
        {renderCondition(props.count)}
      </p>
      <div className="card__btn">
        <p>{props.price} руб.</p>
        <button onClick={handlerBtnClick}>В корзину</button>
      </div>
    </div>
  );
}
