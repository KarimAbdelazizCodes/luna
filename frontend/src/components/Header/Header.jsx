import React from "react";
import HeaderLeft from "./HeaderLeft.jsx"
import styled from 'styled-components';
import HeaderRight from "./HeaderRight";


const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    height: 80px;
    background-color: white;
`


const Header = () => {

    return(

        <div>
            <HeaderContainer>

            <HeaderLeft/>

                <HeaderRight/>

            </HeaderContainer>
        </div>

        );
}

export default Header;
