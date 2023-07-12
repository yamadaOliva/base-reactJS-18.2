import React from "react";
import "./Request.css";
import { GrFormClose } from "react-icons/gr";
import { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { requestMaid } from "../../service/maidService";
import socketIOClient from "socket.io-client";
const host = "http://localhost:8000";
export default function Request(props) {
  const [id, setId] = useState();
  const socketRef = useRef();
  useEffect(() => {
    socketRef.current = socketIOClient.connect(host)
  }, []);
  const daysOfMonths = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const [month, setMonth] = useState(1);
  const [day, setDay] = useState(1);
  const [hourKara, setHourKara] = useState("00:00");
  const [hourMade, setHourMade] = useState("00:00");
  const [note, setNote] = useState("");
  const [address, setAddress] = useState("");
  const user = useSelector((state) => state.user);
  const requestHandler = async (e) => {
    e.preventDefault();
    try {
      let hour1 = hourKara.split(":")[0];
      let minute1 = hourKara.split(":")[1];
      let hour2 = hourMade.split(":")[0];
      let minute2 = hourMade.split(":")[1];

      const request = {
        maid_id: props.maidId,
        user_id: user.id,
        start_date: {
          year: 2023,
          month: month,
          day: day,
          hour: hour1,
          minute: minute1,
        },
        end_date: {
          year: 2023,
          month: month,
          day: day,
          hour: hour2,
          minute: minute2,
        },
        note: note,
        price: props.price,
        status: "pending",
        address: address,
      };
      console.log(request);
      const response = await requestMaid(request);
      console.log("rés=>>", response);
      if (+response.EC == 200) {
        socketRef.current.emit('sendDataClient', 1)
        toast.success("リクエストを送信しました。");
      } else {
        toast.error("リクエストを送信できませんでした。");
      }
      props.setTrigger(false);
    } catch (error) {
      console.log(error);
      toast.error("リクエストを送信できませんでした。");
    }
  };

  return props.trigger ? (
    <div>
      <div className="popup">
        <div className="popup-inner">
          <GrFormClose
            class="close-popup-bnt"
            onClick={() => props.setTrigger(false)}
          />
          <div className="formm bg-white flex rounded-lg w-1/2">
            <div className="flex-1 text-gray-700 p-15">
              <div className="title-rq">新しいリクエスト</div>
              <div className="form-row">
                { }
                <div className="pb-4">
                  <label className="block text-sm pb-1" htmlFor="name">
                    クライアント名：
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    value={user.username}
                    disabled
                  />
                </div>
                { }
                <div className="pb-4">
                  <label className="block text-sm pb-1" htmlFor="address">
                    ユーザー住所：
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="address"
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                  />
                </div>
                { }
                <div className="pb-4 pb-add">
                  <label className="block text-sm pb-1" htmlFor="date">
                    日付：
                  </label>
                  <select className="form-control-date">
                    <option className="form-control-date">2023</option>
                  </select>
                  <span> 年</span>
                  <select
                    className="form-control-date"
                    onChange={(e) => setMonth(e.target.value)}
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                  </select>
                  <span>月 </span>
                  <select
                    className="form-control-date"
                    onChange={(e) => setDay(e.target.value)}
                  >
                    {month == 2
                      ? daysOfMonths
                        .slice(0, 28)
                        .map((day) => <option>{day}</option>)
                      : null}
                    {month == 4 || month == 6 || month == 9 || month == 11
                      ? daysOfMonths
                        .slice(0, 30)
                        .map((day) => <option>{day}</option>)
                      : null}
                    {month == 1 ||
                      month == 3 ||
                      month == 5 ||
                      month == 7 ||
                      month == 8 ||
                      month == 10 ||
                      month == 12
                      ? daysOfMonths.map((day) => <option>{day}</option>)
                      : null}
                  </select>
                  <span> 日 </span>
                </div>
                <input
                  className="form-control-date"
                  type="text"
                  name="time"
                  pattern="^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$"
                  onChange={(e) => setHourKara(e.target.value)}
                />{" "}
                <span> から </span>
                <input
                  className="form-control-date"
                  type="text"
                  name="time"
                  pattern="^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$"
                  onChange={(e) => setHourMade(e.target.value)}
                />{" "}
                まで
                <div className="infor-addtion">
                  <div className="btn-salary">
                    <br></br>
                    <hihi>{props.price}$</hihi>
                  </div>
                  { }
                  <div className="pb-4">
                    <br></br>
                    <div>
                      <label className="block text-sm pb-1" htmlFor="address">
                        ノート：
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="address"
                        onChange={(e) => setNote(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="btn-submit ">
                  <button
                    type="submit"
                    className="request-btn"
                    onClick={requestHandler}
                  >
                    リクエストを送信
                  </button>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <button
                    type="reset"
                    className="cancel-btn2"
                    onClick={() => props.setTrigger(false)}
                  >
                    キャンセル
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
