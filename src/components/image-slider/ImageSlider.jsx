import React from 'react'
import './image-slider.style.css'

function ImageSlider({images = [], ...restOfProps}) {
    return <>
        <div className="slider-wrapper" {...restOfProps}>
            {
                images.map((img, index) => (
                    <div
                        style={{backgroundImage: `url(${img})`}}
                        className='slider-slide'
                        key={index}
                    >

                    </div>
                ))
            }
        </div>
    </>
}

export default ImageSlider
