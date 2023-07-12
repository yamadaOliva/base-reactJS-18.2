import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { Items1, Items2, Items3 } from "./Items";
import { FaEye } from "react-icons/fa";
import { useState, useEffect } from "react";
import "./RequestList.scss";
import Request3 from "./Request3";
import { getReQuestUser } from "../../service/requestService";
import { useSelector } from "react-redux";
export default function RequesetUser() {
  //[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14
  const user = useSelector((state) => state.user);
  const [pendingList, setPendingList] = useState([]);
  const [acceptedList, setAcceptedList] = useState([]);
  const [currentRequest, setCurrentRequest] = useState({});
  const getReQuestUserService = async () => {
    try {
      const response = await getReQuestUser(user.id);
      console.log("response", response);
      if (+response.EC == 200) {
        setPendingList(response.DT.filter((item) => item.status == "pending"));
        setAcceptedList(
          response.DT.filter(
            (item) => item.status == "accepted" || item.status == "done"
          )
        );
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    console.log("pendingList", pendingList);
    console.log("acceptedList", acceptedList);
  }, [pendingList, acceptedList]);
  useEffect(() => {
    getReQuestUserService();
  }, []);
  const eyeClick = (item, cline) => {
    console.log("item", item, cline);
    setCurrentRequest(item);
    ShowPopup(cline);
  };
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);

  const [buttonPopup1, setButtonPopup1] = useState(false);
  const [buttonPopup2, setButtonPopup2] = useState(false);

  const preItem1 = () => {
    if (index1 > 0) setIndex1(index1 - 1);
  };
  const nextItem1 = () => {
    if (index1 <= Items1.length - 2) setIndex1(index1 + 1);
  };
  const preItem2 = () => {
    if (index2 > 0) setIndex2(index2 - 1);
  };
  const nextItem2 = () => {
    if (index2 <= Items2.length - 2) setIndex2(index2 + 1);
  };
  const convertDateToYMD = (date) => {
    var date = new Date(date);
    var str =
      date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
    return str;
  };
  function Show(item, index, cline) {
    var items = [];
    for (var i = index; i < item.length; i++) {
      let current = item[i];
      items.push(
        <div className="item">
          <h1 className="name">{item[i].Maid_profile.last_name}</h1>
          <h1 className="date">{convertDateToYMD(item[i].start_date)}</h1>
          <h1 className="cost">{item[i].price}</h1>
          <FaEye
            className="icon-eye"
            onClick={() => eyeClick(current, cline)}
          />
        </div>
      );
    }
    return items;
  }

  function ShowPopup(cline) {
    switch (cline) {
      case 1:
        setButtonPopup1(true);
        break;
      case 2:
        setButtonPopup2(true);
        break;
    }
  }

  return (
    <div className={"req-list-container"}>
      <h1 className={"req-title"}>送信したリクエスト</h1>
      <div className="carousel-rq">
        <img
          src={window.location.origin + "/images/pre.png"}
          alt=""
          className="icon-pn"
          onClick={preItem1}
        />
        <div className="inner-carousel">{Show(pendingList, index1, 1)}</div>
        <img
          src={window.location.origin + "/images/next.png"}
          alt=""
          className="icon-pn"
          onClick={nextItem1}
        />
      </div>
      <h1 className={"req-title"}>完成したリクエスト</h1>
      <div className="carousel-rq">
        <img
          src={window.location.origin + "/images/pre.png"}
          alt=""
          className="icon-pn"
          onClick={preItem2}
        />
        <div className="inner-carousel">{Show(acceptedList, index2, 1)}</div>
        <img
          src={window.location.origin + "/images/next.png"}
          alt=""
          className="icon-pn"
          onClick={nextItem2}
        />
      </div>
      <Request3
        trigger={buttonPopup1}
        setTrigger={setButtonPopup1}
        request={currentRequest}
        doneList={pendingList}
        setDoneList={setPendingList}
      ></Request3>
      <Request3 trigger={buttonPopup2} setTrigger={setButtonPopup2}></Request3>
    </div>
  );
}
