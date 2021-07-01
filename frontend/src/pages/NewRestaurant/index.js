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

const NewRestaurantPage = (props) => {
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const categories = useSelector(state => state.defaultReducer.categories)
    const [RestaurantImage, setRestaurantImage] = useState('');

    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch])

    const submitForm = async (data) => {
        const url = 'restaurants/new/';
        const formData = new FormData();
        for (const [key, value] of Object.entries(data)) {
            formData.append(key, value)
        }
        formData.append("avatar", RestaurantImage);
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        };
        try {
            const response = await Axios.post(url, formData, config);
            if (response.status === 201) {
                props.history.push('/user/restaurants/')
            } else {
                console.log(response.status)
            }
        } catch (error) {
            alert('Category and Price level must be selected')
        }
    }

    const realFileInput = React.useRef(null);
    const replaceFileInput = (e) => {
        e.preventDefault()
        realFileInput.current.click()
    }

    const handlePostPic = (e) => {
        e.preventDefault()
        setRestaurantImage(e.target.files[0]);
    }

    return (
        <Wrapper>
            <Header/>
            <h1>create new restaurant</h1>
            <main>
                <div className="container">
                    <form onSubmit={handleSubmit(submitForm)} id='newRestaurant'>
                        <div>
                            <h5>Name</h5>
                            <input type='text' {...register('name', { required: 'This field is required' })} />
                            {errors.name && <p>{errors.name.message}</p>}
                        </div>
                        <div>
                            <h5>Category</h5>
                            <select type='text' {...register('category', { required: 'This field is required' })} >
                                <option disabled selected hidden>Select a value...</option>
                                {categories.map(category => <option key={category.id} value={category.id}>{category.category}</option>)}
                            </select>
                            {errors.category && <p>{errors.category.message}</p>}
                        </div>
                        <div>
                            <h5>Country</h5>
                            <input type='text' {...register('country', { required: 'This field is required' })} />
                            {errors.country && <p>{errors.country.message}</p>}
                        </div>
                        <div>
                            <h5>Street</h5>
                            <input type='text' {...register('street', { required: 'This field is required' })} />
                            {errors.street && <p>{errors.street.message}</p>}
                        </div>
                        <div>
                            <h5>City</h5>
                            <input type='text' {...register('city', { required: 'This field is required' })} />
                            {errors.city && <p>{errors.city.message}</p>}
                        </div>
                        <div>
                            <h5>Zip</h5>
                            <input type='number' {...register('zip', { required: 'This field is required' })} />
                            {errors.zip && <p>{errors.zip.message}</p>}
                        </div>
                        <div>
                            <h5>Website</h5>
                            <input type='text' {...register('website', { required: 'This field is required' })} />
                            {errors.website && <p>{errors.website.message}</p>}
                        </div>
                        <div>
                            <h5>Phone</h5>
                            <input type='number' {...register('phone_number', { required: 'This field is required' })} />
                            {errors.phone_number && <p>{errors.phone_number.message}</p>}
                        </div>
                        <div>
                            <h5>Email</h5>
                            <input type='email' {...register('email', { required: 'This field is required' })} />
                            {errors.email && <p>{errors.email.message}</p>}
                        </div>
                        <div>
                            <h5>Opening hours</h5>
                            <input type='text' {...register('hours', { required: 'This field is required' })} />
                            {errors.hours && <p>{errors.hours.message}</p>}
                        </div>
                        <div>
                            <h5>Price level</h5>
                            <select type='number' {...register('price_level', { required: 'This field is required' })}>
                                <option disabled selected hidden>Select a value...</option>
                                <option value={1}>$</option>
                                <option value={2}>$$</option>
                            <option value={3}>$$$</option>
                        </select>
                        {errors.price && <p>{errors.price.message}</p>}
                        </div>
                        <div>
                            <input type="file" style={{display: "none"}} ref={realFileInput} onChange={e => handlePostPic(e)} accept="image/png, image/jpeg" multiple/>
                            <h5>Image</h5>
                            <span>{RestaurantImage.name}</span>
                            <button onClick={e => replaceFileInput(e)}>CHOOSE A IMAGE...</button>
                        </div>
                    </form>
                </div>
            </main>
            <button type='submit' form='newRestaurant'>submit</button>
            <Footer/>
        </Wrapper>
    )
}

export default NewRestaurantPage;