import React from "react";
import "./checkout.css";

export const Checkout = () => {
    return (
        <div className="checkout">
            <div className="div">
                <div className="overlap">
                    <div className="rectangle" />
                    <img className="icon-book-saved" alt="Icon book saved" src="icon-book-saved.png" />
                    <img className="icon-user-square" alt="Icon user square" src="icon-user-square.png" />
                    <img className="group" alt="Group" src="group.png" />
                    <img className="icon-menu" alt="Icon menu" src="icon-menu.png" />
                    <img className="img" alt="Group" src="image.png" />
                    <div className="text-wrapper">LIBRARYedu</div>
                </div>
                <div className="overlap-group">
                    <div className="rectangle-2" />
                    <div className="text-wrapper-2">Shopping Cart</div>
                </div>
                <div className="overlap-group-2">
                    <div className="rectangle-3" />
                    <div className="rectangle-4" />
                    <div className="rectangle-5" />
                    <div className="rectangle-6" />
                    <div className="rectangle-7" />
                    <div className="rectangle-8" />
                    <img className="rectangle-9" alt="Rectangle" src="rectangle-20.svg" />
                    <div className="rectangle-10" />
                    <img className="rectangle-11" alt="Rectangle" src="rectangle-16.png" />
                    <div className="checkout-bar" />
                    <div className="text-wrapper-3">Quantity</div>
                    <div className="text-wrapper-4">Product</div>
                    <div className="text-wrapper-5">Continue Shopping</div>
                    <div className="rectangle-12" />
                    <div className="text-wrapper-6">Check Out</div>
                </div>
            </div>
        </div>
    );
};
export default Checkout;