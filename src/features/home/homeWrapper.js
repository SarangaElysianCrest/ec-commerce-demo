import React, {useEffect, useState} from 'react';
import {getSortBYProducts} from "./api/home-api";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../cart/cartSlice";
import {addToWhishList} from "../wishlist/wishlishSlice";
import { useAlerts } from "../../app/hooks";
import {resetCartAlert} from "../cart/cartSlice";
import {currentUser, getUserData} from "../profile/profileSlice";
import {clearCurrent, getCategories, getProducts, getProductsSortBy, getTags, setCurrentLimit} from "../shop/shopSlice";
import {useLocation} from "react-router-dom";
import {createUser} from "../auth/authSlice";

export default function HomeWrapper(Component){
    return function WrappedHome(props){
        const dispatch = useDispatch();
        const { pathname } = useLocation();
        // const [limit, setLimit] = useState(8);
        const [page, setPage] = useState(0);
        const [sortBy, setSortBy] = useState(null);
        const [sortDirection, setSortDirection] = useState('ASC');
        const [filters,setFilters] = useState([]);
        const cartAlert = useSelector(store => store.cart.alert);
        const username = useSelector(store => store.profile.user);
        const email = useSelector(store => store.profile.email);
        const {setAlert} = useAlerts();
        const products = useSelector(store=>store.shop.current.products);
        const profile = useSelector(store => store.profile.profile);

        useEffect(()=>{
            dispatch(currentUser())
        },[])


        useEffect(()=>{
            if (username != null){
                dispatch(getUserData({username}))
            }
        },[])




        const handleCategoryChange = (category) => {

        };

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

        const hanldeClearFilter = () => {
            setFilters([]);
        }

        const handlePageChange = (page) => {
            setPage(page);
        }

        // const handleLimitChange = (limit) => {
        //     setLimit(limit);
        // }

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


        return <Component
            onCategoryChange={handleCategoryChange}
            onSortChange={handleSortChange}
            onFilterChange={handleFilterChange}
            // onClearFilter={hanldeClearFilter}
            // onLimitChange={handleLimitChange}
            onPageChange={handlePageChange}
            onAddToCart={handleAddToCart}
            onAddToWishList={handleAddToWishList}
            products={products}
            {...props}
        />
    }
};
