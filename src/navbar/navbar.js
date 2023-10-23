import React from "react";
import "./navbar.css";
import icon_menu from './icon_menu_.png';
export const navbar = () => {
  return (
  <div className="navbar">
    <ul className='navbar'>
        <a href='#menu'>
          <img src={icon_menu} alt='Menu' className='MenuIcon'></img>
        </a>
      </ul>
  <img className="icon-book-saved" alt="Icon book saved" src= "./asset/icon_menu_.png" />
  <div className="text-wrapper">LIBRARYedu</div>
  <img className="icon-user-square" alt="Icon user square" src="icon-user-square.png" />
  <img className="icon-shopping-cart" alt="Icon shopping cart" src="icon-shopping-cart.png" />
  <img className="icon-clipboard-text" alt="Icon clipboard text" src="icon-clipboard-text.png" />
  <img className="icon-menu" alt="Icon menu" src="icon-menu.png" />
  </div>
  );
  };