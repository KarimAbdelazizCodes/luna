import React from 'react';
import { RatingWrapper } from './styled';
import ratingStar from '../../assets/star.svg'
import { useState } from 'react'


const Rating = (props) => {
    const [userTemplateRating, setTemplateUserRating] = useState(0)
    const overAllRating = props.average;

    const handleTemplateRating = (e) => {
        if (e.type === 'mouseenter') {
            setTemplateUserRating(e.target.getAttribute('star'));
        } else if (e.type === 'mouseleave') {
            setTemplateUserRating(overAllRating)
        }
    }

    return (
        <RatingWrapper 
            overAllRating={overAllRating}>
            <div className='overAll'/>
            {
            [1,2,3,4,5].map((star) => {
                return (<div
    className={userTemplateRating >= star ? 'active' : 'inactive'}
    star={star}
    key={star}
    mask={ratingStar}
    onMouseEnter={handleTemplateRating}
    onMouseLeave={handleTemplateRating}
    />)})
            }
     
        </RatingWrapper>
    )
}

export default Rating
