import React from "react"
import logo from "../../assets/logo.svg"
import styled from 'styled-components'

const HeaderLeftContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 40%;
    #Luna {
        display: flex;
        align-items: center;
        #LunaImg {
            margin-left: 2px;
        }
    }
`

const HeaderLeft = () => {

    return(
        <HeaderLeftContainer>
            <div id="Luna">
                <img  src={logo} id="LunaImg" alt="logo"></img>
            </div>
        </HeaderLeftContainer>
        )
}

export default HeaderLeft;