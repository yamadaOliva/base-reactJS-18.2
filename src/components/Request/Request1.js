import React from "react";
import "./RequestPopup.css";
import { GrFormClose } from "react-icons/gr";
import { convertDateToTMDHM } from "./Items";
import { updateRequestService } from "../../service/requestService";
import { toast } from "react-toastify";
export default function Request1(props) {
  const handleAccept = async () => {
    const data = {
      status: "accept",
      data: {
        id: props.request.id,
      },
    };
    const res = await updateRequestService(data);
    console.log(res);
    if (+res.EC == 200) {
      toast.success("受け入れました");
      //pop current request from pending list
      props.setPendingList(
        props.pendingList.filter((item) => item.id != props.request.id)
      );
      //add current request to accepted list
      props.setAcceptedList([...props.acceptedList, props.request]);
      props.setTrigger(false);
    } else {
      alert("受け入れできませんでした");
    }
  };
  const handleDelete = async () => {
    console.log("refuse");
    const data = {
      status: "refuse",
      data: {
        id: props.request.id,
      },
    };
    const res = await updateRequestService(data);
    console.log(res);
    if (+res.EC == 200) {
      toast.success("却下しました");
      //pop current request from pending list
      props.setPendingList(
        props.pendingList.filter((item) => item.id != props.request.id)
      );
      props.setTrigger(false);
    } else {
      alert("却下できませんでした");
    }
  };

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <GrFormClose
          class="close-popup-bnt"
          onClick={() => props.setTrigger(false)}
        />
        <div className="title-popup">新しいリクエスト</div>
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
          <button className="bnt-1">
            <div
              className="bnt-1-content"
              onClick={() => {
                handleAccept();
              }}
            >
              受け入れる
            </div>
          </button>
          <button className="bnt-2">
            <div
              className="bnt-2-content"
              onClick={() => {
                handleDelete();
              }}
            >
              却下
            </div>
          </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
