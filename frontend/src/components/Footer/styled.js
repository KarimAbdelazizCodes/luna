import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: white;
    
    .footer-top {
        display: flex;
        justify-content: space-between;
        border-bottom: 2px solid lightgray;
        height: 4em;
        
        ul {
            min-width: 300px;
            width: 20%;
            display: flex;
            justify-content: space-between;
            height: 100;
            align-items: center;
        }  

        .impressum {
            min-width: 300px;
            width: 20%;
        }
        .social-media {
            min-width: 200px;
            width: 10%;

            li {
                img {
                    height: 30px;
                }
            }
        }

    }
    
    .footer-bottom {
        background-color: white;  
        p {
            margin: 0px;
            line-height: 2em;
        }

    }
`