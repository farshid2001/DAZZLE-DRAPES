import React from "react";
import './footer.css'
import footer_img from '../Assets/logo_big.png'
import instagrame_img from '../Assets/instagram_icon.png'
import pintrest_img from '../Assets/pintester_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'

const Footer = () => {

    return<>
    <div className="footer">
        <div className="footer-logo">
            <img src={footer_img} alt="footer-logo" />
            <p>DAZZLE DRAPES</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-social-container">
                <img src={instagrame_img} alt="" />
            </div>
            <div className="footer-social-container">
                <img src={whatsapp} alt="" />
            </div>
            <div className="footer-social-container">
                <img src={pintrest_img} alt="" />
            </div>
        </div>
        <div className="copy-righrs">
            <hr />
            <p>copyrights all right reserved 2023</p>
        </div>
    </div>
    </>
}

export default Footer