import './index.scss'
import {FaCartArrowDown} from "react-icons/fa";
import React from "react";
import {Autoplay} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {useGetAllBannersQuery} from "../../service/usersApi.jsx";
import {BANNER_URL} from "../../constants.js";


function Banner() {

    const {data: getAllBanners} = useGetAllBannersQuery()
    const banners = getAllBanners?.data

    return (
        <section id={"banner"}>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {banners && banners.map((banner) => (
                    <SwiperSlide>
                        <div className={"img"}
                             style={{backgroundImage: `url(${BANNER_URL}${banner?.imageName})`}}
                        >
                            <h3>{banner?.subTitle}</h3>
                            <h2>{banner?.title}</h2>
                            {banner?.link === null ? (<></>) : (
                                <button>
                                    <span>Ətraflı oxu</span>
                                </button>
                            )}
                        </div>
                        <div className={"layer"}></div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default Banner;