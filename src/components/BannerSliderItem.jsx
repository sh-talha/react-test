import React from "react";
import { NavLink } from "react-router-dom";
const BannerSliderItem = (props) => {
const bgimg={
    background:`url(${props.image}) no-repeat`,
    height:"840px",
    display: "block",
    backgroundSize:"cover",
    
}



    return (
        <>
          
                    <div className= {'carousel-item ' + props.addclass}>
                        <span className="banner_img" style={bgimg}>
                        </span>
                        <span className="banner_text">
                            <h2>{props.title}</h2>
                            <p>{props.dec}</p>
                            <NavLink className="site_btn" to="/">Shop Now</NavLink>
                        </span>
                    </div>
        </>
    )
}
export default BannerSliderItem;