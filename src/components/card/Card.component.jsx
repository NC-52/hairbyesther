import React from 'react'
import './card.style.scss'

const CardComponent = () => {
    return (
        <div className="col-4">
            <div className="view overlay">
                <img src="https://mdbootstrap.com/img/new/standard/city/059.jpg"
                     className="card-img-top"
                     alt="Card city"/>
            </div>
        </div>
    )
}

export default CardComponent
