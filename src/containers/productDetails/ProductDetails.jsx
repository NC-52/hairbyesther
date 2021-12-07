import React from 'react'
import tof from './img/product_03.jpg'
import './productDetailsStyle.css'
import ProductList from "../../components/products/ProductList";

const ProductDetails = () => {
    return (
        <>
            <section className="py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="row gx-4 gx-lg-5 align-items-center">
                        <div className="col-md-6">
                            <img className="card-img-top mb-md-0"
                                 src={tof} alt="..."/>
                        </div>
                        <div className="col-md-6 top-detail">
                            {/*<div className="small mb-1">SKU: BST-498</div>*/}
                            <h1 className="display-5 fw-bolder">Shop item template</h1>
                            <div className="fs-5 mb-2">
                                <span className="article-price">$40.00</span>
                            </div>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at
                                dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus
                                eius blanditiis delectus ipsam minima ea iste laborum vero?</p>
                            <div className="d-flex">
                                <input className="form-control text-center me-3" id="inputQuantity" type="number"
                                       value="1" style={{maxWidth: '3rem'}}/>
                                <button className="btn btn-outline-dark flex-shrink-0" type="button">
                                    <i className="bi-cart-fill me-1"></i>
                                    Add to cart
                                </button>
                            </div>
                            <div className='product-info'>
                                <div className="features">
                                    <h4>Caracteristiques</h4>
                                    <ul>
                                        <li>Qualité supérieur</li>
                                        <li>Souple</li>
                                        <li>Protectrice</li>
                                        <li>Lorem ipsum.</li>
                                    </ul>
                                </div>
                                <div className="composition">
                                    <h4>Composition</h4>
                                    <ul>
                                        <li>Lorem ipsum dolor</li>
                                        <li>Lorem.</li>
                                        <li>Lorem ipsum.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5 bg-light">
                <div className="container px-4 px-lg-5">
                    <h2 className="fw-bolder mb-1">Articles smilaires</h2>
                    <ProductList/>
                </div>
            </section>
        </>
    )
}

export default ProductDetails
