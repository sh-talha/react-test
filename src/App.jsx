import React from "react";
import Home from "./Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnnouncementBar from "./components/AnnouncementBar";
const App = () => {
    return (
        <>
           <AnnouncementBar/>
            <Navbar />
            <Home />
            <Footer />
        </>
    )
}
export default App;