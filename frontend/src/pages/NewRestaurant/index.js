import React from 'react';
import { PageWrapper } from '../Login/styled';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Axios from '../../api';


const NewRestaurantWrapper = styled(PageWrapper)`
  
    main {
      width: 90%;
    }
  
  
`

const InputWrapper = styled.form`
    
  
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

    const { register, handleSubmit, formState: { errors } } = useForm();

    const submitForm = async (data) => {
        const url = 'restaurants/new/';
        console.log(data)
        try {
            const response = await Axios.post(url, data);
            if (response.status === 200) {
                props.history.push('/restaurants/')
            } else {
                console.log('error')
            }
        } catch (error) {
            console.log('error:', error)
        }
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
                            <input placeholder='Category' type='text' {...register('category', { required: 'This field is required' })} />
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
                            <input placeholder='Price level' type='text' {...register('price_level', { required: 'This field is required' })} />
                            {errors.price && <p>{errors.price.message}</p>}
                        </InputWrapper>
                        <InputWrapper>
                            <div>
                                <button type='submit'>CHOOSE A FILE...</button>
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