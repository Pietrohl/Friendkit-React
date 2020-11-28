import React from 'react';

function CartDropDown() {
    return (
        <div className="shopping-cart is-active">
            <div className="cart-inner">

                {/* <!--Loader--> */}
                <div className="navbar-cart-loader">
                    <div className="loader is-loading"></div>
                </div>

                <div className="shopping-cart-header">
                    <a href="/ecommerce-cart.html" className="cart-link">View Cart</a>
                    <div className="shopping-cart-total">
                        <span className="lighter-text">Total:</span>
                        <span className="main-color-text">$193.00</span>
                    </div>
                </div>
                {/* <!--end shopping-cart-header --> */}

                <ul className="shopping-cart-items">
                    <li className="cart-row">
                        <img src="../assets/img/products/2.svg" alt="" />
                        <span className="item-meta">
                            <span className="item-name">Cool Shirt</span>
                            <span className="meta-info">
                                <span className="item-price">$29.00</span>
                                <span className="item-quantity">Qty: 01</span>
                            </span>
                        </span>
                    </li>

                    <li className="cart-row">
                        <img src="../assets/img/products/3.svg" alt="" />
                        <span className="item-meta">
                            <span className="item-name">Military Short</span>
                            <span className="meta-info">
                                <span className="item-price">$39.00</span>
                                <span className="item-quantity">Qty: 01</span>
                            </span>
                        </span>
                    </li>

                    <li className="cart-row">
                        <img src="../assets/img/products/4.svg" alt="" />
                        <span className="item-meta">
                            <span className="item-name">Cool Backpack</span>
                            <span className="meta-info">
                                <span className="item-price">$125.00</span>
                                <span className="item-quantity">Qty: 01</span>
                            </span>
                        </span>
                    </li>
                </ul>

                <a href="/#" className="button primary-button is-raised">Checkout</a>
            </div>
        </div>
    );
}

export default CartDropDown;
