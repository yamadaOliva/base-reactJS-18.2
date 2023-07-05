import "./RequestList.scss";
import { FaEye } from "react-icons/fa";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { Items1, Items2, Items3 } from "./Items";
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Request1 from "./Request1";
import Request2 from "./Request2";
import Request3 from "./Request3";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getReQuestService } from "../../service/requestService";
import { set } from "lodash";
import socketIOClient from "socket.io-client";
const host = "http://localhost:8000";
function RequestList() {
  const [switch_TF, setSwitch_TF] = useState(true);
  const socketRef = useRef();
  useEffect(() => {
    socketRef.current = socketIOClient.connect(host);
    socketRef.current.on("sendDataServer", (data) => {
      setSwitch_TF(!switch_TF);
    });
  }, []);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [requestList, setRequestList] = useState([]);
  const [pendingList, setPendingList] = useState([]);
  const [acceptedList, setAcceptedList] = useState([]);
  const [doneList, setDoneList] = useState([]);
  const [currentRequest, setCurrentRequest] = useState({}); //[0
  const setRequestListService = async () => {
    try {
      const response = await getReQuestService(user.id);
      console.log("response", response);
      if (+response.EC == 200) {
        setRequestList(response.DT);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  const filerByStatus = () => {
    setPendingList(requestList.filter((item) => item.status == "pending"));
    setAcceptedList(requestList.filter((item) => item.status == "accepted"));
    setDoneList(requestList.filter((item) => item.status == "done"));
  };
  useEffect(() => {
    filerByStatus();
  }, [requestList]);

  useEffect(() => {
    console.log("acceptedList", acceptedList);
    console.log("doneList", doneList);
    console.log("pendingList", pendingList);
  }, [acceptedList, doneList, pendingList]);
  useEffect(() => {
    if (+user.role != 2) {
      toast.error("You don't have permission to access this page");
      navigate("/");
    }
    setRequestListService();
  }, []);
  const eyeClick = (item, cline) => {
    console.log("item", item, cline);
    setCurrentRequest(item);
    ShowPopup(cline);
  };
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [index3, setIndex3] = useState(0);

  const [buttonPopup1, setButtonPopup1] = useState(false);
  const [buttonPopup2, setButtonPopup2] = useState(false);
  const [buttonPopup3, setButtonPopup3] = useState(false);

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
  const preItem3 = () => {
    if (index3 > 0) setIndex3(index3 - 1);
  };
  const nextItem3 = () => {
    if (index3 <= Items3.length - 2) setIndex3(index3 + 1);
  };
  const convertDateToYMD = (date) => {
    var date = new Date(date);
    var str =
      date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
    return str;
  };
  useEffect(() => {
    setRequestListService();
  }, [switch_TF,socketRef.current]);
  useEffect(() => {
    console.log("currentRequest", currentRequest);
  }, [currentRequest]);
  function Show(item, index, cline) {
    var items = [];
    for (var i = index; i < item.length; i++) {
      let current = item[i];
      items.push(
        <div className="item">
          <h1 className="name">{item[i].User?.username}</h1>
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
      case 3:
        setButtonPopup3(true);
        break;
    }
  }

  return (
    <div className="rq-list">
      <div></div>
      <h1 className={"req-title"}>新しいリクエスト</h1>
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
      <h1 className={"req-title"}>受け付けたリクエスト</h1>
      <div className="carousel-rq">
        <img
          src={window.location.origin + "/images/pre.png"}
          alt=""
          className="icon-pn"
          onClick={preItem2}
        />
        <div className="inner-carousel">{Show(acceptedList, index2, 2)}</div>
        <img
          src={window.location.origin + "/images/next.png"}
          alt=""
          className="icon-pn"
          onClick={nextItem2}
        />
      </div>
      <h1 className={"req-title"}>完成したリクエスト</h1>
      <div className="carousel-rq">
        <img
          src={window.location.origin + "/images/pre.png"}
          alt=""
          className="icon-pn"
          onClick={preItem3}
        />
        <div className="inner-carousel">{Show(doneList, index3, 3)}</div>
        <img
          src={window.location.origin + "/images/next.png"}
          alt=""
          className="icon-pn"
          onClick={nextItem3}
        />
      </div>
      <div style={{ height: 30 }}></div>
      <Request1
        trigger={buttonPopup1}
        setTrigger={setButtonPopup1}
        request={currentRequest}
        acceptedList={acceptedList}
        setAcceptedList={setAcceptedList}
        pendingList={pendingList}
        setPendingList={setPendingList}
      ></Request1>
      <Request2
        trigger={buttonPopup2}
        setTrigger={setButtonPopup2}
        request={currentRequest}
        acceptedList={acceptedList}
        setAcceptedList={setAcceptedList}
        doneList={doneList}
        setDoneList={setDoneList}
      ></Request2>
      <Request3
        trigger={buttonPopup3}
        setTrigger={setButtonPopup3}
        request={currentRequest}
        doneList={doneList}
        setDoneList={setDoneList}
      ></Request3>
    </div>
  );
}
export default RequestList;
