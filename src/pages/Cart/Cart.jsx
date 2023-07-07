import React from "react";
import Card from "../../components/Card/Card";

export default function Cart({ items }) {
  return (
    <div className="content">
      <h3>Корзина</h3>
      <div className="cards">
        {items.map((elem) => (
          <Card {...elem} key={elem.id} />
        ))}
      </div>
    </div>
  );
}
