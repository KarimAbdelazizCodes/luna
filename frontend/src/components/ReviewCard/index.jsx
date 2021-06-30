import React from "react";
import styled from 'styled-components';
import {Card} from "../../templates/Card";
import Axios from "../../api";


const Wrapper = styled(Card)`
  
  .name{
    font-weight: 600;
    color: darkorange;
  }
  
  .smaller-font{
    font-size: 13px;
  }

  .review-top {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid lightgray;

    .name-reviews {
      display: flex;
      flex-direction: column;
      padding-left: 10px;
    }

    img {
      width: 50px;
      height: 50px;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    margin: 10px;
    
    .review-content {
      padding: 5px 0;
      font-size: 13px;
    }
  }
  
  .like-comment {
    background: gray;
    height: 35px;
    border-radius: 50px;
    display: flex;
    justify-content: space-around;
    
    div {
      border-right: 1px solid white;
      width: 100%;
      border-radius: 0;
    }
    
    button {
      text-transform: none;
      height: 100%;
      width: 100%;
      background: none;
      :active {
        transform: translateY(0.5px);
      }
      :hover {
        cursor: pointer;
      }
    }
  }
  
  .latest-comments {
    display: flex;
    flex-direction: column;
  }
`


const ReviewCard = props => {
    //destructuring props
    const { id, author, restaurant, content, number_of_likes, number_of_comments, latest_comments } = props.review

    const toggleLikeUnlike = async (id) =>{
        const url = `reviews/like/${id}/`
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        };
        const response = await Axios.patch(url, null, config)
    }



    return(
        <Wrapper>
            <div className="review-top">
                <img src={author.avatar} alt ='pp'/>
                <div className="name-reviews">
                    <span className="name">{author['first_name']} {author['last_name']}</span>
                    <span className="smaller-font">{author['number_of_reviews']} reviews in total</span>
                </div>
            </div>
            <div className="address smaller-font">

            </div>
            <div className="content">
                <span className="name">{restaurant.name}</span>
                <span className="review-content">{content}</span>
            </div>
            <div className="like-comment">
                <div>
                    <button onClick={() => toggleLikeUnlike(id)}>
                        {number_of_likes} { number_of_likes === 1 ? 'like' : 'likes'}</button>
                </div>
                <div>
                    <button>comment {number_of_comments}</button>
                </div>
            </div>
            <div className="latest-comments">
                <span>Latest comments</span>
                {latest_comments ? latest_comments.map(comment =>
                    <>
                        <span>{comment.author_id}</span>
                        <span>{comment.text}</span>
                    </>
                ) : null}
            </div>
        </Wrapper>
    );
}

export default ReviewCard;
