import {ReviewWrapper} from "./styled";
import defaultAvatar from "../../../../assets/avatar.svg";
import React, {useEffect, useState} from "react";
import StaticRating from "../../../Rating/static";
import Axios from "../../../../api";
import Comments from "../create_comment";

const Reviews = props => {

    const { id, author, number_of_likes, number_of_comments, content, created, rating } = props.review
    const [toggle, setToggle] = useState(false)

    const toggleLikeUnlike = async (id) =>{
        const url = `reviews/like/${id}/`
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        };
        const response = await Axios.patch(url, null, config)
    }

    return (
        <ReviewWrapper>
            <div className="top">
                <div className="top-left">
                    <img src={author['avatar'] ? author['avatar'] : defaultAvatar} alt ='pp'/>
                    <div className="name-reviews">
                        <span className="name">{author['first_name']} {author['last_name']}</span>
                        <span className="smaller-font">{author['number_of_reviews']} reviews in total</span>
                    </div>
                </div>

                <div className="top-right">
                    <StaticRating rating={rating}/>
                    <span className="date-created">{created}</span>
                </div>
            </div>
            <div className="center">
                <p>{content}</p>
            </div>

            <div className="bottom">
                {!toggle ?
                    <>
                    <div className="like-comment">
                        <div>
                            <button onClick={()=>toggleLikeUnlike(id)}>
                                {number_of_likes} { number_of_likes === 1 ? 'like' : 'likes'}</button>
                        </div>
                        <div>
                            <button>{number_of_comments} {number_of_comments === 1 ? 'comment' : 'comments'}</button>
                        </div>
                    </div>
                    <div>
                        <span className="view-comments" onClick={()=>setToggle(!toggle)}>View all comments</span>
                    </div>
                    </>
                : <Comments id={id} hide={setToggle}/>}
            </div>
        </ReviewWrapper>
    )
}

export default Reviews