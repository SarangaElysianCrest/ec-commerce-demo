import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import ProductGrid from "../../common/components/products/ProductGrid";
import ShopSideBar from './components/ShopSideBar';
import ShopWrapper from './ShopWrapper';
import Pagination from '../../common/components/pagination';
import Breadcrumb from "../../common/components/breadcrumb";
import ShopTopBar from "./components/ShopTopBar";
import {useLocation} from "react-router-dom";
import ReactPaginate from 'react-paginate';
import Loader from "../../helpers/loader";


export function ShopView(props){

    let location = useLocation();
    const[layout,setLayout] = useState('col-xl-3 col-md-6 col-lg-4 col-sm-6');
    const[grid,setGrid] = useState('row grid three-column');


    useEffect(()=>{
       if (location.pathname === '/shop') {
           setLayout('col-xl-4 col-sm-6')
       }
    },[location])


    return (
        <div>
            <Breadcrumb/>
            <div className="shop-area pt-95 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 order-1 order-lg-1">
                            <ShopSideBar />
                        </div>
                        <div className="col-lg-9 order-2 order-lg-2">
                            <ShopTopBar setGrid={setGrid}/>
                            <ProductGrid onOffsetChange={props.onOffsetChange} onLimitChange={props.onLimitChange} products={props.products} layout={layout} total={props.total} grid={grid} onAddToCart={props.onAddToCart} onAddToWishList={props.onAddToWishList} />
                            <Pagination pageCount={props.pageCount} onOffsetChange={props.onOffsetChange} onLimitChange={props.onLimitChange} currentLimit={props.currentLimit} limit={props.limit}/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}

ShopView.propTypes = {
    products: PropTypes.array,
    total: PropTypes.number,
    limit: PropTypes.number,
    page: PropTypes.number,
    onCategoryChange: PropTypes.func,
    onSortChange: PropTypes.func,
    onFilterChange: PropTypes.func,
    onPageChange: PropTypes.func,
    onLimitChange: PropTypes.func
}

export default ShopWrapper(ShopView);
