import React, {useEffect} from 'react';
import ReviewWrapper from "../../review/ReviewWrapper";
import ReviewContainer from "./ReviewContainer";
import ProductRating from "./ProductRating";
import {useAuth} from "../../../app/hooks";

const ReviewTab = ({setNoOFReviews,reviews,user,onCreateReview,onCreateLike, onDeleteLike, onGetReviews, onLoginWarningAlert,likeSuccess,onHandleResetSuccess}) => {
    const isAuthenticated = useAuth();
    useEffect(()=>{
        setNoOFReviews(reviews && reviews.results && reviews.results.length)
    },[reviews])

    useEffect(()=>{
        if (likeSuccess === true){
            onGetReviews()
        }
        return()=> {
            onHandleResetSuccess()
        }
    },[likeSuccess])

    useEffect(()=>{
        if (user != null){
            onGetReviews()
        }
    },[])

    useEffect(()=>{
        if (isAuthenticated === false){
            onGetReviews()
        }
    },[])
    return (
        <div className="row">
            <div className="col-lg-6">
                <ReviewContainer reviews={reviews && reviews.results } user={user && user} onCreateLike={onCreateLike} onDeleteLike={onDeleteLike} onGetReviews={onGetReviews} onLoginWarningAlert={onLoginWarningAlert} likeSuccess={likeSuccess} onHandleResetSuccess={onHandleResetSuccess}/>
            </div>
            <div className="col-lg-6">
                <ProductRating user={user && user} onCreateReview={onCreateReview} onLoginWarningAlert={onLoginWarningAlert} onGetReviews={onGetReviews}/>
            </div>
        </div>
    );
};

export default ReviewWrapper(ReviewTab);