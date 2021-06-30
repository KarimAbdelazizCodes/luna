import styled from 'styled-components'
import ratingStar from '../../assets/star.svg'

export const RatingWrapper = styled.div`
    --unit: ${(props)=> props.theme.defaultHeight};

    display: flex;
    flex-direction: row;
    height: var(--unit);
    width: calc(5 * var(--unit));
    mask-image: url(${ratingStar});
    mask-size: contain;
    mask-position: center;
    background-color: ${(props) => props.theme.transparent};
    margin: 0px;
    padding: 0px;

    .overAll {
        position: absolute;
        width: calc(${(props) => props.overAllRating} * var(--unit));
        background-color: ${(props) => props.theme.yellow};
        z-index: -1;

    }

    :hover {
        .overAll {
            background-color: ${(props) => props.theme.orange};
        }
    }

    div {
        width: var(--unit);
        aspect-ratio: 1 / 1;
        margin: 0px;
        padding: 0px;
    }

    .active {
        background-color: ${(props) => props.theme.yellow};
    }
`
