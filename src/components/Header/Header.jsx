import React from "react";
import classes from "./Header.module.scss";
import Catalog from "../Catalog/Catalog";
import { Link } from "react-router-dom";

export default function Header({ showCatalog, handleCatalogOnClick, countItems }) {
  return (
    <header>
      <div className={classes.header}>
        <Link to={"/"}>
          <div className={classes.header__logo}>
            <img width={40} height={40} src="/img/logo.svg" alt="img"></img>
            <div>
              <h2>REACT Electronics</h2>
              <p>Интернет-магазин электроники</p>
            </div>
          </div>
        </Link>
        <div className={classes.header__info}>
          <Link to={"/profile"}>
            <div>
              <p>Войти</p>
              <img
                width={20}
                height={20}
                src="/img/profile.svg"
                alt="cart"
              ></img>
            </div>
          </Link>

          <Link to={"/cart"}>
            <div className={classes.header__info__cart}>
              <img width={20} height={20} src="/img/cart.svg" alt="cart"></img>
              <p>( {countItems} )</p>
            </div>
          </Link>
          <Catalog
            showCatalog={showCatalog}
            handleCatalogOnClick={handleCatalogOnClick}
          />
        </div>
      </div>
    </header>
  );
}
