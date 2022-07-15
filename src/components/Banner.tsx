import React from "react";
import './Banner.scss'


function Banner(){
    return (
        <div className="banner">
            <div className="inner-banner">
                <div className="title-wrapper">
                    <h1>Suheyb Becerek</h1>
                </div>
                <div className="desription-wrapper">
                    <p>Journey is to Journal</p>
                </div>
                {/* <div className="navigation-wrapper">
                    <a href={'/about'}>About</a>
                </div> */}
            </div>
        </div>
    );
}

export default Banner;