import React from 'react'
import prod01 from './images/product_01.jpg'
import prod02 from './images/product_02.jpg'
import prod03 from './images/product_03.jpg'
import prod04 from './images/product_04.jpg'
import prod05 from './images/product_05.jpg'
import prod06 from './images/product_06.jpg'

const ProductList = (props) => {
    return (
        <div className="products">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="filters">
                            <ul>
                                <li className="active" data-filter="*">All Products</li>
                                <li data-filter=".des">Featured</li>
                                <li data-filter=".dev">Flash Deals</li>
                                <li data-filter=".gra">Last Minute</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="filters-content">
                            <div className="row grid">
                                <div className="col-lg-4 col-md-4 all des">
                                    <div className="product-item">
                                        <a href="#"><img src={prod01} alt=""/></a>
                                        <div className="down-content">
                                            <a href="#"><h4>Tittle goes here</h4></a>
                                            <h6>$18.25</h6>
                                            <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla
                                                aspernatur.</p>
                                            <ul className="stars">
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                            </ul>
                                            <span>Reviews (12)</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 all dev">
                                    <div className="product-item">
                                        <a href="#"><img src={prod02} alt=""/></a>
                                        <div className="down-content">
                                            <a href="#"><h4>Tittle goes here</h4></a>
                                            <h6>$16.75</h6>
                                            <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla
                                                aspernatur.</p>
                                            <ul className="stars">
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                            </ul>
                                            <span>Reviews (24)</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 all gra">
                                    <div className="product-item">
                                        <a href="#"><img src={prod03} alt=""/></a>
                                        <div className="down-content">
                                            <a href="#"><h4>Tittle goes here</h4></a>
                                            <h6>$32.50</h6>
                                            <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla
                                                aspernatur.</p>
                                            <ul className="stars">
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                            </ul>
                                            <span>Reviews (36)</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 all gra">
                                    <div className="product-item">
                                        <a href="#"><img src={prod04} alt=""/></a>
                                        <div className="down-content">
                                            <a href="#"><h4>Tittle goes here</h4></a>
                                            <h6>$24.60</h6>
                                            <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla
                                                aspernatur.</p>
                                            <ul className="stars">
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                            </ul>
                                            <span>Reviews (48)</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 all dev">
                                    <div className="product-item">
                                        <a href="#"><img src={prod05} alt=""/></a>
                                        <div className="down-content">
                                            <a href="#"><h4>Tittle goes here</h4></a>
                                            <h6>$18.75</h6>
                                            <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla
                                                aspernatur.</p>
                                            <ul className="stars">
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                            </ul>
                                            <span>Reviews (60)</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 all des">
                                    <div className="product-item">
                                        <a href="#"><img src={prod06} alt=""/></a>
                                        <div className="down-content">
                                            <a href="#"><h4>Tittle goes here</h4></a>
                                            <h6>$12.50</h6>
                                            <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla
                                                aspernatur.</p>
                                            <ul className="stars">
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                            </ul>
                                            <span>Reviews (72)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductList