import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { PageWrapper } from '../Login/styled';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Rating from '../../components/Rating';
import StaticRating from '../../components/Rating/static';
import styled from 'styled-components';
import tempBackground from '../../assets/homepage.jpg';



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

const WriteReviewPage = () => {
    
    const [content , setContent] = useState("")
    const defaultTxt = "Your review helps others learn about great local businesses. Please don't review this business if you received a freebie for writing this review, or if you're connected in any way to the owner or employees.";
    const [placeholder, setPalceholder] = useState(defaultTxt);

    const handleInputChange = (e) => {
        //console.log(e.target.value)
        setContent(e.target.value);

    }

    const handleSubmit = () => {

    }

    useEffect(() => {
        content ? setPalceholder("Your review") : setPalceholder(defaultTxt);
    },[content])


    return (
        <PageWrapper>
            <Header />
            <main>
                <MakeRevieWrapper>
                    <div className='banner'>
                        <img src={tempBackground}></img>
                        <article>
                            <h1>Läderach Chocolatier Suisse</h1>
                            <h2>Chocolatiers & Shops</h2>
                            <StaticRating/>
                            <p>68 Reviews</p>
                        </article>
                    </div>
                    <form>
                        <Rating/>
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
            </main>
            <Footer />
        </PageWrapper>
    )
}

export default WriteReviewPage;