import React from 'react';
import { PageWrapper } from '../Login/styled';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const SuccessPage = (props) => {
    //console.log(props)

    return (
        <PageWrapper>
            <Header />

            <main>
                <div className='registration'>
                    <div className='title_decorator'>
                        <h1>registration</h1>
                    </div>
                    <div>
                        <p style={{whiteSpace:'nowrap'}}>
                            Thanks for your registration. <br></br>
                            Our hard working monkeys are preparing a digital  <br></br>
                            message called E-Mail that will be sent to you soon.  <br></br>
                            Since monkeys aren't good in writing the message <br></br>
                            could end up in you junk folder. Our apologies <br></br>
                            for any inconvienience.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </PageWrapper>
    )
}

export default SuccessPage;
