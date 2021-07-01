import React from "react";
import { Upper } from "./styled";


const MainRestaurantView = props => {
    const { avatar, name, hours, price_level, number_of_reviews, average_rating } = props.restaurant
    return (
        <Upper className='upper' avatar={avatar}>
            <div className="info">
                <span className="restaurant-title">{name}</span>
            </div>
        </Upper>
    )
}

export default MainRestaurantView