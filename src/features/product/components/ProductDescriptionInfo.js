import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import {getDiscountPrice} from "../../../helpers/product";
import SocialMediaLinks from "../../../common/components/social-media-links/social-media-links";


const ProductDescriptionInfo = ({
  product,

}) => {

  let wishlistItem = [];
  let compareItem = [];

  const productStock = product.stock;
  const [quantityCount, setQuantityCount] = useState(1);
  const discountedPrice = getDiscountPrice(product.price, product.discount);
  const finalProductPrice = +(product.price)?.toFixed(2);
  const finalDiscountedPrice = (product.price - product.discount);

  function handleAddToCart() {
    let itemData = {
        productId:product.id,
      sku: product.sku,
      order: product.title,
      quantity: quantityCount,
      price:finalDiscountedPrice,
      image:product && product.images && product.images[0] && product.images[0].url,
      variant:'',
      name:product.title,
      discount:product.discount,
      stock:product.stock,
      description:product.description,
    }
    product.onAddToCart(itemData)
  }

  function handleWishList() {
      let itemData = {
          productId:product.id,
          sku: product.sku,
          order: product.title,
          quantity: quantityCount,
          price:finalDiscountedPrice,
          image:product && product.images && product.images[0] && product.images[0].url,
          variant:'',
          name:product.title,
          discount:product.discount,
          stock:product.stock,
          description:product.description,
      }
      product.onAddToWishlist(itemData)
  }

  function handleCompare(e) {
      let itemData = {
          productId:product.id,
          sku: product.sku,
          order: product.title,
          quantity: quantityCount,
          price:finalDiscountedPrice,
          image:product && product.images && product.images[0] && product.images[0].url,
          variant:'',
          name:product.title,
          discount:product.discount,
          stock:product.stock,
          description:product.description,
      }
      product.onAddToCompare(itemData)
  }

  return (
    <div className="product-details-content ml-70">

      {/*title*/}
      <h2>{product.order}</h2>

    {/*prices*/}
      <div className="product-details-price">
        {discountedPrice !== null ? (
          <Fragment>
            <span>{"LKR" + " "+ + finalDiscountedPrice}</span>{" "}
            <span className="old">
              {"LKR"  + " "+  + finalProductPrice}
            </span>
          </Fragment>
        ) : (
          <span>{"LKR"  + " "+  + finalProductPrice} </span>
        )}
      </div>

      {/*description*/}
      <div className="pro-details-list">
        <p>{product.description}</p>
      </div>

    {/*actions*/}
      <div className="pro-details-quality">
        <div className="cart-plus-minus">
          <button
              onClick={() =>
                  setQuantityCount(quantityCount > 1 ? quantityCount - 1 : 1)
              }
              className="dec qtybutton"
          >
            -
          </button>
          <input
              className="cart-plus-minus-box"
              type="text"
              value={quantityCount}
              readOnly
          />
          <button
              onClick={() =>
                  setQuantityCount(
                      quantityCount < productStock
                          // - productCartQty
                          ? quantityCount + 1
                          : quantityCount
                  )
              }
              className="inc qtybutton"
          >
            +
          </button>
        </div>
        <div className="pro-details-cart btn-hover">
          {product && product.stock > 0 ? (
              <button onClick={e =>handleAddToCart()}>
                {" "}
                Add To Cart{" "}
              </button>
          ) : (
              <button disabled>Out of Stock</button>
          )}
        </div>
        <div className="pro-details-wishlist">
          <button onClick={e => handleWishList(e)}>
            <i className="pe-7s-like" />
          </button>
        </div>
        <div className="pro-details-compare">
          <button onClick={e => handleCompare(e)}>
            <i className="pe-7s-shuffle" />
          </button>
        </div>
      </div>


      {/*categories*/}
      {product.category ? (
        <div className="pro-details-meta">
          <span>Categories :</span>
          <ul>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/shop"}>
                    {product.category.name}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/shop"}>
                    {product.subCategory?.name}
                  </Link>
                </li>
          </ul>
        </div>
      ) : (
        ""
      )}

      {/*tags*/}
      {product.tags ? (
        <div className="pro-details-meta">
          <span>Tags :</span>
          <ul>
            {product.tags.map((single, key) => {
              return (
                <li key={key}>
                  <Link to={process.env.PUBLIC_URL + "/shop"}>
                    {single.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        ""
      )}

      {/*social media links*/}
      <div className="pro-details-social">
        <SocialMediaLinks/>
      </div>

    </div>
  );
};

ProductDescriptionInfo.propTypes = {
  addToCart: PropTypes.func,
  addToCompare: PropTypes.func,
  addToWishlist: PropTypes.func,
  addToast: PropTypes.func,
  cartItems: PropTypes.array,
  compareItem: PropTypes.array,
  currency: PropTypes.object,
  discountedPrice: PropTypes.number,
  finalDiscountedPrice: PropTypes.number,
  finalProductPrice: PropTypes.number,
  product: PropTypes.object,
  wishlistItem: PropTypes.object
};


export default ProductDescriptionInfo;
