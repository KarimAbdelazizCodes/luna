import React from "react";
import styled from 'styled-components';
import {Card} from "../../templates/Card";
import StaticRating from "../Rating/static";


const Wrapper = styled(Card)`
    .name{
      font-weight: 600;    
    }
  
    .smaller-font{
      font-size: 13px;
    }
  
    .address {
      display: flex;
      flex-direction: column;
      margin: 5px;
    }
    
    .ratings, .restaurant-info, .avatar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 5px;
    }
  
    img {
      width: 100%;
    }
`


const RestaurantCard = props => {
    //destructuring props
    const { name, street, city, zip, number_of_reviews, avatar, average_rating, price_level } = props.restaurant

    const convertPriceLevel = price => {
        switch(price){
            case '1':
                return '$'
            case '2':
                return '$$'
            case '3':
                return '$$$'
        }
    }

    return(
        <Wrapper>
            <div className="restaurant-info">
                <span className="name">{name}</span>
                <span className="smaller-font">Price level: {convertPriceLevel(price_level)}</span>
            </div>
            <div className="address smaller-font">
                <span>{street}</span>
                <span>{city}</span>
                <span>{zip}</span>
            </div>
            <div className="ratings">
                <StaticRating average={average_rating}/>
                <span className="smaller-font">{number_of_reviews} {number_of_reviews === 1 ? 'review' : 'reviews'}</span>
            </div>
            <div className="avatar">
                <img src={avatar} alt="avatar" />
            </div>
        </Wrapper>
    );
}

export default RestaurantCard;
