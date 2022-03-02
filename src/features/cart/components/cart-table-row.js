import React, {Fragment, useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const CartTableRow = ({cartItem,deleteFromCart,changeQuantity,key,discountedPrice,finalProductPrice, finalDiscountedPrice}) => {

    const [quantityCount, setQuantityCount] = useState();
    const [price, setPrice] = useState();

    useEffect((id)=>{
        setQuantityCount(cartItem.quantity)
        if (cartItem.discount > 0){
            setPrice((cartItem.price - cartItem.discount) * cartItem.quantity);
        }else{
            setPrice(cartItem.price * cartItem.quantity);
        }
    },[cartItem])


    function changeQuantityData(sku,quantity, type) {
        console.log(sku, quantity)
            changeQuantity(sku, quantity)
            setQuantityCount(quantityCount + (type))
            setPrice(cartItem.price * (quantityCount + (type)))
            changeQuantity(sku, quantityCount + (type))
    }


    function deleteFromCartData(cartItem) {
        deleteFromCart(cartItem.sku)
    }

    return (
        <tr key={key}>
            <td className="product-thumbnail text-center">
                <Link
                    to={
                        process.env.PUBLIC_URL +
                        "/product/" +
                        cartItem.productId
                    }
                >
                    <img
                        className="img-fluid"
                        src={
                            process.env.PUBLIC_URL +
                            cartItem.image
                        }
                        alt=""
                    />
                </Link>
            </td>
            <td className="product-name text-center">
                <Link
                    to={
                        process.env.PUBLIC_URL +
                        "/product/" +
                        cartItem.productId
                    }
                >
                    {cartItem.order}
                </Link>
                {cartItem.selectedProductColor &&
                cartItem.selectedProductSize ? (
                    <div className="cart-item-variation">
                                      <span>
                                        Color: {cartItem.selectedProductColor}
                                      </span>
                        <span>
                                        Size: {cartItem.selectedProductSize}
                                      </span>
                    </div>
                ) : (
                    ""
                )}
            </td>
            <td className="product-price-cart text-center">
                { cartItem.discount > 0  ? (
                    <Fragment>
                            <span className="amount old">
                            {"LKR " + cartItem.price }
                            </span>

                        <span className="amount">
                            {"LKR " +  ( cartItem.price - cartItem.discount) }
                            </span>
                    </Fragment>
                ) : (
                    <span className="amount">
                                      {"LKR" + cartItem.price}
                    </span>
                )}
            </td>
            <td className="product-quantity text-center">
                <div className="cart-plus-minus">
                    <button
                        className="dec qtybutton"
                        onClick={() => changeQuantityData(cartItem.sku , cartItem.quantity, -1)}
                        disabled={
                            quantityCount === 1
                        }
                    >
                        -
                    </button>
                    <input
                        className="cart-plus-minus-box"
                        type="text"
                        value={cartItem && quantityCount}
                        readOnly
                    />
                    <button
                        className="inc qtybutton"
                        onClick={() => changeQuantityData(cartItem.sku , cartItem.quantity, +1)}
                        // disabled={
                        //     cartItem !== undefined && cartItem.quantity <= 0
                        // }
                    >
                        +
                    </button>
                </div>
            </td>
            <td className="product-subtotal text-center">
                {discountedPrice !== null ? "LKR "+ price
                    :
                    "LKR "+ price
                }
            </td>
            <td className="product-remove text-center">
                <button
                    onClick={() => deleteFromCartData(cartItem)}
                >
                    <i className="fa fa-times"></i>
                </button>
            </td>
        </tr>
    );
};

export default CartTableRow;