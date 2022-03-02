import React from 'react';
import CartItems from "./cart-items";
import CartActions from "./cart-actions";
import CartProceeds from "./cart-proceeds";
import EmptyCart from "./empty-cart";

const CartMainLayout = ({cartItems, total , clearCart, changeQuantity , deleteFromCart,onHandleCouponCode}) => {

    return (
        <div className="cart-main-area pt-90 pb-100">
            <div className="container">
                {
                    cartItems && cartItems.length >= 1 ? (
                        <div>
                        <h3 className="cart-page-title">Your cart items</h3>
                        <CartItems cartItems={cartItems} changeQuantity={changeQuantity} deleteFromCart={deleteFromCart} />
                        <CartActions clearCart={clearCart}/>
                        <CartProceeds total={total} onHandleCouponCode={onHandleCouponCode}/>
                        </div>
                    ) :(
                        <EmptyCart/>
                    )
                }

            </div>
        </div>
    );
};

export default CartMainLayout;