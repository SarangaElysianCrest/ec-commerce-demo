import PropTypes from "prop-types";
import React, {useEffect} from "react";
import { connect } from "react-redux";
import ProductImageGallery from "./ProductImageGallery";
import ProductImageGallerySideThumb from "./ProductImageGallerySideThumb";
import ProductImageFixed from "./ProductImageFixed";
import ImageGallery from 'react-image-gallery';
import Swiper from "react-id-swiper";

const ProductImageDescription = ({
  spaceTopClass,
  spaceBottomClass,
  galleryType,
  product,
}) => {


  const images = product.images&& product.images.map(single =>{
    return{
      original:single.url,
      thumbnail:single.url,
    }
  })



  return (
    <div
      className={`shop-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ImageGallery items={images ? images : []} />;
          </div>
        </div>
      </div>
    </div>
  );
};

ProductImageDescription.propTypes = {
  cartItems: PropTypes.array,
  compareItems: PropTypes.array,
  currency: PropTypes.object,
  galleryType: PropTypes.string,
  product: PropTypes.object,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
  wishlistItems: PropTypes.array
};

const mapStateToProps = state => {
  return {
    currency: state.currencyData,
    cartItems: state.cartData,
    wishlistItems: state.wishlistData,
    compareItems: state.compareData
  };
};

export default connect(mapStateToProps)(ProductImageDescription);
