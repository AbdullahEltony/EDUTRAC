/* eslint-disable no-unused-vars */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useState } from 'react';
import { testimonials } from '../../constants';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ClientSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="md:px-0 max-w-full">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={25}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        onSwiper={(swiper) => setActiveIndex(swiper.activeIndex)}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
         initialSlide={6}
        className="!pb-10"
      >
        {testimonials.map((client, index) => {
          // logic for middle slide
          const slidesPerView =
            window.innerWidth >= 1200
              ? 3
              : window.innerWidth >= 640
              ? 2
              : 1;
          const middleIndex = activeIndex + Math.floor(slidesPerView / 2);

          const isMiddle = index === middleIndex;

          return (
            <SwiperSlide key={client.id}>
              <motion.div
                className={`p-6 pb-2 shadow-lg border-[3px] border-[#6CA6CD] rounded-lg ${
                  isMiddle ? 'bg-[#88b2d5ca]' : 'bg-[#EFF4F8]'
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: client.id * 0.2 }}
              >
                <p className="text-black text-right mb-8 font-normal font-[Almarai]">
                  {client.message}
                </p>
                <div className="flex items-center gap-2">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-12 h-12 rounded-full object-fill"
                  />
                  <div className="text-right">
                    <h4 className="font-semibold text-black mb-1">
                      {client.name}
                    </h4>
                    <p className="text-sm text-[#00000094]">{client.work}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
