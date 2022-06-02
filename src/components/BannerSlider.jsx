import React from "react";
import banner1 from "..//images/banner.png";
import banner2 from "..//images/banner2.png";
import banner3 from "..//images/banner3.png";
import BannerSliderItem from "./BannerSliderItem";
const BannerSlider = () => {

    return (
        <>
            <div className="bannerSlider_main">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <BannerSliderItem addclass="active" image={banner1} title="Shop New Arrivals" dec="Our coolest new items are waiting for you!"/>
                    <BannerSliderItem image={banner2} title="Our Fave Tees" dec="Shop all of our favorites."/>
                    <BannerSliderItem image={banner3} title="Men’s Tees" dec="Find the perfect shirt."/>
                </div>
                
            </div>
            </div>

        </>
    )
}
export default BannerSlider;