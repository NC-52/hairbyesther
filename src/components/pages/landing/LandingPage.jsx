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

const slideObject = [
    {
        title: 'Slide 1',
        marketingMessage: 'Slide 1 marketing message',
        image: img1
    },
    {
        title: 'Slide 2',
        marketingMessage: 'Slide 2 marketing message',
        image: img2
    },
    {
        title: 'Slide 3',
        marketingMessage: 'Slide 3 marketing message',
        image: img3
    },
    {
        title: 'Slide 4',
        marketingMessage: 'Slide 4 marketing message',
        image: img4
    },
    {
        title: 'Slide 5',
        marketingMessage: 'Slide 5 marketing message',
        image: img5
    },
]

const LandingPage = () => {
    return (
        <>
            <ImageSlider sliderObject={slideObject}/>
            {/*<PresentationSlider/>*/}
            <ProductList title='Top tendance'/>
            {/*<AuthorPresentation/>*/}
        </>
    )
}

export default LandingPage
