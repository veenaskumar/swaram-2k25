import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { GallaryImages } from '../../json/Gal';
function GCarsol({ selectedYear }) {
  const initialYear = selectedYear || 2018;
  return (
    <div className="container min-w-[100%]">
      <Swiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 30 },
        480: { slidesPerView: 2, spaceBetween: 20 , pagination :{clickable:true}},
        768: { slidesPerView: 3, spaceBetween: 50 },
        1024: { slidesPerView: 3, spaceBetween: 50 },
      }}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        breakpointsBase=''
        spaceBetween={10}
        slidesPerView={4}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        autoplay={{
          delay: 1200,
          disableOnInteraction: false,
        }}
        
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        className="swiper_container sm:h-[100px] sm:w-[600px] min-w-[100%]"
      >
        {GallaryImages.map((image) =>
          initialYear === image.year ? (
            <SwiperSlide >
              <img src={image.images} alt="slide_image" className="object-cover " />
            </SwiperSlide>
          ) : null
        )}
      </Swiper>
    </div>
  );
}

export default GCarsol;
