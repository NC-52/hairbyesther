import React from 'react'
import PresentationSlider from "../../slide/PresentationSlider";
import ProductList from "../../products/ProductList";
import AuthorPresentation from "../../authorPresent/AuthorPresentation";
import ImageSlider from "../../image-slider/ImageSlider";

import img1 from '../../../assets/images/img1.jpg'
import img2 from '../../../assets/images/img2.jpg'
import img3 from '../../../assets/images/img3.jpg'
import img4 from '../../../assets/images/img4.jpg'
import img5 from '../../../assets/images/img5.jpg'

const LandingPage = () => {
    return (
        <>
            <ImageSlider images={[img1, img2, img3, img4, img5]} />
            {/*<PresentationSlider/>*/}
            {/*<ProductList/>*/}
            {/*<AuthorPresentation/>*/}
        </>
    )
}

export default LandingPage
