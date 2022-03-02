import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import CartWrapper from "./CartWrapper";
import { getDiscountPrice } from "../../helpers/product";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFromCart } from "./cartSlice";

export function CartCompact({
  cartData,
  currency,
  deleteFromCart,
  onhandleResetCoupon,
}) {
  const [total, setTotal] = useState(0);

  const dispatch = useDispatch();
  let cartTotalPrice = 0;
  function handleRemoveFromCart(item) {
    dispatch(removeFromCart(item));
  }

  useEffect(() => {
    if (cartData && cartData.length === 0) {
      onhandleResetCoupon();
    }
  }, [cartData]);
  console.log(cartTotalPrice);

  return (
    <div className="shopping-cart-content active">
      {cartData && cartData.length > 0 ? (
        <Fragment>
          <ul>
            {cartData.map((single, key) => {
              const discountedPrice = single.price - single.discount;

              const finalProductPrice = single.price;
              const finalDiscountedPrice = discountedPrice;

              discountedPrice != null
                ? (cartTotalPrice += finalDiscountedPrice * single.quantity)
                : (cartTotalPrice += finalProductPrice * single.quantity);

              return (
                <li className="single-shopping-cart" key={key}>
                  <div className="shopping-cart-img">
                    <Link
                      to={
                        process.env.PUBLIC_URL + "/product/" + single.productId
                      }
                    >
                      <img
                        alt=""
                        src={process.env.PUBLIC_URL + single.image}
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <div className="shopping-cart-title">
                    <h4>
                      <Link
                        to={
                          process.env.PUBLIC_URL +
                          "/product/" +
                          single.productId
                        }
                      >
                        {" "}
                        {single.order}{" "}
                      </Link>
                    </h4>
                    <h6>Qty: {single.quantity}</h6>
                    <span>
                      {discountedPrice !== null
                        ? "LKR" + " " + finalDiscountedPrice
                        : "LKR" + " " + finalProductPrice}
                    </span>
                    {single.selectedProductColor &&
                    single.selectedProductSize ? (
                      <div className="cart-item-variation">
                        <span>Color: {single.selectedProductColor}</span>
                        <span>Size: {single.selectedProductSize}</span>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="shopping-cart-delete">
                    <button onClick={() => handleRemoveFromCart(single)}>
                      <i className="fa fa-times-circle" />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="shopping-cart-total">
            <h4>
              Total :{" "}
              <span className="shop-total">
                {"LKR" + " " + cartTotalPrice.toFixed(2)}
              </span>
            </h4>
          </div>
          <div className="shopping-cart-btn btn-hover text-center">
            <Link className="default-btn" to={process.env.PUBLIC_URL + "/cart"}>
              view cart
            </Link>
            <Link
              className="default-btn"
              to={process.env.PUBLIC_URL + "/checkout"}
            >
              checkout
            </Link>
          </div>
        </Fragment>
      ) : (
        <p className="text-center">No items added to cart</p>
      )}
    </div>
  );
}

export default CartWrapper(CartCompact);
