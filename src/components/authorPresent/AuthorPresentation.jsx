import React from 'react'
import author from './photo/author.jpeg'
import './aboutAuthorStyle.css'

const AuthorPresentation = (props) => {
    return (
        <div className="best-features">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-heading">
                            <h2>Estelle</h2>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="left-content">
                            <h4>Who I'm?</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque culpa dolores ducimus eum excepturi fugiat rem sed tenetur ullam unde! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, necessitatibus.
                            </p>
                            <ul className="featured-list">
                                <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                                <li><a href="#">Consectetur an adipisicing elit</a></li>
                                <li><a href="#">It aquecorporis nulla aspernatur</a></li>
                                <li><a href="#">Corporis, omnis doloremque</a></li>
                                <li><a href="#">Non cum id reprehenderit</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="right-image">
                            <img src={author} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthorPresentation
