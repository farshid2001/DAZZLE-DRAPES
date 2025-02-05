import React from "react";
import './hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow from '../Assets/arrow.png'
import hero_img from '../Assets/hero_image.png'


const Hero = () => {

    return <>
        <div className="hero">
            <div className="hero-left">
                <h2>NEW ARRIVEL ONLY</h2>

                <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt="" />

                </div>
                <p>collection</p>
                <p>for everyone</p>
            </div>


            <div className="hero-letest-btn">
                <div>LETEST COLLETION</div>
                <img src={arrow} alt="arrow-icon" />

            </div>

            </div>
            

            <div className="hero-right">
                <div>
                    <img src={hero_img} alt="" />
                </div>
            </div>


        </div>

    </>
}

export default Hero