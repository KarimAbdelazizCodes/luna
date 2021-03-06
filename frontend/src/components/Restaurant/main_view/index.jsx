import React, {useEffect, useState} from "react";
import {Lower, Upper} from "./styled";
import StaticRating from "../../Rating/static";
import clock from '../../../assets/clock.svg'
import money from '../../../assets/money.svg'
import Reviews from "./reviews";
import {useDispatch, useSelector} from "react-redux";
import {fetchReviews} from "../../../store/actions/restaurant_reviews";
import pin from '../../../assets/pin.svg'
import phone from '../../../assets/phone.svg'
import web from '../../../assets/web.svg'
import { withRouter} from "react-router";
import { fetchUserData } from '../../../store/actions/get_userdata';
import Location from "../../google_map/map";
import Axios from "../../../api";

const MainRestaurantView = props => {
    const { id, avatar, name, hours, price_level, number_of_reviews, average_rating, category, street,
        zip, phone_number, email } = props.restaurant

    const reviews = useSelector(state => state.defaultReducer.reviews)

    const [latitude, setLat] = useState(0)
    const [longtitude, setLon] = useState(0)

    useEffect(async()=> {
        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${street} ${zip}`
        const response = await Axios.get(url)
        setLat(parseFloat(response.data[0].lat))
        setLon(parseFloat(response.data[0].lon))
    },[latitude])

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

    const writeReview = () => {
        const token = localStorage.getItem('token')
        if (token) {
            props.history.push(`/restaurant/write_review/?id=${id}`)
        } else {
            props.history.push('/signin')
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
                <div className="location">
                    <Location lat={latitude} lon={longtitude}/>
                    <div className="contact">
                        <img src={pin} alt='pin' />
                        <span>{street}</span>
                    </div>
                    <div className="contact">
                        <img src={phone} alt='pin' />
                        <span>{phone_number}</span>
                    </div>
                    <div className="contact">
                        <img src={web} alt='pin' />
                        <span>{email}</span>
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
                        <button onClick={writeReview}>Write a review</button>
                        <button>Edit Data</button>
                    </div>
                </div>
            </Lower>
        </>

    )
}

export default withRouter(MainRestaurantView)