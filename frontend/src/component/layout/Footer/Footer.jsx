import React from 'react'
import playStore from "../../../images/playstore.png"
import appStore from "../../../images/Appstore.png"
import "./Footer.css"

const Footer = () => {
  return (
    <footer id="footer">
        <div className="leftFooter">
            <h4>DOWNLOAD OUR APP</h4>
            <p>Download App for Android and Ios mobile phone</p>
            <img src={playStore} alt="playstore" />
            <img src={appStore} alt="playstore" />
        </div>
        <div className="midFooter">
            <h1>LAXMI ENTERPRISES</h1>
            <p>High quality is our first prority</p>

            <p>CopyRight 2022 &copy; MeTusharJangid </p>
        </div>
        <div className="rightFooter">
            <h4>Follow Us</h4>
            <a href="https://www.youtube.com/">Youtube</a>
            <a href="https://www.facebook.com/">Facebook</a>
            <a href="https://www.instagram.com/">Instagram</a>
        </div>

    </footer>
  )
}

export default Footer
