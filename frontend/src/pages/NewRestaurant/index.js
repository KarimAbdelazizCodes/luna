import React, {useEffect, useState} from 'react';
import { PageWrapper } from '../Login/styled';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Axios from '../../api';
import {useDispatch, useSelector} from "react-redux";
import {fetchCategories} from "../../store/actions/get_categories";


const NewRestaurantWrapper = styled(PageWrapper)`
  
    main {
      width: 90%;
    }
  
  
`

const InputWrapper = styled.div`
    
  
    input {
      
    border: 1px solid gray;
    width: 200px;
    height: 30px;
        ::placeholder {
          color: black;
        }
    }
  
    div {
    padding: 0;
    width: 100%;
    height: 100%;
    
        button {
          margin: 0;
          padding: 0;
        }
    }
`

const Row = styled.div`
      display: flex;
      justify-content: space-between;
`



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

        console.log(RestaurantImage)
        formData.append("avatar", RestaurantImage);



        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        };
        try {
            const response = await Axios.post(url, formData, config);
            if (response.status === 201) {
                //props.history.push('/restaurant')
                alert('success')
            } else {
                console.log(response.status)
            }
        } catch (error) {
            console.log('error:', error)
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
        <NewRestaurantWrapper>
            <Header/>
            <div>
                <div className='title_decorator'>
                    <h1>create new restaurant</h1>
                </div>
                <form onSubmit={handleSubmit(submitForm)} id='newRestaurant'>
                    <h5>Basic</h5>
                    <Row>
                        <InputWrapper>
                            <input placeholder='Name' type='text' {...register('name', { required: 'This field is required' })} />
                            {errors.name && <p>{errors.name.message}</p>}
                        </InputWrapper>
                        <InputWrapper>
                            <select placeholder='Category' type='text' {...register('category', { required: 'This field is required' })} >
                                <option>Select a category</option>
                                {categories.map(category => <option key={category.id} value={category.id}>{category.category}</option>)}
                            </select>
                            {errors.category && <p>{errors.category.message}</p>}
                        </InputWrapper>
                        <InputWrapper>
                            <input placeholder='Country' type='text' {...register('country', { required: 'This field is required' })} />
                            {errors.country && <p>{errors.country.message}</p>}
                        </InputWrapper>
                    </Row>
                    <h5>Address</h5>
                    <Row>
                        <InputWrapper>
                            <input placeholder='Street' type='text' {...register('street', { required: 'This field is required' })} />
                            {errors.street && <p>{errors.street.message}</p>}
                        </InputWrapper>
                        <InputWrapper>
                            <input placeholder='City' type='text' {...register('city', { required: 'This field is required' })} />
                            {errors.city && <p>{errors.city.message}</p>}
                        </InputWrapper>
                        <InputWrapper>
                            <input placeholder='Zip' type='number' {...register('zip', { required: 'This field is required' })} />
                            {errors.zip && <p>{errors.zip.message}</p>}
                        </InputWrapper>
                    </Row>
                    <h5>Contact</h5>
                    <Row>
                        <InputWrapper>
                            <input placeholder='Website' type='text' {...register('website', { required: 'This field is required' })} />
                            {errors.website && <p>{errors.website.message}</p>}
                        </InputWrapper>
                        <InputWrapper>
                            <input placeholder='Phone' type='number' {...register('phone_number', { required: 'This field is required' })} />
                            {errors.phone && <p>{errors.phone.message}</p>}
                        </InputWrapper>
                        <InputWrapper>
                            <input placeholder='Email' type='email' {...register('email', { required: 'This field is required' })} />
                            {errors.email && <p>{errors.email.message}</p>}
                        </InputWrapper>
                    </Row>
                    <h5>Details</h5>
                    <Row>
                        <InputWrapper>
                            <input placeholder='Opening hours' type='text' {...register('hours', { required: 'This field is required' })} />
                            {errors.hours && <p>{errors.hours.message}</p>}
                        </InputWrapper>
                        <InputWrapper>
                            <select placeholder='Price level' type='number' {...register('price_level', { required: 'This field is required' })}>
                                <option value={1}>$</option>
                                <option value={2}>$$</option>
                                <option value={3}>$$$</option>
                            </select>
                            {errors.price && <p>{errors.price.message}</p>}
                        </InputWrapper>
                        <InputWrapper>
                            <div>
                                <input type="file" style={{display: "none"}} ref={realFileInput} onChange={e => handlePostPic(e)} accept="image/png, image/jpeg" multiple/>
                                <p>{RestaurantImage.name}</p>
                                <button onClick={e => replaceFileInput(e)}>CHOOSE A FILE...</button>
                            </div>
                        </InputWrapper>
                    </Row>
                </form>
                <button type='submit' form='newRestaurant'>submit</button>
            </div>
            <Footer/>
        </NewRestaurantWrapper>
    )
}

export default NewRestaurantPage;