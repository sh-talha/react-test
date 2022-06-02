import React from "react";
import ArrivalsSlider from "./components/ArrivalsSlider";
import BannerSlider from "./components/BannerSlider";
import CollectionList from "./components/CollectionList";
import NewsLetter from "./components/NewsLetter";
import TessBanner from "./components/TessBanner";
const Home = () =>{
    return(
        <>
          <BannerSlider/>
          <CollectionList/>
          <ArrivalsSlider/>
          <TessBanner />
          <NewsLetter/>
        </>
    )
}
export default Home;