import React from 'react';
import "./style.scss";

const index = () => {
    return (
        <>
         <footer className='footer'>
                <div className="container">
                    <hr />
                    <div className="footer__foot">

                        <div className="footer__left">
                            <span className='footer__left-logo'> <i className="bi bi-github"></i> </span>
                            <p className="footer__left-text"> © {new Date().getFullYear()} GitHub, Inc.</p>
                        </div>

                        <ul className="footer__list">
                            <li className="footer__list--item">
                                <a className='footer__list--item-link' href="#">Terms</a>
                            </li>
                            <li className="footer__list--item">
                                <a className='footer__list--item-link' href="#">Privacy</a>
                            </li>
                            <li className="footer__list--item">
                                <a className='footer__list--item-link' href="#">Security</a>
                            </li>
                            <li className="footer__list--item">
                                <a className='footer__list--item-link' href="#">Status</a>
                            </li>
                            <li className="footer__list--item">
                                <a className='footer__list--item-link' href="#">Docs</a>
                            </li>
                            <li className="footer__list--item">
                                <a className='footer__list--item-link' href="#">Contact GitHub</a>
                            </li>
                            <li className="footer__list--item">
                                <a className='footer__list--item-link' href="#">Pricing</a>
                            </li>
                            <li className="footer__list--item">
                                <a className='footer__list--item-link' href="#">API</a>
                            </li>
                            <li className="footer__list--item">
                                <a className='footer__list--item-link' href="#">Training</a>
                            </li>
                            <li className="footer__list--item">
                                <a className='footer__list--item-link' href="#">Blog</a>
                            </li>
                            <li className="footer__list--item">
                                <a className='footer__list--item-link' href="#">About</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </footer>   
        </>
    );
};

export default index;