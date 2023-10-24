// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

import Image from "next/image";

import slider from "@/public/images/slider.png";
import {A11y, Pagination} from "swiper/modules";
import Link from "next/link";

export default function Slider() {
  return (
    <section className="my-10 ">
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{clickable: true}}
        scrollbar={{draggable: true}}
        className="rounded-xl ">
        <SwiperSlide>
          <Link href="/">
            <Image
              src={slider}
              width="1000"
              height="1000"
              className="w-full max-w-full h-auto object-cover"
              alt="slider"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/">
            <Image
              src={slider}
              width="1000"
              height="1000"
              className="w-full max-w-full h-auto object-cover"
              alt="slider"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/">
            <Image
              src={slider}
              width="1000"
              height="1000"
              className="w-full max-w-full h-auto object-cover"
              alt="slider"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/">
            <Image
              src={slider}
              width="1000"
              height="1000"
              className="w-full max-w-full h-auto object-cover"
              alt="slider"
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
