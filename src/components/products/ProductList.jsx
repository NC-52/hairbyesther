import React from 'react'
import './productListStyle.css'
import prod01 from './images/product_01.jpg'
import prod02 from './images/product_02.jpg'
import prod03 from './images/product_03.jpg'
import prod04 from './images/product_04.jpg'
import prod05 from '../card/product_05.jpg'
import prod06 from './images/product_06.jpg'
import {NavLink} from "react-router-dom";
import CardComponent from "../card/Card.component";

const ProductList = (props) => {
    return (
        // <div className="products">
        //     <div className="container">
        //         <div className="row">
        //             <div className="col-md-12">
        //                 <div className="filters">
        //                     <ul>
        //                         <li className="active" data-filter="*">Meilleurs ventes</li>
        //                         <li data-filter=".des">Péruques</li>
        //                         <li data-filter=".dev">Accessoires</li>
        //                         <li data-filter=".gra">Nouvautés</li>
        //                     </ul>
        //                 </div>
        //             </div>
        //             <div className="col-md-12">
        //                 <div className="filters-content">
        //                     <div className="row grid">
        //                         <div className="col-lg-4 col-md-4 all des">
        //                             <div className="product-item">
        //                                 <a href="#"><img src={prod01} alt=""/></a>
        //                                 <div className="down-content">
        //                                     <a href="#"><h4>Tittle goes here</h4></a>
        //                                     <h6>€18.25</h6>
        //                                     <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla
        //                                         aspernatur.</p>
        //                                     <span>Popularité (7/10)</span>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div className="col-lg-4 col-md-4 all dev">
        //                             <div className="product-item">
        //                                 <a href="#"><img src={prod02} alt=""/></a>
        //                                 <div className="down-content">
        //                                     <a href="#"><h4>Tittle goes here</h4></a>
        //                                     <h6>€16.75</h6>
        //                                     <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla
        //                                         aspernatur.</p>
        //                                     <span>Popularité (7/10)</span>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div className="col-lg-4 col-md-4 all gra">
        //                             <div className="product-item">
        //                                 <a href="#"><img src={prod03} alt=""/></a>
        //                                 <div className="down-content">
        //                                     <a href="#"><h4>Tittle goes here</h4></a>
        //                                     <h6>€32.50</h6>
        //                                     <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla
        //                                         aspernatur.</p>
        //                                     <span>Popularité (8/10)</span>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div className="col-lg-4 col-md-4 all gra">
        //                             <div className="product-item">
        //                                 <a href="#"><img src={prod04} alt=""/></a>
        //                                 <div className="down-content">
        //                                     <a href="#"><h4>Tittle goes here</h4></a>
        //                                     <h6>€24.60</h6>
        //                                     <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla
        //                                         aspernatur.</p>
        //                                     <span>Popularité (9/10)</span>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div className="col-lg-4 col-md-4 all dev">
        //                             <div className="product-item">
        //                                 <a href="#"><img src={prod05} alt=""/></a>
        //                                 <div className="down-content">
        //                                     <a href="#"><h4>Tittle goes here</h4></a>
        //                                     <h6>€18.75</h6>
        //                                     <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla
        //                                         aspernatur.</p>
        //                                     <span>Popularité (7/10)</span>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         {/*<div className="col-lg-4 col-md-4 all des">*/}
        //                         {/*    <div className="product-item">*/}
        //                         {/*        <a href="#"><img src={prod06} alt=""/></a>*/}
        //                         {/*        <div className="down-content">*/}
        //                         {/*            <a href="#"><h4> <NavLink to='/product='>Tittle goes here</NavLink></h4></a>*/}
        //                         {/*            <h6>€12.50</h6>*/}
        //                         {/*            <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla*/}
        //                         {/*                aspernatur.</p>*/}
        //                         {/*            <span>Popularité (7/10)</span>*/}
        //                         {/*        </div>*/}
        //                         {/*    </div>*/}
        //                         {/*</div>*/}
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

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
