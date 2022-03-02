import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import {getDiscountPrice} from "../../../helpers/product";

const CompareLayout = (props) => {

    let compareItems = props && props.items;

    function handleAddToCart(compareItem) {
        let itemData = {
            productId:compareItem.productId,
            sku: compareItem.sku,
            order: compareItem.order,
            quantity: compareItem.quantity,
            price:compareItem.price,
            image:compareItem.image,
            variant:'',
            name:compareItem.order,
            discount:compareItem.discount,
            stock:compareItem.stock,
            description:compareItem.description,
        }
        props.onAddToCart(itemData)
    }

    function handleDeleteFromCompare(compareItem) {
        props.onCompareRemove(compareItem.sku)
    }

    return (
        <div className="compare-main-area pt-90 pb-100">
            <div className="container">
                {compareItems && compareItems.length >= 1 ? (
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="compare-page-content">
                                <div className="compare-table table-responsive">
                                    <table className="table table-bordered mb-0">
                                        <tbody>
                                        <tr>
                                            <th className="title-column text-center">Product Info</th>
                                            {compareItems.map((compareItem, key) => {
                                                // const cartItem = cartItems.filter(item => item.id === compareItem.id)[0];
                                                return (
                                                    <td className="product-image-title text-center" key={key}>
                                                        <div className="compare-remove">
                                                            <button onClick={() => handleDeleteFromCompare(compareItem)}>
                                                                <i className="pe-7s-trash" />
                                                            </button>
                                                        </div>
                                                        <div className="compare-box">
                                                            <Link to={process.env.PUBLIC_URL + "/product/" + compareItem.productId} className="image">
                                                                <img className="img-fluid" src={process.env.PUBLIC_URL +  compareItem.image} alt=""/>
                                                            </Link>
                                                            <div className="product-title">
                                                                <Link  to={process.env.PUBLIC_URL + "/product/" + compareItem.productId }>
                                                                    {compareItem.name}
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="compare-btn">
                                                            {compareItem.stock > 0 ?(

                                                                <button onClick={() => handleAddToCart(compareItem)}>
                                                                    Add to cart
                                                                </button>
                                                            ) : (
                                                                <button disabled className="active">
                                                                    Out of Stock
                                                                </button>
                                                            )}
                                                        </div>
                                                    </td>
                                                );
                                            })}
                                        </tr>
                                        <tr>
                                            <th className="title-column text-center">Price</th>
                                            {compareItems.map((compareItem, key) => {
                                                const discountedPrice = getDiscountPrice(
                                                    compareItem.price,
                                                    compareItem.discount
                                                );
                                                const finalProductPrice = compareItem.price + compareItem.discount;
                                                const finalDiscountedPrice = compareItem.price;
                                                return (
                                                    <td className="product-price" key={key}>
                                                        {discountedPrice !== null ? (
                                                            <Fragment>
                                                                  <span className="amount old">
                                                                    {"LKR " + finalProductPrice}
                                                                  </span><br/>
                                                                   <span className="amount">
                                                                    {"LKR " + finalDiscountedPrice}
                                                                  </span>
                                                            </Fragment>
                                             ) : (<span className="amount">
                                                   {"LKR" + finalProductPrice}
                                                </span>
                                                                )}
                                                            </td>
                                                        );
                                                    })}
                                        </tr>

                                        <tr>
                                            <th className="title-column text-center">Description</th>
                                            {compareItems.map((compareItem, key) => {
                                                return (
                                                    <td className="product-desc" key={key}>
                                                        <p>
                                                            {compareItem.description ? compareItem.description
                                                                : "N/A"}
                                                        </p>
                                                    </td>
                                                );
                                            })}
                                        </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="item-empty-area text-center">
                                <div className="item-empty-area__icon mb-30">
                                    <i className="pe-7s-shuffle"></i>
                                </div>
                                <div className="item-empty-area__text">
                                    No items found in compare <br />{" "}
                                    <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                                        Add Items
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CompareLayout;