import React from 'react'
import './card.style.css'
import img from './product_05.jpg'

const CardComponent = () => {
    return (
        <div className="col-lg-4 col-md-4 all gra product-card-container">
            <div className='product-card-content'>
                <img src={img} className="product-card-image" alt=""/>
                <div className="name-n-price">
                    <h4>Product name</h4>
                    <span>$12.5</span>
                </div>
            </div>
        </div>
    )
}

export default CardComponent
