import React, {useEffect} from "react";
import {Lower, Upper} from "./styled";
import StaticRating from "../../Rating/static";
import clock from '../../../assets/clock.svg'
import money from '../../../assets/money.svg'
import Reviews from "./reviews";
import {useDispatch, useSelector} from "react-redux";
import {fetchReviews} from "../../../store/actions/restaurant_reviews";


const MainRestaurantView = props => {
    const { id, avatar, name, hours, price_level, number_of_reviews, average_rating, category } = props.restaurant

    const dispatch = useDispatch()
    const reviews = useSelector(state => state.defaultReducer.reviews)

    useEffect(() => {
        dispatch(fetchReviews(id))
    }, [dispatch])

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

    return (
        <>
            <Upper className='upper' avatar={avatar}>
                <div className="info">
                    <span className="restaurant-title">{name}</span>
                    <span>{category.category}</span>
                    <div className="ratings">
                        <StaticRating average={average_rating}/>
                        <span>{number_of_reviews} {number_of_reviews === 1 ? 'review' : 'reviews'}</span>
                    </div>
                </div>
            </Upper>

            <Lower>
                <div className="left">
                    <div className="filter">
                        <input type="text" placeholder="Filter list..."/>
                        <button>Filter</button>
                    </div>
                    <div className="reviews">
                        {reviews.map(review => <Reviews review={review}/>)}
                    </div>
                </div>

                <div className="right">
                    <div className="hours">
                        <img src={clock} alt="clock" />
                        <span>{hours}</span>
                    </div>
                    <div className="price">
                        <img src={money} alt="price" />
                        <span>{convertPriceLevel(price_level)}</span>
                    </div>
                    <div className="write-reivew">
                        <button>Write a review</button>
                        <button>Edit Data</button>
                    </div>
                </div>
            </Lower>
        </>

    )
}

export default MainRestaurantView