'use client';

import React from 'react';

import { EffectCoverflow, Mousewheel, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


const photos = [
  '/Equipment1.png',
  '/Equipment2.png',
  '/Equipment3.png',
  '/Equipment4.png',
  '/Equipment5.png',
];

export default function CoverFlow() {
  return (
    <section className="h-[552px] pt-[46px] pb-[76px] bg-navBlack">
      <div className="lg:mx-auto max-w-5xl mx-[1.5rem]">
      <div className='text-center mb-[50px] text-[e5e5e5] text-[46.77px] font-bold font-montserrat font-bold'>OUR
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-emerald-300 to-lime-300 text-[46.77px] font-bold font-montserrat"> EQUIPMENT </span>
      </div>
        <Swiper
          modules={[EffectCoverflow, Pagination, Mousewheel]}
          effect={'coverflow'}
          loop={true}
          spaceBetween={50}
          slidesPerView={3}
          pagination={{
            clickable: true,
          }}
          mousewheel={{
            invert: false,
          }}
          centeredSlides={true}
          grabCursor={true}
          coverflowEffect={{
            rotate: 0,
            slideShadows: false,
          }}
          className="coverflow"
        >
          {photos.map((p, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={p} alt="" className='h-[270px] rounded-[15px]'/>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
