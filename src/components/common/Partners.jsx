"use client";
import Image from "next/image";
// import { partners } from "@/data/partners";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css'; // Make sure to import Swiper CSS
import { partners } from "src/constants/naviation";

export default function Partners() {
  const swiperOptions = {
    loop: true,
    spaceBetween: 30, // Reduced space between slides for better responsiveness
    speed: 5000, // Slightly reduced speed for smoother experience
    breakpoints: {
      // Responsive breakpoints
      0: {
        slidesPerView: 2, // 2 slides on very small screens
        spaceBetween: 10
      },
      640: {
        slidesPerView: 3, // 3 slides on small screens
        spaceBetween: 20
      },
      768: {
        slidesPerView: 4, // 4 slides on medium screens
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 5, // 5 slides on large screens
        spaceBetween: 40
      }
    },
    modules: [Autoplay],
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: true // Pause on hover for better user experience
    }
  };

  return (
    <div className="py-5">
      <div className="container mx-auto px-4">
        <h5 className="text-center text-sm font-semibold mb-8 tracking-[1px]">
          Preferred by 1,000+ organisations worldwide
        </h5>

        <div className="mb-8">
          <Swiper
            {...swiperOptions}
            className="partners-swiper"
          >
            {partners.map((elm, i) => (
              <SwiperSlide
                key={elm.id}
                className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <Image
                  src={elm.src}
                  width={150}
                  height={60}
                  style={{ objectFit: "contain" }}
                  alt={elm.alt}
                  className="max-w-full h-auto"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}