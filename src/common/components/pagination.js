import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import React, {useEffect, useState} from 'react';


export default function Pagination(props){
    const[limit,setLimit] = React.useState();

    const handleLimitChange = (value) => {
        props.onLimitChange(value);
    }

    const handlePageChange = (data) => {
        props.onOffsetChange(data.selected);
    }
    useEffect(()=>{
        if (props.currentLimit === 0){
            setLimit(8)
            props.onLimitChange(8)
        }else{
            setLimit(props.currentLimit)
        }
    },[props.currentLimit])

    return (
        <>

            <div className="pro-pagination-style text-center mt-30">
                <div className="row">
                    <div className="col-md-6 mt-3">
                        {/* Limit Selector */}
                        <div>
                            <div >
                                <label htmlFor="sort-by">Per page limit</label>
                                <select className="element-sort"  value={limit} onChange={(e)=>handleLimitChange(e.target.value)}>
                                    <>
                                    <option value={5}>5</option>
                                    <option value={8}>8</option>
                                    <option value={12}>12</option>
                                    <option value={20}>20</option>
                                    <option value={50}>50</option>
                                    </>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="col-md-6">
                            <ReactPaginate previousLabel={"prev"}
                                           nextLabel={"next"}
                                           breakLabel={<a href="">...</a>}
                                           breakClassName={"break-me"}
                                           pageCount={props.pageCount}
                                           marginPagesDisplayed={2}
                                           pageRangeDisplayed={5}
                                           onPageChange={handlePageChange}
                                           containerClassName={"pagination"}
                                           subContainerClassName={"pages pagination"}
                                           pageClassName="page-item"
                                           activeClassName="active"
                            />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

Pagination.propTypes = {
    page: PropTypes.number,
    itemCount: PropTypes.number,
    limitPerPage: PropTypes.number,
    onPageChange: PropTypes.func,
    onLimitChange: PropTypes.func 
}