import React, { Component } from 'react';
import Styles from "./logos.module.css";
import log1 from "../pic/log1.png";
import log2 from "../pic/log2.png";
import log3 from "../pic/log3.png";

class Logos extends Component {
    render() {
        return (
            <div className={Styles.container}>
                <h3>Who Support us?</h3>
                <div>
                <img src={log1} alt="log1"/>
                <img src={log2} alt="log1"/>
                <img src={log3} alt="log1"/>
                </div>
            </div>
        );
    }
}

export default Logos;