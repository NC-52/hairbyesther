import React, {useEffect, useState} from 'react'
import './image-slider.style.css'
import {message} from "antd";

const SlideIndicator = ({currentSld, numOfSld, handleSlideSelection}) => {
    return <>
        <div className="slider-slide-indicator">
            {
                Array(numOfSld).fill(0).map((_, index) => (
                    <div
                        key={index}
                        className="dot mr-2"
                        onClick={() => handleSlideSelection(index)}
                        style={{
                            background: `${currentSld === index ? '#ad5c05' : 'none'}`,
                            transition: 'all .3s ease-in-out'
                        }}
                    >
                        {index + 1}
                    </div>
                ))
            }
        </div>
    </>
}

const SliderMarketingMessage = ({title, marketingMessage}) => {
    return <div className='slider-marketing-message'>
        <div className="content">
            <span className='mrk-title'>{title}</span>
            <span className='mrk-message'>{marketingMessage}</span>
        </div>
    </div>
}

function ImageSlider({
                         sliderObject = [],
                         autoPlay = true,
                         playTime = 5000,
                         ...restOfProps
                     }) {

    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = (current = currentSlide) => current < sliderObject.length - 1 ? current + 1 : 0

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentSlide(nextSlide())
        }, playTime)
        //    Always clear timer if there is more dependencies
        return () => clearTimeout(timer)
    }, [currentSlide])

    return <>
        <div className="slider-wrapper" {...restOfProps}>
            {
                sliderObject.map((slideObj, index) => (
                    <div
                        key={index}
                        className='slider-slide'
                        style={{
                            backgroundImage: `url(${slideObj.image})`,
                            marginLeft: index === 0 ? `-${currentSlide * 100}%` : undefined,
                        }}
                    >
                        <SliderMarketingMessage {...slideObj}/>
                    </div>
                ))
            }
            <SlideIndicator
                currentSld={currentSlide}
                numOfSld={sliderObject.length}
                handleSlideSelection={(i) => nextSlide(i)}
            />
        </div>
    </>
}

export default ImageSlider
