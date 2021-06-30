import React from "react";
import Rating from '../../components/Rating';
import styled from 'styled-components';
import buffet from "../../assets/buffet.png"




const CardContainer = styled.div`
    border: 2px solid red;
    border-top-style: solid;
    border-top-color: #E47D31;
    border-top-width: 8px;
    display: flex;
    width: 271px;
    height: 410px;
    background-color: white;
`

const CardTop = styled.div`
    border: 1px solid blue;
    height: 115px;
    width: 271px;
`

const CardBottom = styled.div`
    border: 1px solid green;
    display: flex;
    align-self: flex-end;
    /* justify-content: space-between; */
    /* flex-direction: column; */
    height: 275px;
    width: 271px;

    .resize {
        width: 260px;
        height: 260px;
    }
`




const RestaurantCard = () => {

    return(

        <div>
            <CardContainer>

                <CardTop>
                    <h2>Restaurant Name</h2>
                    <h2>Address</h2>
                    <Rating></Rating>
                </CardTop>


                <CardBottom>
                    <img  class="resize" src={buffet} id="BuffetImg" alt="buffet"></img>
                </CardBottom>

            </CardContainer>
        </div>

        );
}

export default RestaurantCard;
