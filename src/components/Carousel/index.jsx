import './carousel.scss'
import RightArrow from '../../assets/right_arrow_carousel.svg'
import LeftArrow from '../../assets/left_arrow_carousel.svg'
import { useState } from 'react'

export default function Slide({imageSlide}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const length = imageSlide.length;

    const nextSlide = () => {
        setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
    };
    
    const previousSlide = () => {
        setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
    };

    return (
        <section className='carousel'>
            {imageSlide.map((imageUrl, index) => {
                return (
                    <div 
                        key={index}
                        style={{backgroundImage: `url(${imageUrl})`, opacity: index === currentIndex ? 1 : 0}}
                    />
                )
            })}
            {imageSlide.length > 1 && 
                <>
                    <img 
                        className='carousel_arrow carousel_arrow_right' 
                        src={RightArrow} 
                        alt="show next slide" 
                        onClick={nextSlide}
                    />
                    <img 
                        className='carousel_arrow carousel_arrow_left' 
                        src={LeftArrow} 
                        alt="show previous slide" 
                        onClick={previousSlide}
                    />
                    <p className='slideCount'>{currentIndex + 1} / {imageSlide.length}</p>
                </>
            } 
        </section>
    )
}
