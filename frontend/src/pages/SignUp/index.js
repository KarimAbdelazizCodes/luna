import React from 'react';
import Input from '../../components/Input';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Axios from '../../api';

import { PageWrapper } from '../Login/styled';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


const SignUpPage = (props) => {

    const registrationForm = useSelector((store) => store.defaultReducer.registrationForm);
    const [message, setMessage] = useState('');

    const onHandleSubmit = async (e) => {
        e.preventDefault()
        try {
            const url = "registration/";
            const body = {
            email: registrationForm.email,
            };

            const testAt = new RegExp("@");
            if (testAt.test(registrationForm.email)) {
                await Axios.post(url, body);
                props.history.push('/signup/validation');
                
            } else {
                setMessage('no valid email address provided');
                setTimeout(() => {setMessage('')}, 3000);
            }
        } catch {
            setMessage('no valid email address provided');
            setTimeout(() => {setMessage('')}, 3000);
            
        }
    }
    return (
        <PageWrapper>
            <Header />

            <main>
                <div className='registration'>  
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
                    <p className='message'>{message}</p>
                </div>
            </main>
            
            <Footer />
        </PageWrapper>
    )
}

export default SignUpPage;
