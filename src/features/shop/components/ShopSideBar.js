import ShopSideBarWrapper from "./ShopSideBarWrapper";
import PropTypes from 'prop-types';
import React, {useEffect, useState} from "react";
export function ShopSideBar(props){
    const [search,setSearch] = useState('')

    function handleSearch(e) {
        setSearch(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.handleSearchChange(search)
    }

    useEffect(()=>{
        if (search.length === 0){
            props.onHandleClearSearchData()
        }
    },[search])
    return (
        <div className="sidebar-style mr-30">
            <div className="sidebar-widget"><h4 className="pro-sidebar-title">Search </h4>
                <div className="pro-sidebar-search mb-50 mt-20">
                    <form className="pro-sidebar-search-form" onSubmit={e=>handleSubmit(e)}>
                        <input type="text" placeholder="Search here..." onChange={e => handleSearch(e)}/>
                        <button><i className="pe-7s-search"></i></button>
                    </form>
                </div>
            </div>
            <div className="sidebar-widget mb-10"><h4 className="pro-sidebar-title">Category </h4>
                <div className="sidebar-widget-list mt-30">
                    <ul>
                        {props.isSubCategory&&
                        <li>
                            <div className="sidebar-widget-list-left">
                                <button onClick={()=>{props.onClearFilter()}}><i className="fa fa-arrow-left" aria-hidden="true"></i>&nbsp;&nbsp;Back</button>
                            </div>
                        </li>
                        }
                        {props.categories.map((category,i)=>(
                            <li key={`cat-${category.id}-${i}`}>
                                <div className="sidebar-widget-list-left">
                                    <button onClick={()=>{props.onCategoryChange(category.id)}}><span className="checkmark"></span>{category.name}</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {
               props && props.filters && props.filters.length >0
                    ?
                    <div className="sidebar-widget mb-10"><h4 className="pro-sidebar-title">Filters</h4>
                        <div className="sidebar-widget-list mt-30">
                            <ul>
                                {props.filters.map((filter,i)=>(
                                    <li key={`filter-${filter.id}-${i}`}>
                                        <h5>{filter.label}</h5>
                                        <select name={filter.attribute}>
                                            {filter.values.map((value,i)=>(
                                                <option key={`filter-value-${value.id}-${i}`}
                                                        value={value.id}>{value.label}</option>
                                            ))}
                                        </select>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    :
                    null

            }
        </div>
    );
}

ShopSideBar.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string
    })),
    filters: PropTypes.arrayOf(PropTypes.shape({
        attribute: PropTypes.string,
        label: PropTypes.string,
        values: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string
        }))
    })),
    tags: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.label
    })),
    onCategoryChange: PropTypes.func,
    onSortChange: PropTypes.func,
    onFilterChange: PropTypes.func,
}
export default ShopSideBarWrapper(ShopSideBar);

