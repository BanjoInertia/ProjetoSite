import mockedData from '../../../../public/data.json';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const ProductDetails = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <div>
      <Slider {...settings}>
        {mockedData.map((image, index) => (
          <div key={index}>
            <img src={image.image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

























// import { useEffect } from 'react';
// import classes from "./ProductDetails.module.css"

// export const ProductDetails = ({ id }) => {
//     const productId = parseInt(id);

//     const product = mockedData.find(item => item.id === productId);

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);

//     if (!product) {
//         return <div>Product not found</div>;
//     }

//     return (
//         <div className={classes.details_container}>
//             <img className={classes.img} src={product.image} alt={product.productName} />
//             <div className={classes.product_information}>
//                 <h2 className={classes.product_name}>{product.productName}</h2>
//                 <p className={classes.product_description}>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, theyll withstand everything the wheather can offer</p>
//                 <p className={classes.product_price}>R${product.price}</p>
//                 <button className={classes.add_to_cart_button}>+ Carrinho</button>
//             </div>
//         </div>
//     );
// }