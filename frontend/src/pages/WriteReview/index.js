import React from 'react';
import { PageWrapper } from '../Login/styled';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const WriteReviewPage = () => {
    return (
        <PageWrapper>
            <Header />
            <main>
            <div className='title_decorator'>
                <h1>Write Review</h1>
            </div>
            </main>
            <Footer />
        </PageWrapper>
    )
}

export default WriteReviewPage;