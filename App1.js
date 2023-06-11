import React from "react";
import  ReactDOM  from "react-dom/client";

/**
 * Header
 *  -Logo
 *  -Nav Items
 * Body
 *  -Search
 *  -RestContainer
 *  -RestCard
 *      -Img
 *      -Name of res, Start rating,cuisine,delivery time
 * Footer
 *  -Copyright
 *  -Links
 *  -Address
 *  -Contact
 */






const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = ()=>{
    return (
        <div className="app">
        <Header/>
        <Body/>
        </div>
    )
}

const Header = ()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo" 
                src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                <RestCard/>
                <RestCard/>
            
            </div>
        </div>
    )
}

const RestCard=()=> {
    return (
        <div className="res-card">
             <img className="res-logo"
             src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/sotxv0gury7f7vrfvb2r"/> 
            <h3>Meghana Foods</h3>
            <h4>Biryani, North Indian,Asian</h4>
            <h4>4.4 stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
}

root.render(<AppLayout/>)