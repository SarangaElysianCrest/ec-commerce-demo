import PropTypes from "prop-types";
import ProductGridWrapper from "../../wrappers/ProductGridWrapper";
import ProductCard from "./ProductCard";
import React from "react";


export function ProductGrid(props){

    let {grid} = props;
    let {layout} = props;
    const {products} = props;

    return (
            <div className="product-area  pb-70" >
                <div className="container">
                    <div className="tab-content">
                        <div role="tabpanel" aria-hidden="true" className="fade tab-pane active show">
                            <div className={"shop-bottom-area mt-35"}>
                                {
                                    products && products.length > 0
                                    ?
                                        <div className={grid}>
                                            {
                                                products.map((product, key)=>(
                                                    <ProductCard product={product} onAddToCart={props.onAddToCart} layout={layout} onAddToWishList={props.onAddToWishList} />
                                                ))
                                            }
                                        </div>
                                        :
                                        <div className={grid}>
                                            <h3>No Products Found...</h3>
                                        </div>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

ProductGrid.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        isNew: PropTypes.bool,
        isOutofStock: PropTypes.bool,
        discount: PropTypes.number
    })).isRequired,
}

export default ProductGridWrapper(ProductGrid);