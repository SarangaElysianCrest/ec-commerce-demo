import React, {useEffect, useState} from 'react';
import {TableBody, TableRow, TableCell, InputAdornment } from '@material-ui/core';
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import SearchBar from "material-ui-search-bar";
import Avatar from "@material-ui/core/Avatar";
import { Shop} from "@material-ui/icons";
import {Link, Route, Switch} from "react-router-dom";
import {dates} from "../../../helpers/Date";
import SingleOrderDetails from "./SingleOrderDetails";

const OrderTable = (props) => {
    let [rows, setRows] = useState(props.ordersData);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    const requestSearch = (searchedVal) => {
        const filteredRows = props.ordersData.filter((row) => {
            return row.createdAt.split("T")[0].toLowerCase().includes(searchedVal.toLowerCase()) || row.id.toLowerCase().includes(searchedVal.toLowerCase()) || row.total.toString().match(searchedVal.toString()) || row.total.toString() === (searchedVal.toString()+".00")
        });
        setRows(filteredRows);
    };





    function tableBody() {
        if (rows&&rows.length === 0){
            return <p  style={{textAlign:'center',marginTop:'10px'}}>No data found</p>
        }else if (rows&&rows.length > 0){
            return <TableBody>
                {rows&&rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(item => (
                    <TableRow key={item.reference} hover>
                        <TableCell align="center">
                            {item&&item.createdAt.split("T")[0]}
                        </TableCell>
                        <TableCell  align="center">
                            {item&&item.id}
                        </TableCell>
                        <TableCell align="center">
                            {item&&item.total}
                        </TableCell>
                        <TableCell align="center" style={{textAlign:"center"}}>
                            <div className="avatar-icon">
                                <Link to={`/order/${item&&item.id}` } item={item}>
                                    <Avatar  style={{backgroundColor:'#000080', textAlign:"center"}}>
                                        <Shop/>
                                    </Avatar>
                                </Link>

                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        }
    }
    return (
        <div className="table-order">
            <TableContainer>
                <SearchBar
                    onChange={(e) => requestSearch(e)} className="table-search-bar"
                />
                <hr/>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow hover>
                            <TableCell align="center">Date (MM/DD/YEAR)</TableCell>
                            <TableCell align="center">Reference</TableCell>
                            <TableCell align="center">Amount (LKR)</TableCell>
                            <TableCell align="center">Check Details</TableCell>
                        </TableRow>
                    </TableHead>
                    {tableBody()}
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows&&rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </div>
    );
};

export default OrderTable;