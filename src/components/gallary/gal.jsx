import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import '../stylesheet/gal.css';
import { Grid, Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper'

function Gallary() {
  SwiperCore.use([Autoplay,Pagination]);
  return (
    <div id='gallary' className='h-[100vh] mt-[50px] bg-black'>
 <div className="ml-[49%] mt-[10%] text-4xl text-white h-10 pt-10 mb-[100px]">Gallery</div>
          <Swiper
  slidesPerView={3}
  loop={true}
  grid={{
    rows: 2,
  }}
  spaceBetween={30}
  pagination={{
    clickable: true,
  }}
  autoplay={{
    delay: 3000, // Set the delay in milliseconds between slides
    disableOnInteraction: false, // Allow interaction to stop autoplay
  }}
  modules={[Autoplay,Grid,Pagination]}
  className="mySwiper"
>
  <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEipDx8ZUftKodiwlMGV08mqgayI-pzmczGOH5fNlmbA&s" /></SwiperSlide>
  <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEipDx8ZUftKodiwlMGV08mqgayI-pzmczGOH5fNlmbA&s" /></SwiperSlide>
  <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEipDx8ZUftKodiwlMGV08mqgayI-pzmczGOH5fNlmbA&s" /></SwiperSlide>
  <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEipDx8ZUftKodiwlMGV08mqgayI-pzmczGOH5fNlmbA&s" /></SwiperSlide>
  <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEipDx8ZUftKodiwlMGV08mqgayI-pzmczGOH5fNlmbA&s" /></SwiperSlide>
  <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEipDx8ZUftKodiwlMGV08mqgayI-pzmczGOH5fNlmbA&s" /></SwiperSlide>
  <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEipDx8ZUftKodiwlMGV08mqgayI-pzmczGOH5fNlmbA&s" /></SwiperSlide>
  <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEipDx8ZUftKodiwlMGV08mqgayI-pzmczGOH5fNlmbA&s" /></SwiperSlide>
  <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEipDx8ZUftKodiwlMGV08mqgayI-pzmczGOH5fNlmbA&s" /></SwiperSlide>
  <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEipDx8ZUftKodiwlMGV08mqgayI-pzmczGOH5fNlmbA&s" /></SwiperSlide>
  <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEipDx8ZUftKodiwlMGV08mqgayI-pzmczGOH5fNlmbA&s" /></SwiperSlide>
</Swiper>

    </div>
  )
}

export default Gallary