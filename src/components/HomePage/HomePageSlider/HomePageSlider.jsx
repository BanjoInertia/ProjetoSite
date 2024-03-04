import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import classes from "./HomePageSlider.module.css"

import products from "../../../../public/data.json"

export const HomePageSlider = () => {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
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
                {products.map((product, index) => (
                    <SwiperSlide className={classes.cards} key={index}>
                        <div className={classes.img_container}>
                            <img className={classes.img} src={product.image} alt={product.productName} />
                        </div>
                        <p className={classes.product_name}>{product.productName}</p>
                        <p>R${product.price}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}