import React from 'react';
import ReviewContainer from "./ReviewContainer";
import ProductImageDescription from "./ProductImageDescription";
import ProductDescriptionInfo from "./ProductDescriptionInfo";
import ProductDescriptionTab from "./ProductDescriptionTab";

const ProductLayout = (props) => {
    return (
        <div>
            <div className="shop-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <ProductImageDescription product={props}/>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <ProductDescriptionInfo product={props}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="description-review-area pb-90">
                <div className="container">
                    <div className="description-review-wrapper">
                        <ProductDescriptionTab product={props} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductLayout;