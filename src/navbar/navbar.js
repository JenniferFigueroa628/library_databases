import React from "react";
import "./navbar.css";

export const Header = () => {
  return (
    <div className="header">
      <img className="icon-book-saved" alt="Icon book saved" src="./assets/icon_book_saved_.png" />
      <div className="text-wrapper">LIBRARYedu</div>
      <img className="icon-user-square" alt="Icon user square" src="./assets/icon_user_square_.png" />
      <img className="icon-shopping-cart" alt="Icon shopping cart" src="./assets/icon_shopping_cart_.png" />
      <img className="icon-clipboard-text" alt="Icon clipboard text" src="./assets/icon_clipboard_text_.png" />
      <img className="icon-menu" alt="Icon menu" src="./assets/icon-menu.png" />
    </div>
  );
};
