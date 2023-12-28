import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const DesignSlider = ({ portfolio }) => {

    console.log(portfolio);

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
                navigation={true}
                className="mySwiper"
            >
                {
                    portfolio?.map((singlePortfolio, _idx) => (
                        <SwiperSlide key={_idx}>
                            <div className='border mt-2'>
                                <img src={singlePortfolio?.image} alt="" />

                                <p className='text-sm font-medium px-3 my-2'>{singlePortfolio?.title}</p>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default DesignSlider;