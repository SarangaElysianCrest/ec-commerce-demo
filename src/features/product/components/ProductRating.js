import React, {useEffect} from 'react';
import RatingButtons from "../../../common/components/buttons/rating-buttons";
import {useParams} from "react-router-dom";
import {useAuth} from "../../../app/hooks";

const ProductRating = ({user,onCreateReview,  onLoginWarningAlert,onGetReviews}) => {
    const [value, setValue] = React.useState(2);
    const [message, setMessage] = React.useState('');
    const {id} = useParams();
    const isAuthenticated = useAuth();

    function handleMessage(e) {
        setMessage(e.target.value);
    }
    const handleCreateReview = (e) =>{
        e.preventDefault();
        let review = {
            message:message,
            rating:value,
            status:0,
            like:0,
            dislike:0,
            userId:user&&user,
            productId:id,
        }
        if (isAuthenticated === false){
            onLoginWarningAlert()
        }else{
            onCreateReview&&onCreateReview(review);
            setMessage('')
            setValue(2)
        }
    }


    return (
        <div>
          <div className="ratting-form-wrapper pl-50">
            <h3>Add a Review</h3>
            <div className="ratting-form">
              <form onSubmit={e => handleCreateReview(e)}>
                <div className="star-box">
                    <span>Your rating:</span>
                    <div className="ratting-star">
                        <RatingButtons name="simple-controlled" value={value} setValue={setValue}/>
                    </div>
                    </div>
                <div className="row">
                      <div className="col-md-12">
                        <div className="rating-form-style form-submit">
                                    <textarea
                                        name="message"
                                        placeholder="Message"
                                        defaultValue={""}
                                        value={message}
                                        onChange={e => handleMessage(e)}
                                    />
                          <input type="submit" defaultValue="Submit"/>
                        </div>
                      </div>
                </div>
              </form>
            </div>
          </div>
        </div>
    );
};

export default ProductRating;