import React from 'react';
import {Badge} from 'antd'
import {ShoppingCartOutlined, UserOutlined} from '@ant-design/icons'
import './navbar-style.css'

const Header = (props) => {
    return (
        <>
            <header className="header_section long_section px-0">
                <nav className="navbar navbar-expand-lg custom_nav-container ">
                    <a className="navbar-brand" href="index.html">
                        <span className="brand-name">Hair By ESTH</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className=""> </span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
                            <ul className="navbar-nav  ">
                                <li className="nav-item active">
                                    <a className="nav-link" href="index.html">Acceuil <span
                                        className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="about.html"> Péruques</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="furniture.html">Prafum</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="blog.html">Chaussures</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="contact.html">Accessoires</a>
                                </li>
                            </ul>
                        </div>
                        <div className="d-flex mx-auto flex-column flex-lg-row align-items-right">
                            <ul className="navbar-nav  ">
                                <li className="nav-item">
                                    <UserOutlined className="mb-2"/>
                                    <span className="ml-2">Login</span>
                                </li>
                                <li className="nav-item ml-4">
                                    <ShoppingCartOutlined/>
                                    {/*style={{ backgroundColor: '#672f92' }}*/}
                                    <Badge count={0} showZero className="ml-1" style={{ backgroundColor: 'rgba(255,255,255,0.4)' }} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;