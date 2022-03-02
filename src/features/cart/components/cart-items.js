import React from 'react';
import {getDiscountPrice} from "../../../helpers/product";
import {Link} from "react-router-dom";
import CartTableRow from "./cart-table-row";


const CartItems = ({cartItems, deleteFromCart, changeQuantity}) => {
    let cartTotalPrice = 0;

    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <div className="table-content table-responsive cart-table-content">
                        <table>
                            <thead>
                            <tr>
                                <th>Image</th>
                                <th>Product Name</th>
                                <th>Unit Price</th>
                                <th>Qty</th>
                                <th>Sub total</th>
                                <th>action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {cartItems.map((cartItem, key) => {
                                const discountedPrice = getDiscountPrice(
                                    cartItem.price,
                                    cartItem.discount
                                );
                                const finalProductPrice = cartItem.price;
                                const finalDiscountedPrice = discountedPrice;

                                discountedPrice != null
                                    ? (cartTotalPrice +=
                                    finalDiscountedPrice * cartItem.quantity)
                                    : (cartTotalPrice +=
                                    finalProductPrice * cartItem.quantity);
                                return (
                                   <CartTableRow
                                       cartItem={cartItem}
                                       deleteFromCart={deleteFromCart}
                                       changeQuantity={changeQuantity}
                                       key={key}
                                       discountedPrice={discountedPrice}
                                       finalDiscountedPrice={finalDiscountedPrice}
                                       finalProductPrice={finalProductPrice}
                                   />
                                );
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;