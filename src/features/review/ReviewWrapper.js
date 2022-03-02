import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    createLikeByUser,
    createReviewByUser,
    deleteLikeByUser,
    getReviewByProductId, loginWarningAlert,
    resetReviewAlert, resetSuccessLikes
} from "./reviewSlice";
import {useParams} from "react-router-dom";
import {useAlerts, useAuth} from "../../app/hooks";
import * as api from "./api/review-api";

export default function ReviewWrapper(Component){
    return function WrappedReview(props) {
        const dispatch = useDispatch();
        const {id} = useParams();
        const reviews = useSelector(store=>store.review.reviews) || [];
        const users = useSelector(store => store.profile.user);
        const profile = useSelector(store => store.profile.profile);
        const alert = useSelector(store => store.review.alert);
        const likeSuccess = useSelector(store => store.review.likesState);
        const {setAlert} = useAlerts();

        let user = profile && profile.id

        useEffect(()=>{
            if(users != null){
                dispatch(getReviewByProductId({id,user}))
            }
        },[users])

        const handleGetReviews = () =>{
                dispatch(getReviewByProductId({id,user}))
        }

        async function handleCreateReview  (review){
            let result = await api.createReview(review)
                .then(res =>{
                    if (res.data.status === "success"){
                        dispatch(getReviewByProductId({id,user}))
                        setAlert({
                            message: 'You have successfully added review.',
                            severity: 'success',
                            show:true
                        })
                    }
                })
                .catch(error =>{
                    setAlert({
                        message: error,
                        severity: 'error',
                        show:true
                    })
                })
        }

        const handleCreateLike = (like) =>{
            dispatch(createLikeByUser({like}))
        }

        const handleDeleteLike = (like) =>{
            dispatch(deleteLikeByUser({like}))
        }

        const handleLoginWarningAlert= () =>{
            dispatch(loginWarningAlert())
        }

        const handleSuccess = () =>{
            dispatch(resetSuccessLikes())
        }

        // Alert Effect Hook
        useEffect(()=>{
            if(alert && alert.show) {
                setAlert({
                    message: alert.message,
                    severity: alert.severity,
                    onClear: ()=>dispatch(resetReviewAlert())
                })
            }
        },[alert]);

        return <Component
            user={profile && profile.id}
            onCreateReview={handleCreateReview}
            onCreateLike={handleCreateLike}
            onDeleteLike={handleDeleteLike}
            onGetReviews={handleGetReviews}
            onLoginWarningAlert={handleLoginWarningAlert}
            reviews={reviews}
            likeSuccess={likeSuccess}
            onHandleResetSuccess={handleSuccess}
            {...props}
        />
    }
}