import React from 'react';
import { connect } from 'react-redux';
import {addToCart} from '../redux/actions/cart';
import { Link } from 'react-router-dom';
import './ProductItem.css';


function ProductItem(props) {
    const {id, name, price, author, currency, image} = props;
    return (
        <div className=".col-12 col-md-4 d-flex flex-column align-items-center product-item">
            <Link to={`/product/${id}`} className="d-flex flex-column align-items-center">
                <img src={image} alt="productImage" className="mb-2"/>
                <p className="text-center h5 text-dark">{name},</p>
                <p className="text-center h6 text-secondary">{author}</p>
                <p className="text-center h6 text-dark">{price + currency}</p>
            </Link>
            <button 
                className="btn btn-outline-dark mb-2"
                onClick={() => {
                    props.addToCart({
                        id,
                        name,
                        price,
                        currency,
                        image,
                        author,
                    })
                }}
            >
                Adauga in cos
            </button>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (product) => dispatch(addToCart(product))
    }
}

export default connect(null, mapDispatchToProps)(ProductItem);
