import React, {useState} from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    clearCurrent,
    getCategories,
    getProducts,
    setCurrentCategory,
    setCurrentSubCategory,
    getTags,
    setCurrentSort,
    getProductsSortBy,
    getSubCategoriesByCategories, setCurrentSearch, setClearAllData, setCurrentLimit
} from "../shopSlice";
import Loader from "../../../helpers/loader";
import {useHistory, useLocation} from "react-router";

export default function ShopSideBarWrapper(Component){

    return (
        function ShopSideBar(props){
            let location = useLocation();
            const dispatch = useDispatch();
            const categories = useSelector(store => store.shop.categories);
            const currentCategory = useSelector(store=> store.shop.current.category);
            const currentSubCategory = useSelector(store=> store.shop.current.subCategory);
            const currentOrder = useSelector(store=> store.shop.current.order);
            const currentDirection = useSelector(store=> store.shop.current.direction);
            const limit = useSelector(store => store.shop.current.limit);
            const offset = useSelector(store => store.shop.current.offset);
            const tags = useSelector(store => store.shop.tags);
            const total = useSelector(store=>store.shop.current.total);
            const searchValue = useSelector(store=>store.shop.current.search);

            const filters = [];
            const[currentSortValue,setCurrentSortValue] = useState({categoryId:null,subCategoryId:null,order:null,direction:null,limit:null,offset:null,search:null});

            useEffect(() => {
                window.scrollTo(0, 0);
            }, [offset]);

            useEffect(()=>{
                setCurrentSortValue({
                    categoryId: currentCategory,
                    subCategoryId: currentSubCategory,
                    order: currentOrder,
                    direction: currentDirection,
                    limit: limit,
                    offset:offset,
                    search: searchValue
                })
            },[currentCategory,currentSubCategory,currentOrder,currentDirection,limit,offset,searchValue])



            const sortBys = [
                    {id:1, label:"Price" , name:'price'} ,
                    {id:2, label:"Date", name:'createdAt', suffixes:{asc:'Oldest to Latest',desc:'Latest to Oldest'}}
                ]


            const handleSortChange = (order, direction) => {
                    dispatch(setCurrentSort({order, direction}));
                    let catId = currentSortValue.categoryId;
                    let subCatId = currentSortValue.subCategoryId;
                    let limit= currentSortValue.limit;
                    let offset = currentSortValue.offset;
                    let search = currentSortValue.search;
                    dispatch(setCurrentSearch(search))
                    dispatch(getProductsSortBy({order, direction,catId,subCatId,limit,offset,search}))
            };

            const handleCategoryChange = (id) => {
                if(!!currentCategory){
                    // If a Category is already selected query by sub-category instead
                    dispatch(setCurrentSubCategory(id));
                    // console.log(currentCategory,currentSubCategory,currentOrder,currentDirection)
                    let order = currentSortValue.order;
                    let direction = currentSortValue.direction;
                    let catId = currentSortValue.categoryId;
                    let subCatId = id;
                    let limit= currentSortValue.limit;
                    let offset = currentSortValue.offset;
                    let search = currentSortValue.search
                    dispatch(setCurrentSearch(search))
                    dispatch(getProductsSortBy({order,direction,catId,subCatId,limit,offset,search}))
                } else {
                    dispatch(setCurrentCategory(id));
                    dispatch(getSubCategoriesByCategories({categoryId:id}));
                    let order = currentSortValue.order;
                    let direction = currentSortValue.direction;
                    let catId = id;
                    let subCatId = currentSortValue.subCategoryId;
                    let limit= currentSortValue.limit;
                    let offset = currentSortValue.offset;
                    let search = currentSortValue.search
                    dispatch(setCurrentSearch(search))
                    if (!!id){
                        dispatch(getProductsSortBy({order,direction,catId,subCatId,limit,offset,search}))
                    }
                }
            };

            const handleSearchChange = (search)=>{
                dispatch(setCurrentSearch(search))
                let order = currentSortValue.order;
                let direction = currentSortValue.direction;
                let catId = currentSortValue.categoryId;
                let subCatId = currentSortValue.subCategoryId;
                let limit= currentSortValue.limit;
                let offset = currentSortValue.offset;
                dispatch(getProductsSortBy({order,direction,catId,subCatId,limit,offset,search}))
            }

            const handleFilterChange = (attribute,value) => {
            
            }

            const handleClearFilter = () => {
                let order = currentSortValue.order;
                let direction = currentSortValue.direction;
                let limit= currentSortValue.limit;
                let offset = currentSortValue.offset;
                let catId = null;
                let subCatId = null;
                let search = currentSortValue.search
                if (!!order){
                    dispatch(getProductsSortBy({order,direction,catId,subCatId,limit,offset,search}))
                    dispatch(clearCurrent());
                    dispatch(getCategories());
                    dispatch(getTags());
                }else{
                    if (limit != null){
                        console.log("mannnnnnnnnnn")
                        // dispatch(getProducts({limit,offset}));
                        dispatch(clearCurrent());
                        dispatch(getCategories());
                        dispatch(getTags());
                    }

                }
            }

            const handleTagsChange = (tags) =>{

            };

            const handleClearSearchData = () =>{
                let order = currentSortValue.order;
                let direction = currentSortValue.direction;
                let catId = currentSortValue.categoryId;
                let subCatId = currentSortValue.subCategoryId;
                let limit= currentSortValue.limit;
                let offset = currentSortValue.offset;
                if (limit != null){
                    dispatch(setCurrentSearch(null))
                    dispatch(getProductsSortBy({order,direction,catId,subCatId,limit,offset}))
                }
            }

            useEffect(()=>{
                handleClearFilter();
            },[])

            useEffect(()=> {
                 if (currentSortValue.categoryId === null && currentSortValue.subCategoryId === null && currentSortValue.order ===null && currentSortValue.direction === null && currentSortValue.limit === null && currentSortValue.offset === null){
                     let order = "createdAt";
                     let direction="DESC"
                     dispatch(getProducts({limit,offset,order,direction}));
                    dispatch(clearCurrent());
                    dispatch(getCategories());
                    dispatch(getTags())
                }
                dispatch(setCurrentLimit(limit))
            },[limit])
        
           return  limit === null ? <Loader/> :  <Component
               categories={categories}
               filters={filters}
               sortBys={sortBys}
               tags={tags}
               isSubCategory={!!currentCategory}
               subCategory={currentSubCategory}
               total={total}
               onCategoryChange={handleCategoryChange}
               onSortChange={handleSortChange}
               onFilterChange={handleFilterChange}
               onClearFilter={handleClearFilter}
               onTagsChange={handleTagsChange}
               handleSearchChange={handleSearchChange}
               onHandleClearSearchData={handleClearSearchData}
               limit={limit}
               {...props}/>




        }
)}