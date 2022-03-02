import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

const WishListClear = (props) => {
    function deleteAllFromWishlist(e) {
        props.onClearWishList()
    }

    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="cart-shiping-update-wrapper">
                    <div className="cart-shiping-update">
                        <Link
                            to={process.env.PUBLIC_URL + "/shop"}
                        >
                            Continue Shopping
                        </Link>
                    </div>
                    <div className="cart-clear">
                        <button onClick={(e) => deleteAllFromWishlist(e)}>
                            Clear Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishListClear;
