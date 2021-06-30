import React, {useEffect} from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {Featured, Search} from "./styled";
import Input from '../../components/Input';
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopRestaurants } from "../../store/actions/top_restaurants";




const HomePage = () => {
    const dispatch = useDispatch()
    const topRestaurants = useSelector(state => state.defaultReducer.topRestaurants)

    useEffect(() => {
        dispatch(fetchTopRestaurants)
    })

    return (
    <>
        <Header />
        <Search>
            <div className="search-container">
                <Input placeholder='Search...' name='search'/>
                <button>Search</button>
            </div>
        </Search>
        <Featured>
            <h1>Best rated restaurants</h1>
            <div className="restaurants">
                { topRestaurants.map((restaurant, index) =>
                    <RestaurantCard key={index} restaurant={restaurant}/> )}
            </div>
        </Featured>


    <Footer />

    </>
    )
}

export default HomePage;