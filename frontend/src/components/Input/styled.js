import styled from "styled-components"

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 55px;
    background-color: ${(props) => props.theme.white};
    border: ${(props) => props.theme.border};
    input {
        cursor: pointer;
    }
    label {
        cursor: pointer;
        position: absolute;
        transform: ${(props) => props.searchFocus ? 'translate(0px, -18px)' : 'translate(0px, 0px)'};
        font-size: ${(props) => props.searchFocus ? '12px' : props.theme.fontNormal};
    }
`