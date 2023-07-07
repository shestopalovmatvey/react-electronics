import React, { useState } from "react";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import { v4 as uuidv4  } from "uuid";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";

function App() {
  const [items, setitems] = useState([
    {
      id: uuidv4(),
      title: "Смартфон Apple Iphone 14",
      text: `Apple iPhone 14 базируются на однокристальной системе A15 Bionic.
      Используется версия с 5-ядерным GPU. Модель получила 6,1-дюймовую           
      OLED-панель. Пиковая яркость — 1200 нит. Челка с датчиками системы           
      лицевого сканирования и селфи-камерой сохранилась.`,
      count: 10,
      price: 115999,
      imgUrl: "./img/phone/iphone14pro.png",
    },
    {
      id: uuidv4(),
      title: "Смартфон Apple Iphone 14 Gold",
      text: `Apple iPhone 14 базируются на однокристальной системе A15 Bionic.
      Используется версия с 5-ядерным GPU. Модель получила 6,1-дюймовую           
      OLED-панель. Пиковая яркость — 1200 нит. Челка с датчиками системы           
      лицевого сканирования и селфи-камерой сохранилась.`,
      count: 3,
      price: 155999,
      imgUrl: "./img/phone/iphone14pro-gold.png",
    },
    {
      id: uuidv4(),
      title: "Смартфон Apple Iphone 14 Silver",
      text: `Apple iPhone 14 базируются на однокристальной системе A15 Bionic.
      Используется версия с 5-ядерным GPU. Модель получила 6,1-дюймовую           
      OLED-панель. Пиковая яркость — 1200 нит. Челка с датчиками системы           
      лицевого сканирования и селфи-камерой сохранилась.`,
      count: 0,
      price: 125999,
      imgUrl: "./img/phone/iphone14pro-silver.png",
    },
  ]);

  const [cartItems, setCartItems] = useState([])

  const addCartItem = (item) => {
    const findElem = cartItems.find(elem => elem.id === item.id)
    if (!findElem) {
      setCartItems((prev) => [...prev, item])
    } else {
      return
    }
  }

  const [showCatalog, setShowCatalog] = useState(false);

  const handleCatalogOnClick = () => {
    setShowCatalog(!showCatalog);
  };

  return (
    <div className="wrapper">
      <Header
        countItems={cartItems.length}
        showCatalog={showCatalog}
        handleCatalogOnClick={handleCatalogOnClick}
      />

      <Routes>
        <Route path="/" element={<Home items={items} addCartItem={addCartItem}/>} exact>
        </Route>
        <Route path="/cart" element={<Cart items={cartItems}/>} exact>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
