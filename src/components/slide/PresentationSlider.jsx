import React from 'react'
import './presentationSliderStyle.css'
import slide from './images/slider-img.png'
import hairby1 from './images/hairby1.png'

const PresentationSlider = (props) => {
    return (
        <section className="slider_section">
            <div className="slider_container">
                <div id="carouselExampleIndicators" className="container carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="detail-box">
                                            <h1 className="slide-into-title">
                                                Mes dames, <br/>
                                                vous satisfaire est notre priorité,
                                            </h1>
                                            <p className="intro-description">
                                                Nous mettons à votre disposition une grande variété de produits et services pour
                                                vous permettre de trouver la meilleur solution qui vous ira le mieux. Nous sommes
                                                à votre disposition.
                                            </p>
                                            <a href="">
                                                Les Produits
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-5 ">
                                        <div className="img-box">
                                            <img src={slide} alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item ">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="detail-box">
                                            <h1 className="slide-into-title">
                                                Bienvenu sur <br/>
                                                Hair by Esther
                                            </h1>
                                            <p className="intro-description">
                                                Trouvez une gamme de produits pour rélever la splandeur de votre visage, mais aussi de votre peau et soyez toujours magnifique.
                                            </p>
                                            <a href="">
                                                Les Produits
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-5 ">
                                        <div className="img-box">
                                            <img src={slide} alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item ">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="detail-box">
                                            <h1 className="slide-into-title">
                                                Une diversité de <br/>
                                                Produits
                                            </h1>
                                            <p className="intro-description">
                                                Trouvez tout ce qu'il vous faut pour rester fresh et rayonnante en tout occasion, péruques, broching, make-up, conseils, etc. Nous sommes à votre disposition.
                                            </p>
                                            <a href="">
                                                Les Produits
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-5 ">
                                        <div className="img-box">
                                            <img src={slide} alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<div className="carousel_btn-box">*/}
                    {/*    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"*/}
                    {/*       data-slide="prev">*/}
                    {/*        <i className="fa fa-arrow-left" aria-hidden="true"></i>*/}
                    {/*        <span className="sr-only">Previous</span>*/}
                    {/*    </a>*/}
                    {/*    <img src="images/line.png" alt=""/>*/}
                    {/*    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"*/}
                    {/*       data-slide="next">*/}
                    {/*        <i className="fa fa-arrow-right" aria-hidden="true"></i>*/}
                    {/*        <span className="sr-only">Next</span>*/}
                    {/*    </a>*/}
                    {/*</div>*/}
                </div>
            </div>
        </section>
    )
}

export default PresentationSlider