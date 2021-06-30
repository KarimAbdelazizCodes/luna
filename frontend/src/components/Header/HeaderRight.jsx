import React, {useState,useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import styled from 'styled-components';


const HeaderRightContainer = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
    justify-content: flex-end;
    align-items: center;
    
    //singUp border-top-left-radius:
    //login
`

const HeaderRight = () => {

    return(
    <HeaderRightContainer>
        <p>Home</p>
        <p>Search</p>
        <p>Profile</p>
        <button class="signUP">SIGNUP</button>
        <button class="login">LOGIN</button>

    </HeaderRightContainer>
    )
}


export default HeaderRight;
