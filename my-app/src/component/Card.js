import React, { Component } from 'react';
import Style from "./card.module.css";
import up from "../pic/up3.svg";
import down from "../pic/down3.svg";
import {Link} from "react-router-dom";


class Card extends Component {
    constructor(){
        super();
        this.state={
            counter:0,
            // total:0,
        }
    }
    downHandler =()=>{
        if(this.state.counter>=1){
        this.setState(prevState=>({
            counter:prevState.counter-1,
        }))}
    }
    upHandler =()=>{
        this.setState(prevState=>({
            counter:prevState.counter+1, /**tghis */
        }))
    }
    render() {
        const {image , name , cost ,alart, id}=this.props;  
        const {counter}=this.state ;
        return (
        <div className={Style.container}>
            <img src={image} alt={alart}/>
            {/* <h3>{name}</h3> */}
            <h3>
                <Link className={Style.link} to={`/products/${id}`}>{name}</Link>
            </h3>
            <p>{cost}{counter ? ` * ${counter}=${counter*Number(cost.split(" ")[0])} $`:""}</p>
            
            <div className={Style.counter}>
                {/* <img className={this.state.counter? "": Style.deactive} src={down} alt="arrow" onClick={this.downHandler}></img> */}
                <img className={!counter ? Style.deactive:""} src={down} alt="arrow" onClick={this.downHandler}></img>
                <span>{counter}</span>
                <img src={up} alt="arrow" onClick={this.upHandler}></img>
            </div>
            </div>
            
        );
    }
}

export default Card;