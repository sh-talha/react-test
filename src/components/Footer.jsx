import React from "react";
import { NavLink } from "react-router-dom";
import fb from "..//images/fb.svg";
import insta from "..//images/instagram-logo.svg";
const Footer = () => {
    return (
        <>
            <div className="footer_mian">

                <div className="site_container">
                    <div className="footer_inner d-flex flex-md-nowrap flex-wrap justify-content-md-between">
                        <div className="footer_list d-flex flex-md-nowrap flex-wrap">
                            <div className="list_details d-none d-md-block">
                                <h4>Customer Service</h4>
                                <ul>
                                    <li>
                                        <NavLink to="/">Accessibility</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/">contact us</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/">return policy</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/">FAQ</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/">gift certificates</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/">Wishlist</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="list_details d-none d-md-block">
                                <h4>Company</h4>
                                <ul>
                                    <li>
                                        <NavLink to="/">About us</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/">carrers</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/">press</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/">affiliates</NavLink>
                                    </li>
                                </ul>
                            </div>
                            {/* for mobile */}
                            <div className="list_details for_mobile d-md-none">
                                <div className="accordion" id="accordionExample">
                                    <div className="card">
                                        <div className="card-header" id="headingOne">
                                            <h2 className="mb-0">
                                                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Customer Service
                                                </button>
                                            </h2>
                                        </div>

                                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <ul>
                                                    <li>
                                                        <NavLink to="/">Accessibility</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/">contact us</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/">return policy</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/">FAQ</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/">gift certificates</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/">Wishlist</NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingTwo">
                                            <h2 className="mb-0">
                                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Company
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <ul>
                                                    <li>
                                                        <NavLink to="/">About us</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/">carrers</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/">press</NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/">affiliates</NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* for mobile end */}
                        </div>
                        <div className="social_footer">
                            <h4>Follow Us</h4>
                            <span className="social_links d-flex justify-content-between">
                                <NavLink to="/">
                                    <img src={fb} alt="fb" />
                                </NavLink>
                                <NavLink to="/">
                                    <img src={insta} alt="insta" />
                                </NavLink>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;