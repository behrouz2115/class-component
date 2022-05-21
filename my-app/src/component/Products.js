import React, { Component } from 'react';
import Card from './Card';
import Styles from "./products.module.css"
import axios from 'axios';

class Products extends Component {
    constructor(props){
        super(props);
        this.state={
            products:[]
        }
    }
    componentDidMount(){
        axios.get("https://fakestoreapi.com/products")
        .then(response=>this.setState({
            products:response.data,
        }))
    }
    render() {
        const {products}=this.state;
        return (
            <div className={Styles.container}>
                {
                    products.length? 
                    products.map(product=><Card key={product.id} image={product.image} 
                        name={product.title} cost={`${product.price} $`} alert={product.alert}/>):
                    <h1>Loding...</h1>
                }
         

            </div>
        );
    }
}

export default Products;