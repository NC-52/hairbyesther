import React from 'react'
import './header.style.scss'

const HeaderComponent = () => {
    return (
        <div className="wrapper">
            <nav>
                <input type="checkbox" id="show-search"/>
                <input type="checkbox" id="show-menu"/>
                <div className="content">
                    <label htmlFor="show-menu" className="menu-icon">
                        <i className="fas fa-bars"></i>
                    </label>
                    <div className="logo">
                        <a href="/home">Aiwa-Moma ink</a>
                    </div>
                    <ul className="links">
                        <li className="nav-menu-item"><a href="#">Home</a></li>
                        <li>
                            <a className="desktop-link" href="#">Projects
                                <i className='fas fa-caret-down ml-1'
                                   style={{color: 'white'}}/> </a>
                            <input type="checkbox" id="show-projects"/>
                            <label htmlFor="show-projects">Projects</label>
                            <ul>
                                <li><a href="#">HK7 100X</a></li>
                                <li><a href="#">MO28R</a></li>
                            </ul>
                        </li>
                        <li>
                            <a className="desktop-link" href="#">Services
                                <i className='fas fa-caret-down  ml-1'
                                   style={{color: 'white'}}/> </a>
                            <input type="checkbox" id="show-services"/>
                            <label htmlFor="show-services">Services</label>
                            <ul>
                                <li><a href="#">VPS</a></li>
                                <li><a href="#">Security</a></li>
                                <li><a href="#">Software Engineering</a></li>
                                <li><a href="#">Hosting</a></li>
                                <li>
                                    <a className="desktop-link" href="#">More</a>
                                    <input type="checkbox" id="show-more"/>
                                    <label htmlFor="show-more">More</label>
                                    <ul>
                                        <li><a href="#">Advanced</a></li>
                                        <li><a href="#">Limited</a></li>
                                        <li><a href="#">Custom</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a href="#">Contacts</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </div>
                <label htmlFor="show-search" className="search-icon">
                    <i className="fas fa-search"></i>
                </label>
                <form action="" className="search-box">
                    <input type="text" placeholder="Type something here..." required/>
                    <button type="submit" className="go-search-icon">
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </form>
            </nav>
            <div className="cart-container">
                <i className='fas fa-shopping-cart'/>
                <span className='cart-content'>3</span>
            </div>
        </div>
    )
}

export default HeaderComponent
