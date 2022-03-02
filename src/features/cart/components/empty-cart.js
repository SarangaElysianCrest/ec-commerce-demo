import React from 'react';
import {Link} from "react-router-dom";

const EmptyCart = () => {
    return (
        <div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="item-empty-area text-center">
                        <div className="item-empty-area__icon mb-30">
                            <i className="pe-7s-cart"></i>
                        </div>
                        <div className="item-empty-area__text">
                            No items found in cart <br />{" "}
                            <Link to={process.env.PUBLIC_URL + "/shop"}>
                                Shop Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmptyCart;