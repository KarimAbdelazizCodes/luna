import React from 'react';
import Input from '../../components/Input';
import { useSelector } from 'react-redux';
import Axios from '../../api';
import convertSnakeCase from '../../helpers/converSnakeCase';

import styled from 'styled-components';
import { PageWrapper } from '../Login/styled';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const ValidationPageWrapper = styled(PageWrapper)`
    main {
        width: 50%;
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
        }
    }

`

const ValidationPage = (props) => {

    const registrationForm = useSelector((store) => store.defaultReducer.registrationForm);
    const inputs = ['code', 'username', 'first_name', 'last_name', 'password', 'password_repeat'];

    const onHandleSubmit = async (e) => {
        e.preventDefault()
        const url = "/auth/password-reset/validate/";
        const body = {
          code: registrationForm.code,
          username: registrationForm.username,
          email: registrationForm.email,
          password: registrationForm.password,
          password_repeat: registrationForm.password_repeat,
        };

        const response = await Axios.put(url, body);
        if (response.status === 200) {
            console.log(props.history.push('signup/success/'));
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
            </main>

            <Footer />
        </ValidationPageWrapper>
    )
}

export default ValidationPage;
