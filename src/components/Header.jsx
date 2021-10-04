import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/images/logo.png';
import {ReactComponent as ShoppingCart} from '../assets/icons/shopping-cart.svg';
import { connect  } from 'react-redux';
import { signOutAction } from '../redux/actions/user';
import './Header.css';

function Header(props) {

    return(
        <header className="border-bottom mb-3">
            <div className="container-fluid container-min-max-width d-flex justify-content-between align-items-center">
                <Link to='/' className="my-3">
                    <img src={logo} alt="logo" />
                </Link>
                <div>
                    { props.user && props.user.uid
                        ? <p className="h5">Buna, {props.user.displayName} !</p>
                        : null
                    }
                    <div className="d-flex justify-content-end align-items-center">
                        { props.user && props.user.uid
                            ? <p className="logout h5" onClick={() => props.signOutWithDispatch()}>Delogare</p>
                            : <Link to="/login" className="mb-0 logare">Logare</Link>
                        }
                        <div className="d-flex align-items-center">
                            <Link to="/cart" className="d-flex">
                                <ShoppingCart className="m-1 ml-3"/>
                                <p className="number">{props.numberOfProducts}</p>
                            </Link>  
                        </div>
                    </div>
                </div>
                    
    
            </div>
        </header>
    );
}

function mapStateToProps(state) {
    return {
        numberOfProducts: state.cart.products.length,
        user: state.user.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signOutWithDispatch: () => {
            const actionResult = signOutAction();
            dispatch(actionResult)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);