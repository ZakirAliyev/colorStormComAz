import './index.scss'
import {FaCartArrowDown} from "react-icons/fa";
import React from "react";
import {Autoplay} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


function Banner() {
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
                <SwiperSlide>
                    <div className={"img"}>
                        <h3>Exclusive Auction of Luxuries</h3>
                        <h2>Timeless Treasures A Vintage Auction Experience</h2>
                        <button>
                            <FaCartArrowDown className={"icon"}/>
                            <span>Sifariş et</span>
                        </button>
                    </div>
                    <div className={"layer"}></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"img"}>
                        <h3>Exclusive Auction of Luxuries</h3>
                        <h2>Timeless Treasures A Vintage Auction Experience</h2>
                        <button>
                            <FaCartArrowDown className={"icon"}/>
                            <span>Sifariş et</span>
                        </button>
                    </div>
                    <div className={"layer"}></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"img"}>
                        <h3>Exclusive Auction of Luxuries</h3>
                        <h2>Timeless Treasures A Vintage Auction Experience</h2>
                        <button>
                            <FaCartArrowDown className={"icon"}/>
                            <span>Sifariş et</span>
                        </button>
                    </div>
                    <div className={"layer"}></div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}

export default Banner;