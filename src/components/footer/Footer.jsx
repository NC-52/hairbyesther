import React from 'react'
import './footerStyle.css'

const Footer = () => {
    return (
        <>
            <div className="info_section  layout_padding2-top">
                <div className="social_container">
                    <div className="social_box mt-3">
                        <a href="">
                            <i className="fab fa-facebook-square" aria-hidden="true"></i>
                        </a>
                        <a href="">
                            <i className="fab fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a href="">
                            <i className="fab fa-instagram" aria-hidden="true"></i>
                        </a>
                        <a href="">
                            <i className="fab fa-youtube" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                <div className="info_container ">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-4">
                                <h6>
                                    A Propos
                                </h6>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit
                                    amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet,
                                </p>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <h6>
                                    Liens utiles
                                </h6>
                                <div className="info_link-box">
                                    <a href="">
                                        <span>Home</span>
                                    </a>
                                    <a href="">
                                        <span>Best Sale</span>
                                    </a>
                                    <a href="">
                                        <span>New Products</span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <h6>
                                    Nous contacter
                                </h6>
                                <div className="info_link-box">
                                    <a href="">
                                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                                        <span className='ml-2'> Gb road 123 london Uk </span>
                                    </a>
                                    <a href="">
                                        <i className="fa fa-phone" aria-hidden="true"></i>
                                        <span className='ml-2'>+01 12345678901</span>
                                    </a>
                                    <a href="">
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                        <span className='ml-2'> demo@gmail.com</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer_section">
                    <div className="container">
                        <p>
                            &copy; <span id="displayYear">2021</span> Hair by ESTELLE
                        </p>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer
