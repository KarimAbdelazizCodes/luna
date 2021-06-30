import React from 'react';
import Input from '../../components/Input';
import { useSelector } from 'react-redux';
import Axios from '../../api';

import { PageWrapper } from '../Login/styled';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


const SignUpPage = (props) => {

    const registrationForm = useSelector((store) => store.defaultReducer.registrationForm)

    const onHandleSubmit = async (e) => {
        e.preventDefault()
        const url = "registration/";
        const body = {
          email: registrationForm.email,
        };

        const response = await Axios.post(url, body);
        if (response.status === 200) {
            console.log(props.history.push('signup/validation'));
        }
    }
    return (
        <PageWrapper>
            <Header />

            <main>
            <div className='title_decorator'>
                <h1>registration</h1>
            </div>
            <form>
                <Input 
                placeholder='Email'
                name='email'
                formId='registrationForm'/>
                <button onClick={onHandleSubmit}>register</button>  
            </form>
            </main>
            
            <Footer />
        </PageWrapper>
    )
}

export default SignUpPage;
