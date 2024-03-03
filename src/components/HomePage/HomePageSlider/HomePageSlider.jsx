import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import classes from "./HomePageSlider.module.css"

import img1 from "../../../assets/SoulFighterJhin.png"
import img2 from "../../../assets/DarkCosmicJhin.png"
import img3 from "../../../assets/EmpyreanJhin.png"
import img4 from "../../../assets/PROJECTJhin.png"
import img5 from "../../../assets/OldWestJhin.png"
import img6 from "../../../assets/ShanHaiScrollsJhin.png"
import img7 from "../../../assets/BloodMoonJhin.png"

const items = [img1, img2, img3, img4, img5, img6, img7]

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
                {items.map((item, index) => (
                    <SwiperSlide className={classes.cards} key={index}>
                        <div className={classes.imgContainer}>
                            <img className={classes.img} src={item} />
                        </div>
                        <a className={classes.productName}>Jhin Soulfighter</a>
                        <p>R$200,00</p>
                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    )
}