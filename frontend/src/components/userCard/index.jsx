import React from "react";
import styled from 'styled-components';
import {Card} from "../../templates/Card";
import defaultAvatar from '../../assets/avatar.svg'


const Wrapper = styled(Card)`
  min-height: 250px;
  .name{
    font-weight: 600;
    color: darkorange;
  }
  
  .smaller-font{
    font-size: 13px;
  }

  .review-top {
    display: flex;
    justify-content: flex-start;
    border-bottom: 1px solid lightgray;

    .name-reviews {
      display: flex;
      flex-direction: column;
      padding: 10px 0 0 10px;
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


const UserCard = props => {
    //destructuring props
    const { id, avatar, first_name, last_name, about, number_of_reviews } = props.user

    return(
        <Wrapper>
            <div className="review-top">
                <img src={avatar ? avatar : defaultAvatar} alt ='pp'/>
                <div className="name-reviews">
                    <span className="name">{first_name} {last_name}</span>
                    <span className="smaller-font">{number_of_reviews} reviews in total</span>
                </div>
            </div>
            <div className="address smaller-font">

            </div>
            <div className="content">
                <span className="review-content">{about}</span>
            </div>
        </Wrapper>
    );
}

export default UserCard;
