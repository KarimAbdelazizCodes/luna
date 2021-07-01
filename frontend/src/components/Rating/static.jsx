import React from 'react';
import { RatingWrapper } from './styled';
import ratingStar from '../../assets/star.svg'
import { useState } from 'react'
import styled from "styled-components";

const StaticWrapper = styled(RatingWrapper)`
  --unit: 20px;
  pointer-events: none;
  
`

const StaticRating = props => {
    const [userTemplateRating, setTemplateUserRating] = useState(props.rating)
    const overAllRating = props.average;

    return (
        <StaticWrapper
            overAllRating={overAllRating}>
            <div className='overAll'/>
            {
            [1,2,3,4,5].map((star) => {
                return (<div
    className={userTemplateRating >= star ? 'active' : 'inactive'}
    star={star}
    key={star}
    mask={ratingStar}
    />)})
            }
        </StaticWrapper>
    )
}

export default StaticRating
