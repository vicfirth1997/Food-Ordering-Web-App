import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = ()=>{

    const [showBtnName,setShowBtnName] = useState("Login");

  

    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo" 
                src={LOGO_URL}
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    
                    {
                  

                    <button className="login" onClick={()=>{
                        if(showBtnName==="Login") {
                            setShowBtnName("Logout");
                        }
                        else if(showBtnName==="Logout") {
                            setShowBtnName("Login");
                        }

                    }}>{showBtnName}</button>
                }
                </ul>
            </div>
        </div>
    );
  };
  export default Header;