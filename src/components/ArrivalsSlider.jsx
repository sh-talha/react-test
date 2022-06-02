import React from "react";
import Slider from "react-slick";
import ArrivalsSliderItem from "./ArrivalsSliderItem";
import product from "..//images/ProductImage.png"

const ArrivalsSlider = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:true,
        responsive: [{
            breakpoint: 575,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1
            }
          }]
    };
    return (
        <>
            <div className="arrival_main">
                <div className="site_container">
                <h2>New Arrivals</h2>
                <Slider {...settings}>
                    <ArrivalsSliderItem image={product} title="Product Title" category="WOMEN’S T-SHIRT" price="$19.99" />
                    <ArrivalsSliderItem image={product} title="Product Title2" category="WOMEN’S T-SHIRT" price="$29.99" />
                    <ArrivalsSliderItem image={product} title="Product Title3" category="WOMEN’S T-SHIRT" price="$219.99" />
                    <ArrivalsSliderItem image={product} title="Product Title4" category="WOMEN’S T-SHIRT" price="$129.99" />
                    <ArrivalsSliderItem image={product} title="Product Title5" category="WOMEN’S T-SHIRT" price="$119.99" />
                </Slider>
                </div>
            </div>

        </>
    )
}
export default ArrivalsSlider;