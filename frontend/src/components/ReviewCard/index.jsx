import React from "react";
import Axios from "../../api";
import defaultAvatar from '../../assets/avatar.svg'
import { Wrapper } from './styled'
import {withRouter} from "react-router";


const ReviewCard = props => {
    //destructuring props
    const { id, content, number_of_likes, number_of_comments, latest_comments } = props.review
    const restaurant = props.review.restaurant
    const author = props.review.author
    console.log(props.review)

    const toggleLikeUnlike = async (id) =>{
        const url = `reviews/like/${id}/`
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        };
        const response = await Axios.patch(url, null, config)
    }

    const restaurantPage = () => {
        props.history.push(`/restaurant/?id=${restaurant.id}`)
    }

    return(
        <Wrapper>
            <div className="review-top">
                <img src={author['avatar'] ? author['avatar'] : defaultAvatar} alt ='pp'/>
                <div className="name-reviews">
                    <span className="name">{author['first_name']} {author['last_name']}</span>
                    <span className="smaller-font">{author['number_of_reviews']} reviews in total</span>
                </div>
            </div>
            <div className="address smaller-font">

            </div>
            <div className="content">
                <span onClick={restaurantPage} className="name restaurant">{restaurant['name']}</span>
                <span className="review-content">{content}</span>
            </div>
            <div className="like-comment">
                <div>
                    <button onClick={() => toggleLikeUnlike(id)}>
                        {number_of_likes} { number_of_likes === 1 ? 'like' : 'likes'}</button>
                </div>
                <div>
                    <button>{number_of_comments} {number_of_comments === 1 ? 'comment' : 'comments'}</button>
                </div>
            </div>
            <div className="latest-comments">
                <span>Latest comments</span>
                {latest_comments ? latest_comments.map(comment =>
                    <>
                        <span className="comment-author">{comment.author.first_name} {comment.author.last_name}</span>
                        <span className="comment-text">{comment.text}</span>
                    </>
                ) : null}
            </div>
        </Wrapper>
    );
}

export default withRouter(ReviewCard);
