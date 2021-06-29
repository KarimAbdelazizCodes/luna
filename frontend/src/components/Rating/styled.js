import styled from 'styled-components'
import ratingStar from '../../assets/star.svg'

export const RatingWrapper = styled.div`
    display: flex;
    background-color: yellow;
    flex-direction: row;
    width: calc(5 * 40px);

    div {
        height: 40px;
        aspect-ratio: 1 / 1;
    }

    .active {
        background-color: red;
        mask-image: url(${ratingStar});
        mask-size: contain;
    }
`
