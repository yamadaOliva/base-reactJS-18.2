import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import range from "lodash-es/range";
import { FiCircle } from "react-icons/fi";
import { useSelector } from "react-redux";
import { getAverageRatingService } from "../../service/requestService";
import "./MaidHomePage.scss";
import ShowReview from "../ReviewComponent/ShowReview/ShowReview";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import RequestDoneList from "../Request/RequestDoneList";
import Request3 from "../Request/Request3";
require("dayjs/locale/ja");

dayjs.locale("ja");

const weekDays = ["月", "火", "水", "木", "金", "土", "日"];

const todayObj = dayjs();

const Calendar = () => {
  const navigate = useNavigate();
  const [isShowReview, setIsShowReview] = useState(false);
  const [isReview, setIsReview] = useState(false);
  const [avgRating, setAvgRating] = useState(0);
  const [request, setRequest] = useState([]);
  const [requestInMonth, setRequestInMonth] = useState([]);
  const [requestDayInMonth, setRequestDayInMonth] = useState([]);
  const [trigger1, setTrigger1] = useState(false);
  const [trigger2, setTrigger2] = useState(false);
  const [trigger3, setTrigger3] = useState(false);
  const [currentRequest, setCurrentRequest] = useState({}); //[0
  const user = useSelector((state) => state.user);
  const getAverageRating = async () => {
    try {
      const response = await getAverageRatingService(user.id);
      console.log("response", response);
      if (+response.EC == 200) {
        setRequest(response.DT.doneRequest);
        setAvgRating(response.DT.averageRating);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  const handleRequestDay = (day) => {
    if(requestDayInMonth.includes(day)){
      setCurrentRequest(request.find(rq =>{
        if(dayjs(rq.start_date).date() == day&& dayjs(rq.start_date).month() + 1 == dayObj.month() + 1){
          return rq;
        }
      }));
      setTrigger3(true);
    }
  }
  useEffect(() => {
    console.log("currentRequest", currentRequest);
  }, [currentRequest]);
  useEffect(() => {
    getAverageRating();
  }, []);

  const rqInMonth = (month) => {
    const currentMonth = month+1;
    console.log("currentMonth", currentMonth);
    let ptr = request.filter((rq) => {
      console.log("rq", dayjs(rq.start_date).month() + 1);
      return dayjs(rq.start_date).month() + 1 == currentMonth;
    });
    setRequestInMonth(ptr);
    setRequestDayInMonth(
      ptr.map((rq) => {
        return dayjs(rq.start_date).date();
      })
    );
    //setDayJSObj(request.map((rq) => dayjs(rq.start_date)));
  };
  useEffect(() => {
    rqInMonth(dayObj.month()+1);
  }, [request]);
  const handleShowReview = () => {
    //event.preventDefault();
    setIsShowReview(true);
    console.log("click");
  };
  const handleCloseShowReview = () => {
    setIsShowReview(false);
  };
  const [dayObj, setDayObj] = useState(dayjs());

  const thisYear = dayObj.year();
  const thisMonth = dayObj.month(); // (January as 0, December as 11)
  const daysInMonth = dayObj.daysInMonth();

  const dayObjOf1 = dayjs(`${thisYear}-${thisMonth + 1}-1`);
  const weekDayOf1 = dayObjOf1.day(); // (Sunday as 0, Saturday as 6)

  const dayObjOfLast = dayjs(`${thisYear}-${thisMonth + 1}-${daysInMonth}`);
  const weekDayOfLast = dayObjOfLast.day();

  const handlePrev = () => {
    setDayObj(dayObj.subtract(1, "month"));
  };

  const handleNext = () => {
    setDayObj(dayObj.add(1, "month"));
  };
  useEffect(() => {
    console.log(dayObj.format("YYYY-MM-DD"));
    let getMonth = dayObj.get("month");
    console.log("getMonth", getMonth);
    rqInMonth(getMonth);
  }, [dayObj]);
  return (
    <div className="maidhome">
      <div className="left-bib">
        <div className="head"></div>
        <div className="evaluate-icon">
          <div className="icon-inner">
            <div className="icon-inner-box">
              <div className="icon-content">{avgRating}</div>
            </div>
          </div>
          <FiCircle className="edit-size-icon" />
        </div>

        <div className="below-icon-title" onClick={() => handleShowReview()}>
          総合評価
        </div>
        <div className="request-icon">
          <div className="icon-inner">
            <div className="icon-inner-box">
              <div className="icon-content">{requestInMonth.length}</div>
            </div>
          </div>
          <FiCircle className="edit-size-icon" />
        </div>
        <div
          className="below-icon-title"
          onClick={() => {
            setTrigger1(true);
          }}
        >
          今月の完了したリクエスト
        </div>
        <div className="complate-rq-icon">
          <div className="icon-inner">
            <div className="icon-inner-box">
              <div className="icon-content">{request.length}</div>
            </div>
          </div>
          <FiCircle className="edit-size-icon" />
        </div>
        <div
          className="below-icon-title"
          onClick={() => {
            setTrigger2(true);
          }}
        >
          完了したリクエストの総数
          <br />
          （アプリを使い始めてから）
        </div>
      </div>
      <div className="calendar-box">
        <div className="calendar">
          <div className="header">
            <button
              type="button"
              className="nav nav--left"
              onClick={handlePrev}
            >
              &lt;
            </button>
            <div className="datetime">
              {dayObj.format("YYYY")}&nbsp; &nbsp;{dayObj.format("MMM")}
            </div>
            <button
              type="button"
              className="nav nav--right"
              onClick={handleNext}
            >
              &gt;
            </button>
          </div>
          <div className="footer"></div>
          <div className="week-container">
            {weekDays.map((d) => (
              <div className="week-cell" key={d}>
                {d}
              </div>
            ))}
          </div>
          <div className="day-container">
            {range(weekDayOf1 - 1).map((i) => (
              <div className="day-cell day-cell--faded" key={i}>
                {dayObjOf1.subtract(weekDayOf1 - 1 - i, "day").date()}
              </div>
            ))}

            {range(daysInMonth).map((i) => (
              <button
                className={`day-cell day-cell--in-month${
                  requestDayInMonth.includes(i + 1) && thisYear === 2023
                    ? " day-cell--today"
                    : ""
                }`}
                key={i}
                onClick={() => {handleRequestDay(i + 1)}}
              >
                {i + 1}
              </button>
            ))}

            {range(6 - weekDayOfLast + 1).map((i) => (
              <div className="day-cell day-cell--faded" key={i}>
                {dayObjOfLast.add(i + 1, "day").date()}
              </div>
            ))}
          </div>
        </div>
      </div>
      <ShowReview
        show={isShowReview}
        handleClose={handleCloseShowReview}
        maidId={user.id}
        maidName={user.username}
        setIsReview={setIsReview}
        isReview={isReview}
      />
      <RequestDoneList
        trigger={trigger1}
        setTrigger={setTrigger1}
        list={requestInMonth}
      />
      <RequestDoneList
        trigger={trigger2}
        setTrigger={setTrigger2}
        list={request}
      />
      <Request3
        trigger={trigger3}
        setTrigger={setTrigger3}
        doneList={request}
        setDoneList={setRequest}
        request={currentRequest}
      />
    </div>
  );
};

export default Calendar;
