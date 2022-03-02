import React from 'react';
import {Link} from "react-router-dom";

const EmptyCheckout = () => {
    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="item-empty-area text-center">
                    <div className="item-empty-area__icon mb-30">
                        <i className="pe-7s-cash"></i>
                    </div>
                    <div className="item-empty-area__text">
                        No items found in cart to checkout <br />{" "}
                        <Link to={process.env.PUBLIC_URL + "/shop"}>
                            Shop Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmptyCheckout;