import React from 'react';
import styles from "./Banner.module.css";
import banner from "../pic/2483946.jpg"

const Banner = () => {
    return (
        <div>
            <div className={styles.container}>
                <img src={banner} alt="banner" />
                <div className={styles.textContainer}>
                     <h1>Handmade</h1>
                     <p>We are waiting for <span>you</span> ...</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;