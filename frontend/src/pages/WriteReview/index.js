import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PageWrapper } from '../Login/styled';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Rating from '../../components/Rating';
import StaticRating from '../../components/Rating/static';
import styled from 'styled-components';
import tempBackground from '../../assets/homepage.jpg';
import { fetchRestaurant } from '../../store/actions/get_restaurant';
import { fetchUserData } from '../../store/actions/get_userdata';
import Axios from "../../api";



const MakeRevieWrapper = styled.div`
    height: 90vh;
    width: 100%;
    display: flex;
    flex-direction: column;

    .banner {
        position: relative;
        display: flex;
        height: 25%;
        overflow: hidden;
        background-color: ${(props) => props.theme.black};

        * {
            text-align: left;
            padding: 0px;
            text-transform: none;
        }
        img { 
            position: absolute;
            width: 100%;
            z-index: 0;
            opacity: 60%;
        }
        article {
            width: 90%;
            height: 70%;
            margin: auto;
            background: none;
            position: relative;
            z-index: 1;
            color: white;

            display: grid;
            grid-template-columns: 15% 85%;
            grid-template-rows: repeat(3, 1fr);
            grid-template-areas: "h1 h1" "h2 h2" "stars reviews";
            align-items: center;

            h1 {
                grid-area: h1;
            }
            h2 {
                grid-area: h2;
            }
            div {
                grid-area: stars;
            }
            p {
                grid-area: reviews;
            }
        }
    }
        
    form {
        height: 75%;
        width: 50%;
        margin: auto;

       .inputWrapper {
            justify-content: flex-start;

           textarea {  
                padding-top: 0;
                padding-left: 0;
                line-height: 1em; // this probably doesn't matter
                min-height: 300px;
                width: 100%;
           }
       }
    }

`

const WriteReviewPage = (props) => {
    const dispatch = useDispatch()
    const restaurant_id = props.location.search[1];
    const state = useSelector(state => state.defaultReducer)
    
    const [content , setContent] = useState("")
    const defaultTxt = "Your review helps others learn about great local businesses. Please don't review this business if you received a freebie for writing this review, or if you're connected in any way to the owner or employees.";
    const [placeholder, setPalceholder] = useState(defaultTxt);

    const handleInputChange = (e) => {
        //console.log(e.target.value)
        setContent(e.target.value);

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(localStorage.getItem('token'));
        try {
            const url = `/reviews/new/${restaurant_id}/`
            const config = {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            };
            const body = {
                content: content,
                rating: '5',
            }
            const response = await Axios.post(url, body, config)
        } catch (err) {
            console.error(err);
        }
    }

    console.log(state.restaurant.avatar)

    useEffect(() => {
        content ? setPalceholder("Your review") : setPalceholder(defaultTxt);
    },[content])

    useEffect(() => {
        dispatch(fetchRestaurant(restaurant_id))
        dispatch(fetchUserData())
    }, [])


    return (
        <PageWrapper>
            <Header />
            <main>
                { state.restaurant.category && 
                <MakeRevieWrapper>
                    
                    <div className='banner'>
                        <img alt='banner' src={state.restaurant.avatar ? state.restaurant.avatar : tempBackground}></img>
                        <article>
                            <h1>{state.restaurant.name}</h1>
                            {<h2>{state.restaurant.category.category}</h2>}
                            <StaticRating/>
                            <p>{state.restaurant.number_of_reviews} Reviews</p>
                        </article>
                    </div>
                    <form>
                        <Rating averege={state.restaurant.average_rating}/>
                        <p>Select your rating</p>
                        <div className='inputWrapper'>
                            <textarea 
                                placeholder={placeholder}
                                onChange={handleInputChange}>

                            </textarea>
                        </div>
                        <p className='warning'>This field is required</p>
                        <button
                        onClick={handleSubmit}>submit</button>
                    </form>
                </MakeRevieWrapper>
                }
            </main>
            <Footer />
        </PageWrapper>
    )
}

export default WriteReviewPage;