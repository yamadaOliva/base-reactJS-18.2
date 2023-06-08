import { Button } from "@material-tailwind/react";
import { MagnifyingGlassIcon as SearchIcon } from "@heroicons/react/24/outline";
import { useSwiper } from "swiper/react";
import Carousel from "../../Carousel/Carousel";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { MaidListService } from "../../../service/maidService";
const HomePage = () => {
  const [maidList1, setMaidList1] = useState([]);
  const [maidList2, setMaidList2] = useState([]);
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/user");
  };
  const getMaidList = async () => {
    try {
      const res = await MaidListService(10,1);
      setMaidList1(res.DT.maidList);
      const res2 = await MaidListService(10,2);
      setMaidList2(res2.DT.maidList);
      console.log(res.DT.maidList);
      
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMaidList();
  }, []);
  return (
    <div className="flex flex-col">
      <div className="flex w-full justify-center z-0">
        <Button className="absolute bg-cyan-300 text-black z-50 flex flex-row top-8 mx-auto w-[300px] items-center justify-center drop-shadow-[0px_10px_3px_rgba(0,0,0,0.50)] rounded-3xl"
          onClick={handleSearch}
        >
          <SearchIcon className="h-5 w-5 mr-2" />
          
          <span>To search page</span>
        </Button>
      </div>
      <Carousel
        maidList ={maidList1} 
      />
      <Carousel
        maidList ={maidList2} 
      />
    </div>
  );
};

export default HomePage;
