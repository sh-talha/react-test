import React from "react";
import { NavLink } from "react-router-dom";

const CollectionCard = (props) => {
    return (
        <>
            <div className="collection_card">
                <NavLink className="collectionLink position-relative" to={props.visit}>
                    <span className="collection_img d-block">
                        <img src={props.image} alt="" />
                    </span>
                    <span className="collectionName w-100 d-flex justify-content-center align-items-center position-absolute">
                        <h3>{props.title}</h3>
                    </span>
                </NavLink>
            </div>
            
        </>
    )
}
export default CollectionCard;