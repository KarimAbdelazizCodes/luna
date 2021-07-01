import React, {useEffect} from 'react';
import { PageWrapper } from '../Login/styled';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {useDispatch} from "react-redux";
import {fetchRestaurant} from "../../store/actions/get_restaurant";

const RestaurantPage = props => {
    const dispatch = useDispatch()
    let restaurant_id = props.location.search.split('=')[1]

    useEffect(() => {
        dispatch(fetchRestaurant(restaurant_id))
    }, [dispatch])
    return (

        <PageWrapper>
            <Header />
            
            <main>
            <div className='title_decorator'>
                <h1>restaurant</h1>
            </div>
            <p>every restaurant will have a unique endpoint...</p>
            </main>

            <Footer />
        </PageWrapper>
    )
}

export default RestaurantPage;