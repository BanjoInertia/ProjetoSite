import classes from "./ProductDetailsImageSlider.module.css"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";

export const ProductDetailsImageSlider = ({ imageURLs }) => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);

    return (
        <div className={classes.slider_container}>
            <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)}>
                {
                    imageURLs.map((item, index) => (
                        <div key={index}>
                            <img className={classes.img} src={item} alt={item.productName} />
                        </div>
                    ))
                }
            </Slider>
            <Slider
                asNavFor={nav1}
                ref={slider => (sliderRef2 = slider)}
                slidesToShow={4}
                swipeToSlide={true}
                focusOnSelect={true}
            >
                {
                    imageURLs.map((item, index) => (
                        <div key={index}>
                            <img className={classes.preview_img} src={item} alt='jofe' />
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

ProductDetailsImageSlider.propTypes = {
    imageURLs: PropTypes.arrayOf(PropTypes.shape({
        image: PropTypes.string.isRequired
    })).isRequired,
};