import React from 'react';
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import ReviewContainer from "../../product/components/ReviewContainer";
import ProductRating from "../../product/components/ProductRating";
import PersonalDataSection from "./PersonalDataSection";
import OrderList from "./OrderList";
import {NavLink, useHistory} from "react-router-dom";

const ProfileContainer = (props) => {
    return (
        <div className="description-review-area pb-90">
            <div className="container">
                <div className="description-review-wrapper">
                    <Tab.Container defaultActiveKey="productDescription">
                        <Nav variant="pills" className="description-review-topbar">
                            <Nav.Item>
                                <Nav.Link eventKey="productDescription">Profile</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <NavLink to={process.env.PUBLIC_URL + "/order"}>Orders</NavLink>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content className="description-review-bottom">
                            <Tab.Pane eventKey="productDescription">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <PersonalDataSection {...props}/>
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

export default ProfileContainer;