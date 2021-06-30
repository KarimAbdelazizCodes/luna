import React from 'react';
import Input from '../../components/Input';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Axios from '../../api';
import convertSnakeCase from '../../helpers/converSnakeCase';

import styled from 'styled-components';
import { PageWrapper } from '../Login/styled';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const ValidationPageWrapper = styled(PageWrapper)`
    .registration {
            width: 62%;
        form {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;

            div {
                width: 44%;
                min-width: 200px;
                margin: 1% 2%;
            }
            button {
                margin-left: 50px;
                margin-right: 50px;
            }
        }
    }

`

const ValidationPage = (props) => {

    const registrationForm = useSelector((store) => store.defaultReducer.registrationForm);
    const inputs = ['code', 'username', 'first_name', 'last_name', 'password', 'password_repeat'];
    const [message, setMessage] = useState('');

    const onHandleSubmit = async (e) => {
        e.preventDefault()
        try {
            const url = "/auth/password-reset/validate/";
            const body = {
            code: registrationForm.code,
            username: registrationForm.username,
            email: registrationForm.email,
            password: registrationForm.password,
            password_repeat: registrationForm.password_repeat,
            };
            
            await Axios.put(url, body);
            props.history.push('signup/success/');
       
        } catch {
            setMessage('code not valid or password not consistent');
            setTimeout(() => {setMessage('')}, 3000);
        }
    }

    const defineInputType = (word) => {
        switch (word) {
            case 'password' || 'password_repeat':
                return 'password';
            case 'email':
                return 'email';
            default:
                return 'text';
        }
    }

    return (
        <ValidationPageWrapper>
            <Header />

            <main>
                <div className='registration'>
                    <div className='title_decorator'>
                    <h1>verification</h1>
                    </div>
                    <form>
                        {
                            inputs.map((input,index) => {
                                return(
                                    <Input 
                                        placeholder={convertSnakeCase(input)}
                                        name={input}
                                        formId='registrationForm'
                                        type={defineInputType(input)}
                                        key={index}
                                    /> 
                                )
                            })
                        }
                        <button onClick={onHandleSubmit}>finish registration</button>
                    </form>
                    <p className='message'>{message}</p>
                </div>
            </main>

            <Footer />
        </ValidationPageWrapper>
    )
}

export default ValidationPage;
