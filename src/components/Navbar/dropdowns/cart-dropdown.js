import { useLayoutEffect, useState } from "react";
import { ShoppingCart } from "react-feather"
import prod2 from '../../../assets/img/products/2.svg'
import prod3 from '../../../assets/img/products/3.svg'
import prod4 from '../../../assets/img/products/4.svg'


export const CartDropdown = () => {
    let [isActive, setisActive] = useState(false);
    let [loader, setLoader] = useState(true);

    useLayoutEffect(() => {
            setTimeout(function() {setLoader(!isActive)}, 1000);

    }, [isActive])

    return (
        <div class="navbar-item is-cart" onBlur={(() => setisActive(false))} >
            <div class="cart-button" onClick={() => setisActive(!isActive)}>
                <ShoppingCart />
                <div class="cart-count">
                    <span>3</span>
                </div>
            </div>

            {/* Cart dropdown */}
            <div class={`shopping-cart ${isActive? 'is-active' : ''}`}>
                <div class="cart-inner">

                    {/* Loader */}
                    <div class={`navbar-cart-loader ${loader? 'is-active' : ''}`}>
                        <div class="loader is-loading"></div>
                    </div>

                    <div class="shopping-cart-header">
                        <a href="/ecommerce-cart.html" class="cart-link">View Cart</a>
                        <div class="shopping-cart-total">
                            <span class="lighter-text">Total:</span>
                            <span class="main-color-text">$193.00</span>
                        </div>
                    </div>
                    {/* end shopping-cart-header */}
                    <ul class="shopping-cart-items">
                        <li class="cart-row">
                            <img src={prod2} alt="" />
                            <span class="item-meta">
                                <span class="item-name">Cool Shirt</span>
                                <span class="meta-info">
                                    <span class="item-price">$29.00</span>
                                    <span class="item-quantity">Qty: 01</span>
                                </span>
                            </span>
                        </li>

                        <li class="cart-row">
                            <img src={prod3} alt="" />
                            <span class="item-meta">
                                <span class="item-name">Military Short</span>
                                <span class="meta-info">
                                    <span class="item-price">$39.00</span>
                                    <span class="item-quantity">Qty: 01</span>
                                </span>
                            </span>
                        </li>

                        <li class="cart-row">
                            <img src={prod4} alt="" />
                            <span class="item-meta">
                                <span class="item-name">Cool Backpack</span>
                                <span class="meta-info">
                                    <span class="item-price">$125.00</span>
                                    <span class="item-quantity">Qty: 01</span>
                                </span>
                            </span>
                        </li>
                    </ul>

                    <a href="#" class="button primary-button is-raised pt-4">Checkout</a>
                </div>
            </div>
        </div>
    )
}