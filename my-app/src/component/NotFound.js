import React, { Component } from 'react';
import style from "./NotFound.module.css";

class NotFound extends Component {
    render() {
        return (
            <div className={style.container}>
                <h1>Not Found</h1>
            </div>
        );
    }
}

export default NotFound;