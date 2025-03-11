"use client";
import Link from "next/link";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay],
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  freeMode: true,
  speed: 2000, // Adjust speed for smooth continuous scrolling
  autoplay: {
    delay: 0, // Ensures continuous autoplay without delay
    disableOnInteraction: false,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1350: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
};

export default function LogoSlider() {
  return (
    <>
      <Swiper {...swiperOptions} className="testimonials-3 owl-carousel">
        <SwiperSlide className="single-testimonial movingLogoSetting">
          <div>
            <img src="/assets/img/about/payment-5.webp" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="single-testimonial movingLogoSetting">
          <div>
            <img src="/assets/img/about/payment-5.webp" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="single-testimonial movingLogoSetting">
          <div>
            <img src="/assets/img/about/payment-5.webp" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="single-testimonial movingLogoSetting">
          <div>
            <img src="/assets/img/about/payment-5.webp" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="single-testimonial movingLogoSetting">
          <div>
            <img src="/assets/img/about/payment-5.webp" alt="" />
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide className="single-testimonial movingLogoSetting">
          <div>
            <img src="/assets/img/about/payment-5.webp" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
