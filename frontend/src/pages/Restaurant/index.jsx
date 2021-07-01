import React, {useEffect} from 'react';
import { PageWrapper } from '../Login/styled';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {useDispatch, useSelector} from "react-redux";
import {fetchRestaurant} from "../../store/actions/get_restaurant";
import MainRestaurantView from "../../components/Restaurant/main_view";

const RestaurantPage = props => {
    const dispatch = useDispatch()
    const restaurant = useSelector(state => state.defaultReducer.restaurant)

    useEffect(() => {
        let restaurant_id = props.location.search.split('=')[1]
        dispatch(fetchRestaurant(restaurant_id))
    }, [dispatch])
    return (

        <PageWrapper>
            <Header />

            <main>
                <MainRestaurantView restaurant={restaurant}/>
            </main>

            <Footer />
        </PageWrapper>
    )
}

export default RestaurantPage;