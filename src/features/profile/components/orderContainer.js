import React from 'react';
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import ReviewContainer from "../../product/components/ReviewContainer";
import ProductRating from "../../product/components/ProductRating";
import PersonalDataSection from "./PersonalDataSection";
import OrderList from "./OrderList";
import {NavLink, useHistory} from "react-router-dom";

const OrderContainer = (props) => {
    return (
        <div className="description-review-area pb-90">
            <div className="container">
                <div className="description-review-wrapper">
                    <Tab.Container defaultActiveKey="productReviews">
                        <Nav variant="pills" className="description-review-topbar">
                            <Nav.Item>
                                <NavLink to={process.env.PUBLIC_URL + "/profile"}>Profile</NavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="productReviews">Orders</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content className="description-review-bottom">
                            <Tab.Pane eventKey="productReviews">
                                <div className="row">
                                    <div className="col-lg-12">
                                          <OrderList  {...props}/>
                                    </div>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </div>
            </div>
        </div>
    );
};

export default OrderContainer;