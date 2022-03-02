import React from 'react';
import {Link} from "react-router-dom";

const WishListActions = () => {

    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="item-empty-area text-center">
                    <div className="item-empty-area__icon mb-30">
                        <i className="pe-7s-like"></i>
                    </div>
                    <div className="item-empty-area__text">
                        No items found in wishlist <br />{" "}
                        <Link to={process.env.PUBLIC_URL + "/shop"}>
                            Add Items
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishListActions;