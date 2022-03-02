import PropTypes from 'prop-types';
import ProductCardWrapper from '../../wrappers/ProductCardWrapper';
import React, {Fragment} from "react";
import {Link, useLocation} from "react-router-dom";
import image from "../../../assets/images/bag2.PNG"

export function ProductCard({product,layout,onAddToCart,onAddToWishList}){
    let location = useLocation();
    const {id,title,price,isNew,discount,images} = product;
    let isOutofStock = product && product.stock === 0;

    function handleAddToCart(e) {
        let itemData = {
            productId:product.id,
            sku: product.sku,
            order: product.title,
            quantity: 1,
            price:price,
            image:product && product.images && product.images[0] && product.images[0].url,
            variant:'',
            name:product.title,
            discount:product.discount,
            stock:product.stock,
            description:product.description,
        }
       onAddToCart(itemData)
    }

    function handleAddToWishList(e) {
        let itemData = {
            productId:product.id,
            sku: product.sku,
            order: product.title,
            quantity: 1,
            price:price,
            image:product && product.images && product.images[0] && product.images[0].url,
            variant:'',
            name:product.title,
            discount:product.discount,
            stock:product.stock,
            description:product.description,
        }
        onAddToWishList(itemData)
    }


    function badgeView() {
        if (isOutofStock){
            return <div className="product-img-badges">
                        {isOutofStock&&<span className="blue">Out of Stock</span>}
                    </div>
        }else{
                return <div className="product-img-badges">
                    {
                        discount ?<span className="pink">{discount}</span> : null
                    }
                    {
                        product.new ? <span className="purple">NEW</span> : null
                    }
                </div>
        }
    }

    return (
        <div className={layout}>
            <div className="product-wrap mb-25">
                <div className="product-img">
                    {images&&
                        <Link to={`product/${id}`}>
                            <img className="default-img" src={images[0]?images[0].url:''} alt=""/>
                            {!!images[1]&&
                                <img className="hover-img" src={images[1].url} alt=""/>
                            }
                        </Link>
                    }
                    {
                        badgeView()
                    }
                {/*product action buttons*/}

                    {
                        isOutofStock ?
                                        <div className="product-action">
                                            <div className="pro-same-action pro-wishlist">
                                                <button className="" title="Add to wishlist">
                                                    <i className="pe-7s-like"></i>
                                                </button>
                                            </div>
                                            <div className="pro-same-action-disabled pro-cart"  aria-disabled={"true"}>
                                                <button className="" title="Can't add to cart" disabled>
                                                    <i className="pe-7s-cart"></i>
                                                    Add to cart
                                                </button>
                                            </div>
                                            <div className="pro-same-action pro-quickview">
                                                <button title="Quick View"><i className="pe-7s-look"></i></button>
                                            </div>
                                        </div>
                            :
                                        <div className="product-action">
                                            <div className="pro-same-action pro-wishlist">
                                                <button className="" title="Add to wishlist" onClick={e => handleAddToWishList(e)}>
                                                    <i className="pe-7s-like"></i>
                                                </button>
                                            </div>
                                            <div className="pro-same-action pro-cart">
                                                <button className="" title="Add to cart" onClick={e=>handleAddToCart(e)}>
                                                    <i className="pe-7s-cart"></i>
                                                    Add to cart
                                                </button>
                                            </div>

                                            <div className="pro-same-action pro-quickview">
                                                <Link to={`product/${id}`}>
                                                <button title="Quick View"><i className="pe-7s-look"></i></button>
                                                </Link>
                                            </div>
                                        </div>

                    }
            </div>
                <div className="product-content text-center">
                <h3>
                    <Link href={`product/${id}`}>{title}</Link>
                </h3>
                <div className="product-price">

                        {
                            product.discount > 0  ?
                        (
                            <Fragment>
                            <span className="amount old">
                            {"LKR " + product.price }
                            </span>

                            <span className="amount">
                            {"LKR " +  ( product.price - product.discount) }
                            </span>
                            </Fragment>
                            )
                        :
                           (
                            <Fragment>
                            <span className="amount">
                            {"LKR " + product.price}
                            </span>
                            </Fragment>
                           )
                        }
                </div>
            </div>
        </div>
        </div>
)};

ProductCard.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    images: PropTypes.arrayOf(PropTypes.string),
    isNew: PropTypes.bool,
    isOutofStock: PropTypes.bool,
    discount: PropTypes.number,
    onView: PropTypes.func,
    onAddToCart: PropTypes.func,
    onAddToWishlist: PropTypes.func,
    image:PropTypes.array,
}

export default ProductCardWrapper(ProductCard);


