import React, {useEffect, useState} from 'react'
import './image-slider.style.css'

const SlideIndicator = ({currentSld, numOfSld, handleSlideSelection}) => {
    return <>
        <div className="slider-slide-indicator">
            {
                Array(numOfSld).fill(0).map((_, index) => (
                    <div
                        key={index}
                        className="dot mr-2"
                        onClick={()=>handleSlideSelection(index)}
                        style={{
                            background:`${currentSld === index ? '#ad5c05' : 'none'}`,
                            transition: 'all .3s ease-in-out'
                        }}
                    >
                        {index+1}
                    </div>
                ))
            }
        </div>
    </>
}


function ImageSlider({
                         images = [],
                         autoPlay = true,
                         playTime = 5000,
                         ...restOfProps
                     }) {

    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = (current = currentSlide) => current < images.length - 1 ? current + 1 : 0

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
                images.map((img, index) => (
                    <div
                        style={{
                            backgroundImage: `url(${img})`,
                            marginLeft: index === 0 ? `-${currentSlide * 100}%` : undefined,
                        }}
                        className='slider-slide'
                        key={index}
                    >

                    </div>
                ))
            }
            <SlideIndicator
                currentSld={currentSlide}
                numOfSld={images.length}
                handleSlideSelection={nextSlide}
            />
        </div>
    </>
}

export default ImageSlider
