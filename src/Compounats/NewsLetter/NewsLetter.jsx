import React from "react";
import './newsLetter.css';

const NewsLetter = () => {

    return <>
    <div className="newsletter">
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe Our NewsLetter and Stay Updated</p>
        <div>
            <input type="email" placeholder="enter your email id" />
            <button>Subscribe</button>
        </div>
    </div>
    
    </>
}

export default NewsLetter