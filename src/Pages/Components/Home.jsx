import React from 'react';
import "./Home.css"
const Home = () =>{
    return (
        <>
        <div className="slider-images">
            <div className="first_slider_image">
            <img src="../Images/front_img.webp" alt="slider_image" />
            </div>
            <div className="second_slider_image">
            <img src="#" alt="" />
            </div><div className="third_slider_image">
            <img src="#" alt="" />
            </div>
        </div>

        <div className="clinic_info">
            <div className="basic_info" id='info_01'></div>
            <div className="basic_info" id='info_02'></div>
            <div className="basic_info" id='info_03'></div>
        </div>
        </>
    )
}

export default Home;