import React from "react";
import { NavLink } from "react-router-dom";
import tess from "..//images/HeroImage.png"
const TessBanner = () => {
    return (
        <>
           <div className="tessBanner position-relative">
               <span className="tess_img d-block">
                   <img className="w-100" src={tess} alt="tess" />
               </span>
               <span className="tess_text">
                   <h2>Our Favorite Tees</h2>
                   <p>Everyday tees you need.</p>
                   <NavLink className="site_btn" to="/">Shop Now</NavLink>
               </span>
           </div>
        </>
    )
}
export default TessBanner;