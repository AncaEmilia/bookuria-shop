import React from 'react';
import Layout from '../components/Layout';
import { connect } from 'react-redux';
import { removeFromCart } from '../redux/actions/cart';
import { Link } from 'react-router-dom';

function Cart(props) {

    return(
        <Layout>
            <div className="container-fluid container-min-max-width
                d-flex flex-column justify-content-start align-items-center">
                {
                    props.products.length
                    ? <div className="w-100 ">
                        <div className="d-flex justify-content-start text-center h4 text-bold border-bottom">
                            <p className="w-50 border-right">Produs</p>
                            <p className="w-50">Pret</p>
                        </div>
                        <br/>
                        {
                            props.products.map(product => {
                                return (
                                <div className="d-flex justify-content-start align-items-center text-center" key={product.id}>
                                    <p className="w-50 d-flex flex-column justify-content-center align-items-center h6">{ product.name +', '+ product.author }</p>
                                    <p className="w-50">{ product.price } { product.currency }</p>
                                </div>
                                )
                            })
                        }
                    </div>
                    : <div className="d-flex flex-column align-items-center">
                        <p className="h3">Nu ai produse în coș!</p>
                        <Link to="/"><button className="btn btn-outline-dark mt-5">Inapoi la home</button></Link>
                    </div>
                }
            </div>
        </Layout>
    );
}

function mapStateToProps(state) {
    return {
        products: state.cart.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromCart: (payload) => dispatch(removeFromCart(payload))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);