import classes from "./ProductDetailsImageSlider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";

export const ProductDetailsImageSlider = ({ product }) => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1.current);
        setNav2(sliderRef2.current);
    }, []);

    const images = product.imageURLs;
    
    console.log(images)

    return (
        <div className={classes.slider_container}>
            <Slider asNavFor={nav2} ref={slider => (sliderRef1.current = slider)}>
                {
                    images.map((item, index) => (
                        <span key={index}>
                            <img className={classes.img} src={item} alt={`Image ${index + 1}`} />
                        </span>
                    ))
                }
            </Slider>
            <Slider
                asNavFor={nav1}
                ref={slider => (sliderRef2.current = slider)}
                slidesToShow={4}
                swipeToSlide={true}
                focusOnSelect={true}
            >
                {
                    
                    images.map((item, index) => (
                        <span key={index}>
                            <img className={classes.preview_img} src={`../../../../public/${item}`} alt={`Image ${index + 1}`} />
                        </span>
                    ))
                }
            </Slider>
        </div>
    );
}

ProductDetailsImageSlider.propTypes = {
    product: PropTypes.shape({
        imageURLs: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    }).isRequired,
};
