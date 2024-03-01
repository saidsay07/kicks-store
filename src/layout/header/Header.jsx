import React from "react";

import {
  header,
  box,
  list,
  link,
  logo,
  other,
  search,
  authentication,
  cart,
  count,
  burger,
} from "./Header.module.scss";
import SmileImage from "/smile.png";
import LogoIcon from "/logo.svg";
import SearchIcon from "/search.svg";
import AuthenticationIcon from "/authentication.svg";
import BurgerIcon from "/burger.svg";

function Header({ isBurger, setIsBurger }) {
  return (
    <header className={header}>
      <div className="container">
        <div className={box}>
          <div className={burger} onClick={() => setIsBurger(!isBurger)}>
            <img src={BurgerIcon} alt="burger icon" />
          </div>
          <ul className={list}>
            <li className={link}>
              <a href="#">
                New Drops <img src={SmileImage} alt="smile image" />
              </a>
            </li>
            <li className={link}>
              <a href="#">Men</a>
            </li>
            <li className={link}>
              <a href="#">Women</a>
            </li>
          </ul>

          <a href="#" className={logo}>
            <img src={LogoIcon} alt="logo icon" />
          </a>

          <div className={other}>
            <a href="#" className={search}>
              <img src={SearchIcon} alt="search icon" />
            </a>

            <a href="#" className={authentication}>
              <img src={AuthenticationIcon} alt="authentication icon" />
            </a>

            <a href="#" className={cart}>
              <p className={count}>1</p>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
