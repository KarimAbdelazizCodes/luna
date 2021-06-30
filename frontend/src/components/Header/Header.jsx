import React from "react";
import styled from 'styled-components';
import HeaderRight from "./HeaderRight";
import logo from "../../assets/logo.svg"


const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    width: 100%;
    min-height: 80px;
    background-color: white;

    img {
        margin-left: 20px;
    }
`


const Header = () => {
    

    return(
            <HeaderContainer>
                <img  src={logo} id="LunaImg" alt="logo"/>
                <HeaderRight/>
            </HeaderContainer>
        );
}

export default Header;
