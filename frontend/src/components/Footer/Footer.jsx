import React from "react";
import facebook from "../../assets/facebook.svg";
import googleplus from "../../assets/googleplus.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import styled from "styled-components";

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80px;
    background-color: white;
    
    .footer-top {
        display: flex;
        justify-content: space-between;
        border-bottom: 2px solid lightgray;
        
        
        .footer-top-left {
            width: 300px;
            display: flex;
            justify-content: space-between;
        }   
    }
    
    .footer-bottom {
        background-color: white;
        padding: 10px 10px;    
    }
    
    
`

function Footer() {
    return(
        <>
            <FooterContainer>
                <div className="footer-top">
                    <div className="footer-top-left">
                        <p>About us</p>
                        <p>Press</p>
                        <p>Blog</p>
                        <p>IOS</p>
                        <p>Android</p>
                    </div>

                    <div id="socialmedia">
                        <img  src={facebook} id="fbImg" alt="facebook"></img>

                        <img  src={twitter} id="twitterImg" alt="twitter"></img>

                        <img  src={googleplus} id="googleImg" alt="googleplus"></img>

                        <img  src={instagram} id="instaImg" alt="instagram"></img>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>©Copyright Luna 2021</p>
                </div>

            </FooterContainer>

        </>
    )
}

export default Footer;