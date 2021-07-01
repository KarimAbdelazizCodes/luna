import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BannerPic from "../../assets/zuerich-skyline.png";
import styled from 'styled-components';
import ProfilePic from "../../assets/ProfilePic.png";
import Reviews from "../../assets/reviews.svg";
import Comment from "../../assets/comment.svg";
import Restaurant from "../../assets/restaurant.svg";
import Edit from "../../assets/edit.svg";
import { fetchUserData } from "../../store/actions/get_userdata";
import {fetchCategories} from "../../store/actions/get_categories";


const Banner = styled.div`
    border: 2px solid red;
    /* width: 100%; */
    background-size: cover;

    .resizeBanner{
        width: 100%;
    }
`
const MainContainer = styled.div`
    border: 2px solid black;
    width: 100%;
    height: 1100px;
`

const Columnleft = styled.div`
    border: 2px solid green;
    margin-left: 100px;
    width: 260px;
    height: 260px;
    position: relative;
    transform: translateY(-50%);

    .resizeProfile{
    
    }
`
const NameBox = styled.div`
    border: 2px solid darkgray;
    padding-bottom: 12px;
    padding-top: 12px;
`

const ColumnBar = styled.div`
    border-bottom-style: solid;
    border-bottom-color: darkgray;
    border-bottom-width: 2px;
    background-color: white;
    padding-left: 15px;
    display: flex;
    

    .resize {
        padding-top: 10px;
        padding-right: 17px;
        width: 40px;
        height: 40px;
    }
`

const Middlecolumn = styled.div`
    border: 2px solid green;
    /* width: 100%;
    height: 380px; */
    background-color: white;
`

const PersonalDetails = styled.div`
    border: 2px solid yellow;
    position: relative;
    transform: translateY(-120%);

`

const Columnright = styled.div`
    border: 2px solid blue;
    margin-left: 50px;
    margin-right: 100px;
    /* width: 260px;
    height: 260px; */
`


const ProfilPage = () => {

    // const dispatch = useDispatch();
    // const userData = useSelector(state => state.defaultReducer.userData);
    


    // useEffect(() => {
    //     dispatch(fetchUserData())
    // }, [dispatch])




    const userData = {
        user_name: "Bob",
        first_name: "Laurent",
        last_name: "Haller",
        location: "Zürich",
        about: "Enjoy good Food",
        date: "2.April",
        hobbies: "Pizza",
        number_of_reviews: 6,
        number_of_comments: 210,
        description: "Im professional photographer with an eye for details in every thing I do in my live. Every time a pass by a nice restaurant i have to stop and take notes",
    }


    return (
        <>
            <Header />
                
                <Banner>
                    <img class="resizeBanner" src={BannerPic} id="BannerImg" alt="banner"></img>
                </Banner>
                
                    <MainContainer>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
                            <Columnleft>

                                <img class="resizeProfile"src={ProfilePic} id="ProfilePic" alt="ProfilePic"></img>
                                <NameBox>
                                    <h2>{userData.first_name}'s Profile</h2>
                                </NameBox>
                                    <ColumnBar>
                                        <img class="resize" src={Reviews} id="Reviews" alt="reviews"></img>
                                        <p>Reviews</p>
                                    </ColumnBar>
                                    <ColumnBar>
                                        <img class="resize" src={Comment} id="Comment" alt="comment"></img>
                                        <p>Comment</p>
                                    </ColumnBar>
                                    <ColumnBar>
                                        <img class="resize" src={Restaurant} id="Restaurant" alt="restaurant"></img>
                                        <p>Restaurant</p>
                                    </ColumnBar>
                                    <ColumnBar>
                                        <img class="resize" src={Edit} id="Edit" alt="edit"></img>
                                        <p>Edit</p>
                                    </ColumnBar>

                            </Columnleft>

                            <Middlecolumn>
                                <PersonalDetails>
                                    <h2 style={{color: "white"}}>{userData.first_name} {userData.last_name[0]}.</h2>
                                    <h2 style={{color: "white"}}>{userData.location}</h2>
                                    <h2 style={{color: "white"}}>{userData.number_of_reviews} reviews</h2>
                                    <h2 style={{color: "white"}}>{userData.number_of_comments} comments</h2>
                                </PersonalDetails>
                                <h3 style={{color: "black"}}>Reviews</h3>
                                


                            </Middlecolumn>

                            <Columnright>
                                <div>
                                    <h3 style={{color: "black"}}>About ...</h3>
                                    <p>{userData.about}</p>
                                    <h2 style={{color: "black"}}>Location</h2>
                                    <p>{userData.location}</p>
                                    <h2 style={{color: "black"}}>Luna member since</h2>
                                    <p>{userData.date}</p>
                                    <h2 style={{color: "black"}}>Things i love</h2>
                                    <p>{userData.hobbies}</p>
                                    <h2 style={{color: "black"}}>Description</h2>
                                    <p>{userData.description}</p>
                                </div>
                            </Columnright>
                        </div>
                 </MainContainer>
            <Footer />
        </>
    )
}

export default ProfilPage;