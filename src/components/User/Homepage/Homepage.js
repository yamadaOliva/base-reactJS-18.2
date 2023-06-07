import { Button, Carousel } from "@material-tailwind/react";
import { MagnifyingGlassIcon as SearchIcon } from "@heroicons/react/24/outline";
const HomePage = () => {
  return (
    <div className="container mx-auto relative">
      <Button className="relative bg-cyan-300 text-black z-50 flex flex-row -top-12 mx-auto w-[300px] items-center justify-center drop-shadow-[0px_10px_3px_rgba(0,0,0,0.50)] rounded-3xl">
        <SearchIcon className="h-5 w-5 mr-2" />

        <span>To search page</span>
      </Button>
      <div
        id="carousel-container"
        className="bg-gray-200 absolute top-0 w-full z-0 overflow-hidden"
      >
        <Carousel>
          <img
            src="https://picsum.photos/200"
            alt="First slide"
          />
        </Carousel>
      </div>
    </div>
  );
};

export default HomePage;
