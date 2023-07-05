import React from "react";
import "./RequestPopup.css";
import { GrFormClose } from "react-icons/gr";
import Cancel from "./Cancel";
import { useState } from "react";
import { convertDateToTMDHM } from "./Items";
import { updateRequestService } from "../../service/requestService";
import { toast } from "react-toastify";
export default function Request2(props) {
  const [buttonCancel, setButtonCancel] = useState(false);
  const handleDone = async () => {
    const data = {
      status: "done",
      data: {
        id: props.request.id,
      },
    };
    const res = await updateRequestService(data);
    console.log(res);
    if (+res.EC == 200) {
      toast.success("完了しました");
      //pop current request from pending list
      props.setAcceptedList(
        props.acceptedList.filter((item) => item.id != props.request.id)
      );
      //add done request to done list
      props.setDoneList([...props.doneList, props.request]);
      props.setTrigger(false);
    } else {
      alert("完了できませんでした");
    }
  };
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <GrFormClose
          class="close-popup-bnt"
          onClick={() => props.setTrigger(false)}
        />
        <div className="title-popup">受け付けたリクエスト</div>
        <div className="after-title">
          <div className="left-part">
            <div className="name-box">
              <div>Client name</div>
              <div>{props.request.User.username}</div>
            </div>
            <div className="address-box">
              <div>Client Address:{props.request.address}</div>
            </div>
          </div>
          <div className="right-part">
            <div className="rq-number">Request No.{props.request.id}</div>
          </div>
        </div>
        <div className="boxx">
          <div className="from-box">
            <div>From</div>
            <div>{convertDateToTMDHM(props.request.start_date)}</div>
          </div>
          <div className="to-box">
            <div>To</div>
            <div>{convertDateToTMDHM(props.request.end_date)}</div>
          </div>
        </div>
        <div className="boxx">
          <div className="price-box">Price:{props.request.price}</div>
          <div className="note-box">
            <div>Note:{props.request.note ? props.request.note : "none"}</div>
          </div>
        </div>
        <div className="bntt">
          <button className="bnt-1" onClick={() => handleDone()}>
            <div className="bnt-1-content">完成する</div>
          </button>
          <button className="bnt-2" onClick={() => setButtonCancel(true)}>
            <div className="bnt-2-content">キャンセル</div>
          </button>
        </div>
      </div>
      <Cancel
        trigger={buttonCancel}
        setTrigger={setButtonCancel}
        acceptedList={props.acceptedList}
        setAcceptedList={props.setAcceptedList}
        request={props.request}
        setButtonCancel={props.setTrigger}
      ></Cancel>
    </div>
  ) : (
    ""
  );
}
