import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

const WishListTableRow = ({wishlistItem,key, finalDiscountedPrice ,finalProductPrice,onRemoveWishList, onAddToCart}) => {

    function deleteFromWishlist(wishlistItem) {
        onRemoveWishList(wishlistItem.sku)
    }

    function handleAddToCart(e) {
        let itemData = {
            productId:wishlistItem.productId,
            sku: wishlistItem.sku,
            order: wishlistItem.name,
            quantity: 1,
            price:wishlistItem.price,
            image:wishlistItem && wishlistItem.image,
            variant:'',
            name:wishlistItem.name,
            discount:wishlistItem.discount,
            stock:wishlistItem.stock,
            description:wishlistItem.description,
        }
        onAddToCart(itemData)
    }
    return (
            <tr key={key}>
                <td className="product-thumbnail">
                    <Link
                        to={
                            process.env.PUBLIC_URL +
                            "/product/" +
                            wishlistItem.productId
                        }
                    >
                        <img
                            className="img-fluid"
                            src={
                                process.env.PUBLIC_URL +
                                wishlistItem.image
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
                            wishlistItem.productId
                        }
                    >
                        {wishlistItem.name}
                    </Link>
                </td>

                <td className="product-price-cart">
                    {wishlistItem && wishlistItem.discount === 0 ? (
                        <span className="amount">
                                      {"LKR " + finalProductPrice}
                                    </span>
                    ) : (
                        <Fragment>
                                    <span className="amount old">
                                      {"LKR " + finalDiscountedPrice}
                                    </span>
                            <span className="amount">
                                        {"LKR " + finalProductPrice}
                                    </span>
                        </Fragment>
                    )}
                </td>

                <td className="product-wishlist-cart">
                    {
                       wishlistItem && wishlistItem.stock  ? (
                        <button onClick={e => handleAddToCart(e)}>
                          Add to cart
                        </button>
                    ) : (
                        <button disabled className="active">
                            Out of stock
                        </button>
                    )}
                </td>

                <td className="product-remove">
                    <button
                        onClick={() =>
                            deleteFromWishlist(wishlistItem)
                        }
                    >
                        <i className="fa fa-times"></i>
                    </button>
                </td>
            </tr>
    );
};

export default WishListTableRow;