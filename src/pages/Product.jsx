import React, { Component } from 'react';
import Layout from '../components/Layout';
import products from '../utils/products.json';
import './Product.css';

export class Product extends Component {
    constructor() {
        super();
        this.state = {
            product: []
        }
    }

    componentDidMount() {
        const productId = this.props.match.params.productId;

        const categories = Object.values(products);
        categories.forEach((category) => {
            const categoryProducts =category.items;
            const foundProduct = categoryProducts.find(product => {
                if (product.id === Number(productId)) {
                    return true;
                } else {
                    return false;
                }
            });
            if (foundProduct) {
                this.setState({product: foundProduct});
            }
        })
    }

    render() {
        return (
            <Layout>
                { this.state.product 
                    ?<div className="product d-flex justify-content-around align-items-center m-2">
                        <img src={this.state.product.image} alt="productImage" className="product-img "/>
                        <div className="product-details col-12 col-md-6 d-flex flex-column align-items-start justify-content-start">
                            <h4 className="name">{this.state.product.name},</h4>
                            <p>{this.state.product.author}</p>
                            <p>{this.state.product.description}</p>
                            <p className="h5">{this.state.product.price + this.state.product.currency}</p>
                        </div>
                        
                    </div>
                    : null
                }
                
            </Layout> 
        )
    }
}

export default Product;
