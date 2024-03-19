import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import classes from "./HomePageSlider.module.css"

import products from "../../../../public/data.json"
import { Link } from 'react-router-dom';
import { formatCurrancy } from '../../../utilities/formatCurrancy';

export const HomePageSlider = () => {
    const shuffledProducts = products.sort(() => Math.random() - 0.5);

    const slicedProducts = shuffledProducts.slice(0, 7);

    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={70}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 50,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1250: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                modules={[Autoplay, Pagination]}
                className={classes.swiper}
            >
                {slicedProducts.map((product, index) => (
                    <SwiperSlide key={index}>
                        <Link className={classes.cards} to={`/product/${product.id}`} >
                            <img className={classes.img} src={product.imageURLs[0]} alt={product.productName} />
                            <p className={classes.product_name}>{product.productName}</p>
                            <p>{formatCurrancy(product.price)}</p>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}
