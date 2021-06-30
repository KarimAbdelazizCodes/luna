import React from "react";
import facebook from "../../assets/facebook.svg";
import googleplus from "../../assets/googleplus.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import { FooterContainer } from './styled';



function Footer() {
    return(
        <FooterContainer>
            <div className="footer-top">
                <ul className="impressum">
                    <li>About us</li>
                    <li>Press</li>
                    <li>Blog</li>
                    <li>IOS</li>
                    <li>Android</li>
                </ul>

                <ul className="social-media">
                    <li>
                        <img  src={facebook} id="fbImg" alt="facebook" />
                    </li>
                    <li>
                        <img  src={twitter} id="twitterImg" alt="twitter" />
                    </li>
                    <li>
                        <img  src={googleplus} id="googleImg" alt="googleplus" />
                    </li>
                    <li>
                        <img  src={instagram} id="instaImg" alt="instagram" />
                    </li>
                </ul>
            </div>
            <div className="footer-bottom">
                <p>©Copyright Luna 2021</p>
            </div>
        </FooterContainer>
    )
}

export default Footer;