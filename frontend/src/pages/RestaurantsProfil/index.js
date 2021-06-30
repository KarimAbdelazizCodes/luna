import React from 'react';
import { PageWrapper } from '../Login/styled';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const RestaurantsProfilPage = () => {
    return (
        <PageWrapper>
            <Header />

            <main>
            <div className='title_decorator'>
                <h1>User Restaurants</h1>
            </div>
            </main>

            <Footer />
        </PageWrapper>
    )
}

export default RestaurantsProfilPage;