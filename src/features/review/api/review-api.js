import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:8080';
const REVIEW_API = API_BASE + '/review';
const LIKE_API = API_BASE + '/likes';


export async function getReviewByProductId(id,user) {
    try {
        return await axios.post(REVIEW_API+`/queryjoin/${id}`,{ userId:user})
    }catch (e) {
        throw e;
    }
}

export async function createReview(review) {
    try {
        return await axios.post(REVIEW_API,review)
    }catch (error) {
        throw error;
    }
}

export async function createLike(like){
    try {
        return await axios.post(LIKE_API,like)
    }catch (error) {
        
    }
}

export async function deleteLike(like){
    try {
        return await axios.delete(LIKE_API+'/delete', {data: {reviewId: like.reviewId, userId: like.userId, reaction: like.reaction },});
    }catch (error) {

    }
}

// {reviewId: like.reviewId, userId: like.userId, reaction: like.reaction}