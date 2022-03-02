import PropTypes from 'prop-types';
import React from "react";
import RatingButtons from "../../../common/components/buttons/rating-buttons";
import Button from "@material-ui/core/Button";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import HandleLikes from "../../review/components/HandleLikes";
import HandleDislikes from "../../review/components/HandleDislikes";


export function Review({reviews, user,onDeleteLike, onCreateLike,onGetReviews,onLoginWarningAlert,likeSuccess,onHandleResetSuccess}){

    return (
        <div>
            {
              reviews && reviews.map((review,i)=>(
                    <div className="review-wrapper">
                        <div className="single-review">
                            <div className="review-img">
                                {/*todo*/}

                            </div>
                            <div className="review-content">
                                <div className="review-top-wrap">
                                    <div className="review-left">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="review-name">
                                                    <h4>{review.user.firstName}</h4>
                                                </div>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="review-rating">
                                                    <RatingButtons name="read-only" value={review.rating}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="review-left">
                                        {/*<button>Reply</button>*/}
                                        {/*todo*/}
                                    </div>
                                </div>
                                <div className="review-bottom">
                                    <p>
                                        {review.message}
                                    </p>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-md-12">
                                                {review.like}
                                            </div>
                                        </div>
                                       <HandleLikes review={review} user={user && user} onDeleteLike={onDeleteLike} onCreateLike={onCreateLike} onGetReviews={onGetReviews} onLoginWarningAlert={onLoginWarningAlert} likeSuccess={likeSuccess} onHandleResetSuccess={onHandleResetSuccess}/>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-md-12">
                                                {review.dislike}
                                            </div>
                                        </div>
                                       <HandleDislikes review={review} user={user && user} onDeleteLike={onDeleteLike} onCreateLike={onCreateLike} onGetReviews={onGetReviews} onLoginWarningAlert={onLoginWarningAlert}  likeSuccess={likeSuccess} onHandleResetSuccess={onHandleResetSuccess}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default function ReviewContainer({reviews , user,onDeleteLike, onCreateLike, onGetReviews,onLoginWarningAlert,likeSuccess,onHandleResetSuccess}){
    const handleCreateReview = () => {};
    const handleLoadMore = () => {};
    return (
        <div>
            <Review reviews={reviews} user={user} onDeleteLike={onDeleteLike} onCreateLike={onCreateLike} onGetReviews={onGetReviews} onLoginWarningAlert={onLoginWarningAlert} likeSuccess={likeSuccess} onHandleResetSuccess={onHandleResetSuccess}/>
           {/*todo - loading reviews*/}
        </div>
)}

Review.propTypes = {
    onInteractWithReview: PropTypes.func,
    onEditReview: PropTypes.func,
    onDeleteReview: PropTypes.func,
    id: PropTypes.string,
    userName: PropTypes.string,
    text: PropTypes.string,
    likes: PropTypes.string,
    dislikes: PropTypes.string,
    interaction: PropTypes.oneOf(['LIKED','DISLIKED','NEUTRAL']),
    ownReview: PropTypes.bool,

}

ReviewContainer.propTypes = {
    reviews: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        userName: PropTypes.string,
        text: PropTypes.string,
        likes: PropTypes.string,
        dislikes: PropTypes.string,
        interaction: PropTypes.oneOf(['LIKED','DISLIKED','NEUTRAL']),
        ownReview: PropTypes.bool,
    })),
    onLoadReviews: PropTypes.func,
    onInteractWithReview: PropTypes.func,
    onCreateReview: PropTypes.func,
    onEditReview: PropTypes.func,
    onDeleteReview: PropTypes.func
}