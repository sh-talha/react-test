import React from "react";
import { NavLink } from "react-router-dom";
import logo from "..//images/logoimg.png";
import search from "..//images/search.png";
import user from "..//images/user.png";
import cart from "..//images/shopping-cart.png";
import toggle from "..//images/toggle.png";

const Navbar = () => {
    return (
        <>
        <div className="header_mian">
            <div className="site_container h-100">
            <nav className="navbar navbar-expand-lg navbar-light h-100 p-0">
                <NavLink className="navbar-brand" to="/">
                    <img src={logo} alt="Logo" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <img src={toggle} alt="toggle" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-item nav-link active" to="#">Men’s</NavLink>
                        <NavLink className="nav-item nav-link" to="#">WOMen’s</NavLink>
                        <NavLink className="nav-item nav-link" to="#">ACCESSORIES</NavLink>
                        <NavLink className="nav-item nav-link" to="#">SALE!</NavLink>
                    </div>
                </div>
                <div className="account">
                    <span className="account_img">
                        <img src={search} alt="search" />
                    </span>
                    <span className="account_img">
                        <img src={user} alt="user" />
                    </span>
                    <span className="account_img">
                        <img src={cart} alt="cart" />
                    </span>
                </div>
            </nav>
            
            </div>
        </div>
           
        </>
    )
}
export default Navbar;