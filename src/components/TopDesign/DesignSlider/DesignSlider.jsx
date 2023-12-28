import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const DesignSlider = ({ portfolio }) => {
    // Generate unique IDs for navigation buttons
    const prevButtonId = `custom-prev-${Math.random().toString(36).substring(7)}`;
    const nextButtonId = `custom-next-${Math.random().toString(36).substring(7)}`;

    return (
        <div>
            <Swiper
                modules={[Navigation]}
                slidesPerView={3}
                spaceBetween={10}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    prevEl: `.${prevButtonId}`,
                    nextEl: `.${nextButtonId}`,
                }}
                className="mySwiper"
            >
                {portfolio?.map((singlePortfolio, _idx) => (
                    <SwiperSlide key={_idx}>
                        <div className='border mt-2'>
                            <img src={singlePortfolio?.image} alt="" />
                            <p className='text-sm font-medium px-3 my-2'>{singlePortfolio?.title}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className='flex justify-between items-center'>
                <button className={`custom-swiper-button bg-red-500 rounded-full text-webPrimary ${prevButtonId}`}>
                    <MdNavigateBefore className='text-2xl' />
                </button>

                <button className={`custom-swiper-button bg-red-500 rounded-full text-webPrimary ${nextButtonId}`}>
                    <MdNavigateNext className='text-2xl' />
                </button>
            </div>
        </div>
    );
};

export default DesignSlider;
