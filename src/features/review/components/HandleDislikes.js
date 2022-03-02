import React, {useEffect} from 'react';
import Button from "@material-ui/core/Button";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import {useAuth} from "../../../app/hooks";

const HandleDislikes = ({review,user,onDeleteLike, onCreateLike,onLoginWarningAlert,onGetReviews,likeSuccess,onHandleResetSuccess}) => {
    const isAuthenticated = useAuth();


    const handleDislike = (e,id,liked,disliked,rid) => {
        e.preventDefault();
        if (isAuthenticated === false){
            onLoginWarningAlert()
        }else{
            if (liked === false){
                if (disliked === false){
                    let like = {
                        reviewId:rid,
                        userId:user,
                        reaction:false,
                        deleted:false
                    }
                    onCreateLike(like)
                    }else{
                        let like = {
                            reviewId:rid,
                            userId:user,
                            reaction:false,
                        }
                        onDeleteLike(like)
                }
            }
        }
    };

    return (
        <div className="row">
            <div className="col-md-12">
                <Button   component="span" onClick={(e)=>handleDislike(e,review.user.id,review.liked, review.disliked, review.id)}>
                    {
                        review.likes.map(r=>(r.userId === user))  && review.disliked === true ?  <ThumbDownAltIcon style={{color:"#000080"}}/>: <ThumbDownAltIcon style={{color:"#B2BABB"}}/>
                    }
                </Button>
            </div>
        </div>
    );
};

export default HandleDislikes;