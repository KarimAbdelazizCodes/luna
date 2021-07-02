import React, {useEffect} from 'react';
import { PageWrapper } from '../Login/styled';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {useDispatch, useSelector} from "react-redux";
import {fetchRestaurant} from "../../store/actions/get_restaurant";
import MainRestaurantView from "../../components/Restaurant/main_view";
import styled from "styled-components";
import {fetchReviews} from "../../store/actions/restaurant_reviews";
import { useHistory } from "react-router";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`

const RestaurantPage = props => {
    const dispatch = useDispatch()
    const restaurant = useSelector(state => state.defaultReducer.restaurant)

    useEffect(() => {
        let restaurant_id = props.location.search.split('=')[1]
        dispatch(fetchRestaurant(restaurant_id))
        dispatch(fetchReviews(restaurant_id))
    }, [dispatch])
    return (

        <PageWrapper>
            <Header />

            <main>
                <Container>
                    {Object.keys(restaurant).length ? <MainRestaurantView restaurant={restaurant}/> : 'Loading...'}
                </Container>
            </main>

            <Footer />
        </PageWrapper>
    )
}

export default RestaurantPage;