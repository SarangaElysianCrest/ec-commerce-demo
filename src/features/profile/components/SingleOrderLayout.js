import React, {useEffect} from 'react';
import Card from "react-bootstrap/Card";
import {getDiscountPrice} from "../../../helpers/product";
import {dates} from "../../../helpers/Date";
import {TableCell} from "@material-ui/core";
import {useLocation} from "react-router";
import Loader from "../../../helpers/loader";

const SingleOrderLayout = (props) => {
    let cartTotalPrice = 0;



    let orders = props && props.orderByIdData;
    console.log(orders)
    return (
        orders && orders != null ?
            <div className="myaccount-area">
            <div className="container">
                <div className="row">
                    <div className="ml-auto mr-auto col-lg-12">
                        <div className="myaccount-wrapper">
                            <Card.Body>
                                <div className="myaccount-info-wrapper">
                                    <div className="account-info-wrapper">
                                        <h4>Order Details</h4>
                                    </div><hr/>
                                    <div className="your-order-area">
                                        <div className="row mb-20">
                                            <div className="col-lg-4">Date - {orders && orders.createdAt.split("T")[0]}</div>
                                            <div className="col-lg-4"><h5></h5></div>
                                            <div className="col-lg-4"><h5 className="text-right">Order Reference - {orders.id}</h5></div>
                                        </div>
                                        <div className="your-order-wrap gray-bg-4">
                                            <div className="your-order-product-info">
                                                <div className="your-order-top">
                                                    <ul>
                                                        <li>Product</li>
                                                        <li>Total</li>
                                                    </ul>
                                                </div>
                                                <div className="your-order-middle">
                                                    <ul>
                                                        {orders.items.map((cartItem, key) => {
                                                            return (
                                                                <li key={key}>
                                                                  <span className="order-middle-left">
                                                                    {cartItem.name} X {cartItem.quantity}
                                                                  </span>{" "}
                                                                  <span className="order-price">
                                                                      {cartItem.price}
                                                                  </span>
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                </div>
                                                <div className="your-order-bottom">
                                                    <ul>
                                                        <li className="your-order-shipping">Shipping</li>
                                                        <li>Free shipping</li>
                                                    </ul>
                                                </div>
                                                <div className="your-order-total">
                                                    <ul>
                                                        <li className="order-total">Total</li>
                                                        <li>
                                                            {"LKR" + orders.total}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="payment-method"></div>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            :
            <Loader/>

    )
};

export default SingleOrderLayout;