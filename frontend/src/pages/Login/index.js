import React from 'react';
import Input from '../../components/Input';
import { useSelector } from 'react-redux';
import Axios from '../../api';

import { PageWrapper } from './styled';

function LoginPage(props) {

    const loginForm = useSelector((store) => store.defaultReducer.loginForm)

    const onHandleSubmit = async (e) => {
        e.preventDefault()
        const url = "auth/token/";
        const body = {
          email: loginForm.email,
          password: loginForm.password,
        };

        const response = await Axios.post(url, body);
        if (response.status === 200) {
            console.log(props.history.push('/'));
        }
    }
    
    return (
        <PageWrapper>
            <header>

            </header>

            <main>
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
            </main>
            
            <footer>

            </footer>
        </PageWrapper>
    )
}

export default LoginPage
