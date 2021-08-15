import React from 'react'
import PresentationSlider from "../../slide/PresentationSlider";
import ProductList from "../../products/ProductList";
import AuthorPresentation from "../../authorPresent/AuthorPresentation";

const LandingPage = () => {
    return (
        <>
            <PresentationSlider/>
            <ProductList/>
            <AuthorPresentation/>
        </>
    )
}

export default LandingPage
