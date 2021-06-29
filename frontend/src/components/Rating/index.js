import React from 'react';
import { RatingWrapper } from './styled';
import ratingStar from '../../assets/star.svg'
import { useState } from 'react'


const Rating = () => {
    const [userTemplateRating, setTemplateUserRating] = useState(0)

    const handleTemplateRating = (e) => {
        if (e.type === 'mouseenter') {
            setTemplateUserRating(e.target.getAttribute('star'));
        } else if (e.type === 'mouseleave') {
            setTemplateUserRating(0)
        }
    }

    return (
        <RatingWrapper>
            {
            [1,2,3,4,5].map((star) => {
                return (<div 
                    className={userTemplateRating >= star ? 'active' : 'inactive'}
                    star={star} 
                    key={star}
                    mask={ratingStar}
                    onMouseEnter={handleTemplateRating}
                    onMouseLeave={handleTemplateRating}
                    ></div>)})
            }
            
        </RatingWrapper>
    )
}

export default Rating
