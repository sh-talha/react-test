import React from "react";
import newsletter from "..//images/newsletter.svg"
const NewsLetter = () => {
    return (
        <>
            <div className="newsletter_main">
                <div className="site_container">
                <div className="heading d-flex justify-content-center">
                    <img src={newsletter} alt="NewsLetter" />
                    <h2>Sign Up & Stay Connected</h2>
                </div>
                <div className="notify d-flex flex-md-nowrap flex-wrap justify-content-center">
                    <p>
                        Sign up for the newsletter and get 20% off! Gain access to exclusive offers and be the first to know when new stuff drops!
                    </p>
                    <span className="subscribe d-flex flex-md-nowrap flex-wrap">
                        <input type="email" placeholder="Enter Your Email Address" />
                        <button type="submit">
                            Subscribe
                        </button>
                    </span>
                </div>
                </div>
            </div>
        </>
    )
}
export default NewsLetter;