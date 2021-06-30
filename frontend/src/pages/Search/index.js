import React from 'react';
import { PageWrapper } from '../Login/styled';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const SearchPage = () => {
    return (
        <PageWrapper>
            <Header />
            
            <main>
            <div className='title_decorator'>
                <h1>Search</h1>
            </div>
            <p>Endpoints for filter maybe need to be added</p>
            </main>
            
            <Footer />
        </PageWrapper>
    )
}

export default SearchPage;
