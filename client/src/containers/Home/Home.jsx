import React from 'react';
import Logo from "../../assets/images/LuckyLarrysBaitShop.jpg";

const Home = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12 center-align">
                    <img src={Logo} alt="Logo" style={{width: "100%"}}/>
                </div>
            </div>
        </div>
    );
};

export default Home;