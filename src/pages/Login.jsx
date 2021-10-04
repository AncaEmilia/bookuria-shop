import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/images/logo.png';
import './Login.css';
import {signInWithGoogleAction} from '../redux/actions/user';
import { connect } from 'react-redux';

class Login extends React.Component {
    componentDidUpdate(prevProps) {
        if (this.props.userData !== prevProps.userData) {
            this.props.history.push('/');
        }
    } 
    
    render() {
        return (
            <div className="login">
                <Link to='/'>
                    <img src={logo} alt="logo" />
                </Link>
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <h1 className="h1 m-2">Login</h1>
                    <p>Alege metoda prin care vrei să vrei să te loghezi:</p>
                    <button 
                        className="btn btn-outline-dark d-flex align-items-center"
                        onClick={() => this.props.signInWithGoogleWithDispatch()}>
                        <span className="text-nowrap">
                            Loghează-te cu Google
                        </span>
                    </button>
                </div>
                <Link to="/">
                    <button className="btn btn-outline-dark mb-3">
                        Inapoi la home
                    </button>
                </Link> 
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userData: state.user.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signInWithGoogleWithDispatch: () => dispatch(signInWithGoogleAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);