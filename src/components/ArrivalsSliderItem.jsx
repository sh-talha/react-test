import React from "react";
import { NavLink } from "react-router-dom";

const ArrivalsSliderItem = (props) => {

    return (
        <>
            <div>
                <div className="arrival_item">
                    <NavLink className="arrival_link" to="/">
                        <span className="arrival_img">
                            <img src={props.image} alt="Arrival" />
                        </span>
                        <span className="arrivalText d-block text-center">
                            <h3>{props.title}</h3>
                            <p>{props.category}</p>
                            <h4>{props.price}</h4>
                        </span>
                    </NavLink>
                </div>
            </div>

        </>
    )
}
export default ArrivalsSliderItem;