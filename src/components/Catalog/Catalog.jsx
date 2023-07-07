import React from "react";
import classes from "./Catalog.module.scss";

const Catalog = (props) => {
  return (
    <div className={classes.catalog}>
      <button onClick={props.handleCatalogOnClick}>Каталог товаров</button>
      {props.showCatalog && (
        <div className={classes.overflow}>
          <ul className={classes.main__list}>
            <li>
              <span>Смартфоны</span>
              <ul>
                <li>
                  <span>Apple</span>

                  <ul>
                    <li>Смартфон Apple iPhone 14</li>
                    <li>Смартфон Apple iPhone 13</li>
                  </ul>
                </li>
                <li>
                  <span>Samsung</span>
                  <ul>
                    <li>Смартфон Samsung Galaxy S8</li>
                  </ul>
                </li>
                <li>
                  <span>Сопутствующие товары</span>
                  <ul>
                    <li>
                      Наушники
                      <ul>
                        <li>Наушники Apple AirPods Pro</li>
                      </ul>
                    </li>
                    <li>
                      Чехлы
                      <ul>
                        <li>Чехол для Huawei P50</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>Смартфон Huawei P50</li>
              </ul>
            </li>
            <li>
              <span>Аудиотехника</span>
              <ul>
                <li>
                  <span>Портативные колонки</span>

                  <ul>
                    <li>Умная колонка Яндекс Станция</li>
                  </ul>
                </li>
                <li>
                  <span>Наушники</span>

                  <ul>
                    <li>Наушники Apple AirPods Pro</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Catalog;
