import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Pagination, Mousewheel } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Champion, Trailer, Wellcome } from "../components/homeSection";

import { championsData } from "../assets/dummy";
import ChampionDetail from "../components/homeSection/champion/ChampionDetail";
import Credit from "../components/homeSection/credit/Credit";

SwiperCore.use([Mousewheel, Pagination, EffectFade]);

const swiperOptions = {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  pagination: true,
  effect: "fade",
  speed: 800,
  grabCursor: true
};

const Home = () => {
  return (
    <>
      <Swiper {...swiperOptions}>
        <SwiperSlide>
          {({ isActive }) => <Wellcome isActive={isActive} />}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => <Champion isActive={isActive} />}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => <Trailer isActive={isActive} />}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => <Credit isActive={isActive} />}
        </SwiperSlide>
      </Swiper>

      {championsData.map((item, index) => (
        <ChampionDetail key={index} item={item} id={index} />
      ))}
    </>
  );
};

export default Home;
