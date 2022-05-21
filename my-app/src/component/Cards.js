import React, { Component } from 'react';
import Card from './Card';
// import {v4} from "uuid";
import Style from "./Cards.module.css"
import ring1 from "../pic/ring1.png";
import ring2 from "../pic/ring5.avif";
import ring3 from "../pic/ring3.webp";
import ring4 from "../pic/ring4.png";

class Cards extends Component {
    constructor(){
        super()
        this.state={
            accesiry:[
                {id:1 ,image:ring1, name:"ring1" , cost:"250 $", alert:"ring1"},
                {id:2 ,image:ring2, name:"ring2" , cost:"200 $", alert:"ring2"},
                {id:3 ,image:ring3, name:"ring3" , cost:"300 $", alert:"ring3"},
                {id:4 ,image:ring4, name:"ring4" , cost:"100 $", alert:"ring4"},
                {id:5 ,image:ring1, name:"ring5" , cost:"50 $", alert:"ring5"},
                {id:6 ,image:ring2, name:"ring6" , cost:"180 $", alert:"ring6"},
                {id:7 ,image:ring3, name:"ring7" , cost:"220 $", alert:"ring7"},
            ]
        }
    }
    render() {
        return (
            <div>
            <div className={Style.container}>
                {this.state.accesiry.map(ring=><Card id={ring.id}  key={ring.id} image={ring.image} name={ring.name} cost={ring.cost} alert={ring.alert}/>)}
                {/* <Card image={ring1} name="ring1" cost="200 $"  alart="ring1"/>
                <Card image={ring2} name="ring2" cost="250 $"  alart="ring2"/>
                <Card image={ring3} name="ring3" cost="100 $"  alart="ring3"/>
                <Card image={ring4} name="ring4" cost="300 $"  alart="ring4"/>
                <Card image={ring4} name="ring4" cost="300 $"  alart="ring6"/>
                <Card image={ring4} name="ring4" cost="300 $"  alart="ring7"/> */}
            </div>
            <p></p>
            </div>
        );
    }
}

export default Cards;