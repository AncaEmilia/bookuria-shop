import React from 'react';
import {Link} from 'react-router-dom';  
import './Homecategory.css';

function Homecategory(props) {
    const {image, title, description, routeName} = props;

    return (
        <div className="col-12 col-md-4 d-flex flex-column align-items-center mb-5">
            <Link to={`/category/${routeName}`} className="d-flex flex-column align-items-center">
                <img
                        className="home-category" 
                        src={image} 
                        alt="hcImage"
                /> 
                <p className="title">{title}</p>
                <p className="description">{description}</p>
            </Link>
            
            
        </div>
    )
}

export default Homecategory;
