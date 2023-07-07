import React from 'react'
import Card from '../../components/Card/Card'


export default function Home({items, addCartItem}) {
    return (
        <div className="content">
        <h4>Главная / смартфоны </h4>
        <h3>
          Смартфоны <span>({items.length})</span>
        </h3>

        <div className="content__filter">
          <select>
            <option>Сначала дорогие</option>
            <option>Сначала недорогие</option>
            <option>По популярности</option>
          </select>
        </div>

        <div className="cards">
          {items.map(elem => <Card {...elem} key={elem.id} addCartItem={addCartItem}/>)}
        </div>
      </div>
    )
}
