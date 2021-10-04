import React from 'react';
import {Link} from 'react-router-dom';
import { ReactComponent as Phone } from '../assets/icons/phone.svg';
import { ReactComponent as Mail } from '../assets/icons/mail.svg';
import './Footer.css';

function Footer() {
    return(
        <footer className="pt-3 mt-3 bg-light">
            <div className="container-fluid container-min-max-width d-flex justify-content-around">
                <div className="footer-group d-flex flex-column">
                    <h3 className="h5">Link-uri rapide:</h3>
                    <Link to='/about'>Despre</Link>
                    <Link to='/terms-and-conditions'>Termeni și condiții</Link>
                </div>
                <div className="footer-group">
                    <h3 className="h5">Contactează-mă:</h3>
                    <p className="m-0">
                        <a href="mailto:ancatrifanov@gmail.com">
                        <Mail className="mr-1 mb-1"/>
                            ancatrifanov.com
                        </a>
                    </p>
                    <p className="m-0"><Phone className="mr-1"/>+40770793369</p>
                </div>
            </div>
            <div className="text-center py-3">
                &copy; Trifanov Anca Emilia, 2021
            </div>
        </footer>
    );
}


export default Footer;