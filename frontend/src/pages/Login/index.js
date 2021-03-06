import React from 'react';
import Input from '../../components/Input';
import {useDispatch, useSelector} from 'react-redux';
import { useState } from 'react';
import Axios from '../../api';
import { PageWrapper } from './styled';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function LoginPage(props) {

    const loginForm = useSelector((store) => store.defaultReducer.loginForm);
    const [message, setMessage] = useState('');
    const dispatch = useDispatch()

    const onHandleSubmit = async (e) => {
        e.preventDefault()

        const url = "auth/token/";
        const body = {
            email: loginForm.email,
            password: loginForm.password,
        };
        try {
            const response = await Axios.post(url, body);
            const action = {
                type: 'ADD_TOKEN',
                payload: response.data.access
            }
            dispatch(action)
            localStorage.setItem('token', response.data.access)
            props.history.push('/');    
        } catch {
            setMessage('no valid credentials provided');
            setTimeout(() => {setMessage('')}, 3000);
        }
    }
    
    return (
        <PageWrapper>
            <Header />
            <main>
                <div className='registration'>
                    <div className='title_decorator'>
                        <h1>Login</h1>
                    </div>
                    <form>
                        <Input
                            placeholder='Email'
                            name='email'
                            formId='loginForm'/>
                        <Input
                            placeholder='Password'
                            name='password'
                            formId='loginForm'/>
                        <button onClick={onHandleSubmit}>login</button>
                    </form>
                    <p className='message'>{message}</p>
                </div>
            </main>
            <Footer />
        </PageWrapper>
    )
}

export default LoginPage
