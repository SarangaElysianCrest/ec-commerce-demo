import React, {useEffect, useState} from 'react';
import ProductGrid from "../../common/components/products/ProductGrid";
import PropTypes from "prop-types";
import {ShopView} from "../shop/ShopView";
import WelcomeArea from "../../common/components/Home/welcome-area/welcome-area";
import HomeWrapper from "./homeWrapper";
import HeroSlider from "../../common/components/Home/hero-slider/hero-slider";
import NewArrival from "../../common/components/Home/new-arrival/new-arrival";
import {useLocation} from "react-router-dom";

const HomeView = (props) => {
    console.log(props)
    let location = useLocation();
    const[layout,setLayout] = useState('col-xl-3 col-md-6 col-lg-4 col-sm-6');
    const[grid,setGrid] = useState('row');
    useEffect(()=>{
        if (location.pathname === '/shop') {
            setLayout('col-xl-4 col-md-6 col-lg-6 col-sm-6');
            setGrid('row grid three-column')
        }
    },[location])
    console.log(props)
    return (
        <div>
            <div>
                <HeroSlider/>
                <WelcomeArea/>
                <NewArrival/>
                <ProductGrid products={props&&props.products} layout={layout} grid={grid} onAddToCart={props.onAddToCart} onAddToWishList={props.onAddToWishList}/>
            </div>
        </div>
    );
};

HomeView.propTypes = {
    products: PropTypes.array,
    onCategoryChange: PropTypes.func,
    onSortChange: PropTypes.func,
    onFilterChange: PropTypes.func,
    onPageChange: PropTypes.func,
    onLimitChange: PropTypes.func
}
export default HomeWrapper(HomeView);