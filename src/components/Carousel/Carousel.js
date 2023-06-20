import { useSwiper } from "swiper/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  ChevronLeftIcon as LeftIcon,
  ChevronRightIcon as RightIcon,
} from "@heroicons/react/24/outline";
// Import Swiper styles
import "swiper/css";
import {useEffect, useState} from "react";

function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button
      onClick={() => swiper.slideNext()}
      className="absolute right-0 top-1/2 z-10"
    >
      <RightIcon className="h-10 w-10 bg-cyan-300" />
    </button>
  );
}

function SlidePrevButton() {
  const swiper = useSwiper();
  return (
    <button
      onClick={() => swiper.slidePrev()}
      className="absolute left-0 top-1/2 z-10"
    >
      <LeftIcon className="h-10 w-10 bg-cyan-300" />
    </button>
  );
}

const MySwiper = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(props.maidList);
  }, [props.maidList]);
  return (
    <Swiper
      className="w-10/12 mt-10 mx-auto bg-gray-100 rounded-xl shadow-xl z-0"
      spaceBetween={20}
      slidesPerView={4}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map((item) => (
        <SwiperSlide className="h-80">
          <div key={item.id} className="flex flex-row justify-center z-0">
            <img
              src={item.avatar_url}
              alt={item.last_name}
              className="w-full"
              
            />
          </div>
        </SwiperSlide>
      ))}
      <SlidePrevButton />
      <SlideNextButton />
    </Swiper>
  );
};

export default MySwiper;
