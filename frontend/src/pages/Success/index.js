import React from 'react';
import { PageWrapper } from '../Login/styled';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const SuccessPage = () => {

    return (
        <PageWrapper>
            <Header />

            <main>
            <div className='title_decorator'>
                <h1>registration</h1>
            </div>
            <div>
                <p>
                    Thanks for your registration. <br></br>
                    Our hard working monkeys are preparing a digital message called E-Mail that will be sent to you soon. <br></br>
                    Since monkeys aren't good in writing the message could end up in you junk folder.  <br></br>
                    Our apologies for any inconvienience.
                </p>
            </div>
            </main>

            <Footer />
        </PageWrapper>
    )
}

export default SuccessPage;
