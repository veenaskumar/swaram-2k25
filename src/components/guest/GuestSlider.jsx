import React, { useRef, useState , useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper'
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import '../../stylesheet/guest.css';
import { FreeMode, Pagination } from 'swiper/modules';
import confetti from 'canvas-confetti';

export default function GuestSlider() {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 748) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(3);
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Call on mount to set initial slidesPerView value

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef(null);
  useEffect(() => {
    console.log("Hii");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          console.log("Contact component is visible");
        } else {
          setIsVisible(false);
        }
      });
    });

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    // Clean up observer
    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      confetti({
        particleCount: 2000,
        spread: 700,
        origin: { y: 0.4 },
      });
    }
  }, [isVisible]);


  SwiperCore.use([Autoplay,Pagination]);
  return (
    <>
    <div className='flex justify-center items-center'> 
     <div ref={contactRef} className="mt-[30px] mb-[20px] font-semibold text-6xl text-white-400 ">Pro <span className='text-[red]'>Shows</span></div>
     </div>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000, // Set the delay in milliseconds between slides
          disableOnInteraction: false, // Allow interaction to stop autoplay
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}

