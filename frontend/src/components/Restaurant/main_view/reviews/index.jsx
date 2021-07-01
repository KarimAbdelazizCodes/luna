import {ReviewWrapper} from "./styled";
import defaultAvatar from "../../../../assets/avatar.svg";
import React, {useEffect} from "react";
import StaticRating from "../../../Rating/static";

const Reviews = props => {

    const { id, author, restaurant, number_of_likes, number_of_comments, content, created, rating } = props.review

    return (
        <ReviewWrapper>
            <div className="top">
                <div className="top-right">
                    <img src={author['avatar'] ? author['avatar'] : defaultAvatar} alt ='pp'/>
                    <div className="name-reviews">
                        <span className="name">{author['first_name']} {author['last_name']}</span>
                        <span className="smaller-font">{author['number_of_reviews']} reviews in total</span>
                    </div>
                </div>

                <div className="top-left">
                    <StaticRating rating={rating}/>
                    <span>Date created</span>
                </div>
            </div>
        </ReviewWrapper>
    )
}

export default Reviews