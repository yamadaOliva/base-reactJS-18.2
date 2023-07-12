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
    <div id="landing-container" className="h-full">
      <div className="flex flex-col h-full items-center">
        <div className="relative">
          <div className="absolute top-0 left-0 w-[600px] ">
            <span className="font-bold text-[30px]">
              新しいメンバーですか？
              <br />
              サインアップしてください！
            </span>
            <div className="flex flex-row gap-15 mt-2 -ml-10">
              <NavLink
                to="/user"
                className="text-black text-[20px] font-bold py-2 px-4 rounded"
              >
                メイドを見つける
              </NavLink>
              <NavLink
                to="/"
                className="text-black text-[20px] font-bold py-2 px-4 rounded"
              >
                私はメイドです。
              </NavLink>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full h-full">
          <div id="landing-content" className="w-9/12 h-full flex flex-col">
            <div className="banner w-full bg-cover h-[60%]" />
            <Carousel classes="w-11/12 h-[35%] mt-6" maidList={maidList} />
          </div>
          <div
            id="landing-advertisement"
            className="font-delius bg-[#D9D9D9] h-full w-3/12"
          >
            <div className="">advertisement</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
