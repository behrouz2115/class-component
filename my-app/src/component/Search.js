import React, { Component } from 'react';
import styles from "./search.module.css";

class Search extends Component {
    constructor(){
        super();
        this.state={
            text:"",
        }
    }
    
    changHandler = event =>{
        this.setState({
            text:event.target.value,
        })
    }   
    render() {
        const {text}=this.state;
        return (
            <div className={styles.container}>
                <p>Search what you want</p>
                <div>
                <input type="text" value={text} onChange={this.changHandler} placeholder='Search ...'/>
                <br/>
                <br/>
                <span>{text}</span>
                </div>
                
            </div>
        );
    }
}

export default Search;