import React, { Component } from 'react';
import style from "./AboutUs.module.css";
import {useNavigate} from "react-router-dom";
const AboutUs = ()=> {
    const navigate =useNavigate();
    const clickHandler =()=>{
        navigate("/")
    };
    
        return (
            <div className={style.container}>
                    <h1>I am Behrouz this is my Products <button onClick={clickHandler}>Click</button></h1> 
                     
            </div>
        );
    
}

export default AboutUs;