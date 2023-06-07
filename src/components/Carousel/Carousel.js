import { useSwiper } from "swiper/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  ChevronLeftIcon as LeftIcon,
  ChevronRightIcon as RightIcon,
} from "@heroicons/react/24/outline";
// Import Swiper styles
import "swiper/css";

const data = [
  {
    id: 1,
    name: "Maid 1",
    imageUrl: "https://picsum.photos/200",
  },
  {
    id: 2,
    name: "Maid 2",
    imageUrl: "https://picsum.photos/200",
  },
  {
    id: 3,
    name: "Maid 3",
    imageUrl: "https://picsum.photos/200",
  },
  {
    id: 4,
    name: "Maid 4",
    imageUrl: "https://picsum.photos/200",
  },
  {
    id: 5,
    name: "Maid 5",
    imageUrl: "https://picsum.photos/200",
  },
  {
    id: 6,
    name: "Maid 6",
    imageUrl: "https://picsum.photos/200",
  },
  {
    id: 7,
    name: "Maid 7",
    imageUrl: "https://picsum.photos/200",
  },
  {
    id: 8,
    name: "Maid 8",
    imageUrl: "https://picsum.photos/200",
  },
];
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

const MySwiper = () => {
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
              src={item.imageUrl}
              alt={item.name}
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
