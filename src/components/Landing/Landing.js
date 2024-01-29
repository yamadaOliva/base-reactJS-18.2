import "./style.css";
import { NavLink } from "react-router-dom";
import Carousel from "../Carousel/Carousel";
import { useEffect, useState } from "react";
import { MaidListService } from "../../service/maidService";
import { get } from "lodash";
function Landing() {
  const [maidList, setMaidList] = useState([]);
  const getMaidList = async () => {
    try {
      const response = await MaidListService(10, 1);
      setMaidList(response.DT.maidList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMaidList();
  }, []);

  return (
    <div id="landing-container container" className="h-full">
      <div className="flex flex-col h-full items-center">
        <div className="relative">
          <div className="absolute top-0 left-50 w-[600px] ">
            <span className="font-bold text-[24px]">
              Bạn là người giúp việc
              <br />
              Hoặc bạn cần người giúp việc?
            </span>
            <div className="flex flex-row gap-15 mt-2 -ml-10">
              <NavLink
                to="/user"
                className="text-red  text-[20px] font-bold py-2 px-4 rounded"
              >
                Tôi cần người giúp việc
              </NavLink>
              <NavLink
                to="/"
                className="text-red text-[20px] font-bold py-2 px-4 rounded"
              >
                Tôi là người giúp việc
              </NavLink>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full h-full">
          <div id="landing-content" className="w-11/12 h-full flex flex-col">
            <div className="banner w-full bg-cover h-[60%]" />
            <Carousel classes="w-11/12 h-[35%] mt-6" maidList={maidList} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
