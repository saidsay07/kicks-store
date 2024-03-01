import React from "react";

import {
  blurActive,
  blurNone,
  contentActive,
  contentNone,
  close,
  list,
  link,
  arrowRightClasses,
} from "./Burger.module.scss";
import CloseIcon from "/close.svg";
import ArrowRightIcon from "/arrow-right.svg";
import SmileImage from "/smile.png";

function Burger({ isBurger, setIsBurger }) {
  return (
    <>
      <div
        className={isBurger ? blurActive : blurNone}
        onClick={() => setIsBurger(!isBurger)}
      ></div>
      <div className={isBurger ? contentActive : contentNone}>
        <img
          className={close}
          src={CloseIcon}
          alt="close icon"
          onClick={() => setIsBurger(!isBurger)}
        />

        <ul className={list}>
          <li className={link} onClick={() => setIsBurger(!isBurger)}>
            <a href="#">
              <span>
                New Drops <img src={SmileImage} alt="smile image" />
              </span>
              <img
                src={ArrowRightIcon}
                alt="arrow icon"
                className={arrowRightClasses}
              />
            </a>
          </li>
          <li className={link} onClick={() => setIsBurger(!isBurger)}>
            <a href="#">
              <span>Men</span>
              <img
                src={ArrowRightIcon}
                alt="arrow icon"
                className={arrowRightClasses}
              />
            </a>
          </li>
          <li className={link} onClick={() => setIsBurger(!isBurger)}>
            <a href="#">
              <span>Women</span>
              <img
                src={ArrowRightIcon}
                alt="arrow icon"
                className={arrowRightClasses}
              />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Burger;
