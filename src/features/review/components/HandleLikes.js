import React, {useEffect} from 'react';
import Button from "@material-ui/core/Button";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import {useAuth} from "../../../app/hooks";

const HandleLikes = ({review,user,onDeleteLike, onCreateLike,onGetReviews,onLoginWarningAlert,likeSuccess,onHandleResetSuccess}) => {
    const isAuthenticated = useAuth();

    useEffect(()=>{
        return()=> {
            onHandleResetSuccess()
        }
    },[likeSuccess])

    const handleLike = (e,id,liked,disliked,rid)=>{
        e.preventDefault();
        if (isAuthenticated === true){
            if (disliked === false){
                if (liked === false){
                    let like = {
                        reviewId:rid,
                        userId:user,
                        reaction:true,
                        deleted:false
                    }
                    onCreateLike(like);
                }else{
                    let like = {
                        reviewId:rid,
                        userId:user,
                        reaction:true,
                    }
                    onDeleteLike(like)
                }
            }
        }else{
            onLoginWarningAlert()
        }

    };

    return (
        <div className="row">
            <div className="col-md-12 ">
                <Button  component="span" onClick={(e)=>handleLike(e,review.user.id,review.liked, review.disliked, review.id)}>
                    {
                        review.likes.map(r=>(r.userId === user))  && review.liked === true  ?  <ThumbUpAltIcon style={{color:"#000080"}}/> : <ThumbUpAltIcon style={{color:"#B2BABB"}}/>
                    }
                </Button>
            </div>
        </div>
    );
};

export default HandleLikes;