import { useSwiper } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  ChevronLeftIcon as LeftIcon,
  ChevronRightIcon as RightIcon,
} from "@heroicons/react/24/outline";
import { MaidDetail } from "../MaidList/MaidDetail";
import "./Carousel.scss"
// Import Swiper styles
import "swiper/css";
import { useEffect, useState } from "react";

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
  const [isShowDetail, setIsShowDetail] = useState(false);
  const [maid, setMaid] = useState({});
  const handleClose = () => {
    setIsShowDetail(false);
  };
  useEffect(() => {
    setData(props.maidList);
  }, [props.maidList]);
  const handleImageClick = (e, item) => {
    setMaid(item);
    setIsShowDetail(true);
  };
  return (
    <>
      <Swiper
        className={`${props.classes} bg-white rounded-xl shadow-xl z-0`}
        spaceBetween={20}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((item) => (
          <SwiperSlide>
            <div
              key={item.id}
              className={`flex flex-col justify-center z-0 ${
                props?.carouselName ? "h-[95%]" : "h-full"
              }`}
            >
              <img
                src={item.avatar_url}
                alt={item.last_name}
                className="w-full h-[75%] img-maid"
                onClick={(e) => handleImageClick(e, item)}
              />
              {item?.last_name ? (
                <div className="text-center">
                  <span className="text-2xl font-bold">{item.last_name}</span>
                </div>
              ) : null}
            </div>
          </SwiperSlide>
        ))}
        <SlidePrevButton />
        <SlideNextButton />
        props?.carouselName ? (
        <div className="absolute bottom-0 left-0 w-full z-10">
          <div className="flex flex-col items-center text-2xl  mb-2">
            {props.carouselName}
          </div>
        </div>
        ) : null
      </Swiper>
      <MaidDetail show={isShowDetail} handleClose={handleClose} maid={maid} />
    </>
  );
};

export default MySwiper;
