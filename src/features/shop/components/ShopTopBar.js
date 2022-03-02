import React from 'react';
import ShopSideBarWrapper from "./ShopSideBarWrapper";
import PropTypes from "prop-types";

const ShopTopBar = (props) => {

    function handleSelectChange(event) {
        let value = event.target.value.split("&")
        props.onSortChange(value[0],value[1])
    }
    return (
            <div className="shop-top-bar mb-35">
                <div className="select-shoing-wrap">
                    <div className="shop-select">
                        <label for="sort-by">Sort By</label>
                        <select onChange={event => {handleSelectChange(event)}} className="mt-10">
                            <option value="">Default</option>
                            {props.sortBys.map((sortBy,i)=>(
                                <>
                                    <option value={sortBy.name + "&" + 'ASC'}  name={sortBy.id + 'ASC'}>{`${sortBy.label} - ${sortBy.suffixes?.asc || 'Low to High'}`}</option>
                                    <option value={sortBy.name + "&" + 'DESC'}   name={sortBy.id + 'DESC'}>{`${sortBy.label} - ${sortBy.suffixes?.desc || 'High to Low'}`}</option>
                                </>
                            ))}
                        </select>
                    </div>
                    {/*<p>Showing 8 of 15 result</p>*/}
                </div>
                <div className="shop-tab">
                    <button className="shop-tab" onClick={()=> props.setGrid('row grid two-column')}>
                        <i className="fa fa-th-large"/>
                    </button>
                    <button className="shop-tab-grid-three" onClick={()=> props.setGrid('row grid three-column')}>
                        <i className="fa fa-th"/>
                    </button>
                </div>
            </div>
    );
};

ShopTopBar.propTypes = {
    sortBys: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        name:PropTypes.string,
    })),
    onSortChange: PropTypes.func,
}

export default ShopSideBarWrapper(ShopTopBar);