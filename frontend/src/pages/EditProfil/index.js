import React, {useEffect, useState} from 'react';
import { PageWrapper } from '../Login/styled';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Axios from '../../api';
import {useDispatch, useSelector} from "react-redux";
import {fetchCategories} from "../../store/actions/get_categories";
import {Wrapper} from "./styled";
import Edit from '../../assets/edit.svg'
import { useHistory, Link } from "react-router-dom";


const NewRestaurantPage = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [UserImage, setUserImage] = useState('');
    const history = useHistory();

    // TODO: fill form with initial state to not overwrite data ( axios or redux or props)


    const submitForm = async (data) => {
        const url = 'me/';
        const formData = new FormData();
        for (const [key, value] of Object.entries(data)) {
            if (value !== '') formData.append(key, value)
        }
        if (UserImage) formData.append("avatar", UserImage);
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        };
        try {
            const response = await Axios.patch(url, formData, config);
            if (response.status === 200) {
                history.push('/user/');
            } else {
                console.log(response.status)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const realFileInput = React.useRef(null);
    const replaceFileInput = (e) => {
        e.preventDefault()
        realFileInput.current.click()
    }

    const handlePostPic = (e) => {
        e.preventDefault()
        setUserImage(e.target.files[0]);
    }

    return (
        <Wrapper>
            <Header/>
            <h1>edit userprofile</h1>
            <img onClick={replaceFileInput} src={Edit}/>
            <main>
                <div className="container">
                    <form onSubmit={handleSubmit(submitForm)} id='newRestaurant'>
                        <div>
                            <h5>Username</h5>
                            <input type='text' {...register('username', { required: 'This field is required' })} />
                            {errors.username && <p>{errors.username.message}</p>}
                        </div>
                        <div>
                            <h5>First name</h5>
                            <input type='text' {...register('first_name')} />
                            {errors.first_name && <p>{errors.first_name.message}</p>}
                        </div>
                        <div>
                            <h5>Last name</h5>
                            <input type='text' {...register('last_name')} />
                            {errors.last_name && <p>{errors.last_name.message}</p>}
                        </div>
                        <div>
                            <h5>E-Mail</h5>
                            <input type='email' {...register('email')} />
                            {errors.email && <p>{errors.email.message}</p>}
                        </div>
                        <div>
                            <h5>Location</h5>
                            <input type='text' {...register('location')} />
                            {errors.location && <p>{errors.location.message}</p>}
                        </div>
                        <div>
                            <h5>Phone</h5>
                            <input type='number' {...register('phone_number')} />
                            {errors.phone_number && <p>{errors.phone_number.message}</p>}
                        </div>
                        <div>
                            <h5>Things I love</h5>
                            <input type='text' {...register('hours')} />
                            {errors.hobbies && <p>{errors.hobbies.message}</p>}
                        </div>
                        <div>
                            <h5>Description</h5>
                            <input type='text' {...register('about')} />
                            {errors.about && <p>{errors.about.message}</p>}
                        </div>
                        <div>
                            <input type="file" style={{display: "none"}} ref={realFileInput} onChange={e => handlePostPic(e)} accept="image/png, image/jpeg" multiple/>
                        </div>
                        <button type='submit' form='newRestaurant'>save</button>
                    </form>
                </div>
            </main>
            <Footer/>
        </Wrapper>
    )
}

export default NewRestaurantPage;