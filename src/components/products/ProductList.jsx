import React from 'react'
import './productListStyle.css'
import prod06 from './images/product_06.jpg'
import CardComponent from "../card/Card.component";

const ProductList = (props) => {
    return (
        <div className='container mt-2'>
            <div className="row grid">
                <CardComponent img={prod06}/>
                <CardComponent img={prod06}/>
                <CardComponent img={prod06}/>
                <CardComponent img={prod06}/>
            </div>

        </div>
    )
}
export default ProductList
