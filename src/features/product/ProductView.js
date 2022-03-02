import PropTypes from 'prop-types';
import {useEffect, useState} from 'react';
import ReviewContainer from './components/ReviewContainer';
import Breadcrumb from "../../common/components/breadcrumb";
import React from "react";
import ProductLayout from "./components/ProductLayout";
import ProductWrapper from "./ProductWrapper";
import {useLocation} from "react-router";

export function ProductView(product){
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div>
            <Breadcrumb/>
            <ProductLayout {...product}/>
        </div>

    )
}

ProductView.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    rating: PropTypes.number,
    stock: PropTypes.number,
    images: PropTypes.arrayOf(PropTypes.string),
    variants: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        stock: PropTypes.number,
        attributes: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string,
            type: PropTypes.oneOf(['TEXT','COLOR']),
            value: PropTypes.string 
        }))
    })),
    reviews: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        userName: PropTypes.string,
        text: PropTypes.string,
        likes: PropTypes.string,
        dislikes: PropTypes.string,
        interaction: PropTypes.oneOf(['LIKED','DISLIKED','NEUTRAL']),
        ownReview: PropTypes.bool,
    })),
    isNew: PropTypes.bool,
    isOutofStock: PropTypes.bool,
    discount: PropTypes.number,
    onAddToCart: PropTypes.func,
    onAddToWishlist: PropTypes.func,
    onAddToCompare: PropTypes.func,
    onLoadReviews: PropTypes.func,
    onInteractWithReview: PropTypes.func,
    onCreateReview: PropTypes.func,
    onEditReview: PropTypes.func,
    onDeleteReview: PropTypes.func
}

export default ProductWrapper(ProductView)