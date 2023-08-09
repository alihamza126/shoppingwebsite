import React from 'react'
import { sliderImg } from '../../Products-Data/Sliderdata';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination,A11y,Mousewheel,Autoplay,Navigation,EffectCoverflow} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/keyboard';
import 'swiper/css/mousewheel';
import 'swiper/less/navigation';

const HomeSlide = () => {
  return (
    <div className='h-slider'>
      <Swiper
        modules={[Pagination,A11y,Mousewheel,Autoplay,EffectCoverflow,Navigation]}
        spaceBetween={0}
        mousewheel
        autoplay
        navigation={{navigation:true}}
        slidesPerView={1}
        pagination={{ clickable: true }}
        effect='coverflow'
      >
        {sliderImg.map((ele, index) => {
          return (
            <SwiperSlide>
              <div className="s-slilde">
                <img src={ele.img} />
                <div className="s-slide-caption">
                  <h3>{ele.name}</h3>
                  <p>{ele.detail}</p>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default HomeSlide