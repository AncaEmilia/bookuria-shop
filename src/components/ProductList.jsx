import React from 'react';
import ProductItem from './ProductItem';


function ProductList(props) {
    const {products} = props;

    return (
        <div className="container">
           <div className="row">
            {
                products
                    ? products.map((product) =>{
                        return(
                            <ProductItem
                                id={product.id}
                                name={product.name}
                                price={product.price}
                                author={product.author}
                                currency={product.currency}
                                image={product.image}
                            />
                        )
                    })
                    : null
            }
            </div>
        </div>
    )
}

export default ProductList
