import React from "react";
import HeaderLeft from "./HeaderLeft.jsx"
import styled from 'styled-components';
import HeaderRight from "./HeaderRight";


const HeaderContainer = styled.header`
    display: flex;
    width: 100%;
    height: 80px;
    background-color: white;
`


const Header = () => {

    return(
            <HeaderContainer>
                <HeaderLeft/>
                <HeaderRight/>
            </HeaderContainer>
        );
}

export default Header;
