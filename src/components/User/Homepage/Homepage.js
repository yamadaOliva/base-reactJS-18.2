import { Button } from "@material-tailwind/react";
import { MagnifyingGlassIcon as SearchIcon } from "@heroicons/react/24/outline";
import { useSwiper } from "swiper/react";
import Carousel from "../../Carousel/Carousel";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex w-full justify-center z-0">
        <Button className="absolute bg-cyan-300 text-black z-50 flex flex-row top-8 mx-auto w-[300px] items-center justify-center drop-shadow-[0px_10px_3px_rgba(0,0,0,0.50)] rounded-3xl">
          <SearchIcon className="h-5 w-5 mr-2" />

          <span>To search page</span>
        </Button>
      </div>
      <Carousel />
      <Carousel />
    </div>
  );
};

export default HomePage;
