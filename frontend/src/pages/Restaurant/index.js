import React from 'react';
import { PageWrapper } from '../Login/styled';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const RestaurantPage = () => {
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