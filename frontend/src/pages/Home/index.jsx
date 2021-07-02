import React, {useEffect} from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {Results, Search} from "./styled";
import RestaurantCard from "../../components/Restaurant/small_card/RestaurantCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopRestaurants } from "../../store/actions/top_restaurants";
import { useState } from "react";
import {PageWrapper} from "../Login/styled";


const HomePage = props => {
    const dispatch = useDispatch()
    const topRestaurants = useSelector(state => state.defaultReducer.topRestaurants)
    const [searchText, setSearchtext] = useState('')

    useEffect(() => {
        dispatch(fetchTopRestaurants)
    }, [dispatch])

    const handleSubmit = (e) =>{
        e.preventDefault()
        props.history.push(`/search?keyword=${searchText}`)
    }

    return (
    <>
        <PageWrapper>
            <Header />
            <main>
                <Search>
                    <form className="search-container" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Search..."
                               onChange={(e) => setSearchtext(e.target.value)} value={searchText}/>
                        <button type="submit">Search</button>
                    </form>
                </Search>
                <Results>
                    <h1>Best rated restaurants</h1>
                    <div className="results">
                        { topRestaurants.map((restaurant, index) =>
                            <RestaurantCard key={index} restaurant={restaurant}/> )}
                    </div>
                </Results>
            </main>
            <Footer />
        </PageWrapper>
    </>
    )
}

export default HomePage;