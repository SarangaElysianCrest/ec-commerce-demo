import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import {getDiscountPrice} from "../../../helpers/product";
import WishListTableRow from "./WishListTableRow";
import WishListActions from "./WishListActions";
import WishListClear from "./WishListClear";


const WishListLayout = (props) => {

    let wishlistItems =  props && props.items;


    return (
        <div className="cart-main-area pt-90 pb-100">
            <div className="container">
                {wishlistItems && wishlistItems.length >= 1 ? (
                    <Fragment>
                        <h3 className="cart-page-title">Your wishlist items</h3>
                        <div className="row">
                            <div className="col-12">
                                <div className="table-content table-responsive cart-table-content">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Product Name</th>
                                            <th>Unit Price</th>
                                            <th>Add To Cart</th>
                                            <th>action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {wishlistItems.map((wishlistItem, key) => {
                                            const discountedPrice = getDiscountPrice(
                                                wishlistItem.price,
                                                wishlistItem.discount
                                            );
                                            const finalProductPrice = wishlistItem.price - wishlistItem.discount;
                                            const finalDiscountedPrice =  wishlistItem.price;

                                            return (
                                                <WishListTableRow
                                                    key={key}
                                                    wishlistItem={wishlistItem}
                                                    finalProductPrice={finalProductPrice}
                                                    finalDiscountedPrice={finalDiscountedPrice}
                                                    discountedPrice={discountedPrice}
                                                    onRemoveWishList={props.onRemoveWishList}
                                                    onAddToCart={props.onAddToCart}
                                                />
                                            )
                                        })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                     <WishListClear {...props}/>
                    </Fragment>
                ) : (
                  <WishListActions {...props}/>
                )}
            </div>
        </div>
    );
};

export default WishListLayout;