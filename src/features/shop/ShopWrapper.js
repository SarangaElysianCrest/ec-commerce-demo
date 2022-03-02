import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {getProductsByCategory, getProductsSortBy, setCurrentLimit, setOffset} from "./shopSlice";
import {addToCart} from "../cart/cartSlice";
import {addToWhishList} from "../wishlist/wishlishSlice";
import { useAlerts } from "../../app/hooks";
import {resetCartAlert} from "../cart/cartSlice";
import {getUserData} from "../profile/profileSlice";
import Loader from "../../helpers/loader";

export default function ShopWrapper(Component){

    return function WrappedShop(props){
        const dispatch = useDispatch();
        const [limit, setLimit] = useState(8);
        const [sortBy, setSortBy] = useState(null);
        const [sortDirection, setSortDirection] = useState('ASC');
        const [filters,setFilters] = useState([]);
        const cartAlert = useSelector(store => store.cart.alert);
        const {setAlert} = useAlerts();
        const username = useSelector(store => store.profile.user);
        const currentCategory = useSelector(store=> store.shop.current.category);
        const currentSubCategory = useSelector(store=> store.shop.current.subCategory);
        const currentOrder = useSelector(store=> store.shop.current.order);
        const currentDirection = useSelector(store=> store.shop.current.direction);
        const currentLimit = useSelector(store=> store.shop.current.limit);
        const currentOffset = useSelector(store=> store.shop.current.offset);
        const products = useSelector(store=>store.shop.current.products);
        const total = useSelector(store=>store.shop.current.total);
        const loadingState = useSelector(store=>store.shop.loading)
        const searchValue = useSelector(store=>store.shop.current.search);
        const[currentSortValue,setCurrentSortValue] = useState({categoryId:null,subCategoryId:null,order:null,direction:null,limit:null,offset:null,search:null});
        const [pageCount, setPageCount] = useState();


        useEffect(()=>{
            if (username != null){
                dispatch(getUserData({username}))
            }
        },[])

        useEffect(()=>{
            setCurrentSortValue({
                categoryId: currentCategory,
                subCategoryId: currentSubCategory,
                order: currentOrder,
                direction: currentDirection,
                limit: currentLimit,
                offset:currentOffset,
                search: searchValue
            })
        },[currentCategory,currentSubCategory,currentOrder,currentDirection,currentLimit,currentOffset,searchValue])


        const handleSortChange = (sortBy, direction) => {
            setSortBy(sortBy);
            setSortDirection(direction);
        };

        const handleFilterChange = (attribute,value) => {
            setFilters([
                ...filters,
                {attribute,value}
            ])
        }

        const handleClearFilter = () => {
            setFilters([]);
        }

        useEffect(()=>{
            let count = Math.ceil(total / limit);
            setPageCount(count)
        },[products])


        const handleLimitChange = (limit) => {
            setLimit(limit)
            let order = currentSortValue.order;
            let direction = currentSortValue.direction;
            let catId = currentSortValue.categoryId;
            let subCatId = currentSortValue.subCategoryId;
            let offset = currentSortValue.offset
            let search = currentSortValue.search
            dispatch(setCurrentLimit(limit))
            dispatch(getProductsSortBy({order,direction,catId,subCatId,limit,offset,search}))
        }

        const handleOffset = (offsetData) =>{
            let order = currentSortValue.order;
            let direction = currentSortValue.direction;
            let catId = currentSortValue.categoryId;
            let subCatId = currentSortValue.subCategoryId;
            let limit = currentSortValue.limit;
            let offset = offsetData * limit ;
            let search = currentSortValue.search
            dispatch(setOffset(offsetData * limit))
            if (currentOffset === null){
                let offset = 8;
                dispatch(getProductsSortBy({order,direction,catId,subCatId,limit, offset,search}))
            }else{
                dispatch(getProductsSortBy({order,direction,catId,subCatId,limit, offset,search}))
            }
        }
        const handleAddToCart = (item) => {
            dispatch(addToCart(item))
        };
        const handleAddToWishList= (item) =>{
            dispatch(addToWhishList(item))
        }
        useEffect(()=>{
            if(cartAlert && cartAlert.show) {
                setAlert({
                    message: cartAlert.message,
                    severity: cartAlert.severity,
                    onClear: ()=>dispatch(resetCartAlert())
                })
            }
        },[cartAlert])


        return (
                        <Component
                        onLimitChange={handleLimitChange}
                        onAddToCart={handleAddToCart}
                        onAddToWishList={handleAddToWishList}
                        onOffsetChange={handleOffset}
                        products={products}
                        currentLimit={currentLimit}
                        limit={limit}
                        total={total}
                        pageCount={pageCount}
                        {...props}
                    />

            )
    }
}