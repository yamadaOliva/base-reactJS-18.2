import React from "react";
import "./RequestPopup.css";
import { GrFormClose } from "react-icons/gr";
import { convertDateToTMDHM } from "./Items";
import { updateRequestService } from "../../service/requestService";
import { toast } from "react-toastify";
export default function Request3(props) {
  const handleDelete = async () => {
    console.log("delete");
    const data = {
      status: "delete",
      data: {
        id: props.request.id,
      },
    };
    const res = await updateRequestService(data);
    console.log(res);
    if (+res.EC == 200) {
      toast.success("削除しました");
      //pop current request from done list
      props.setDoneList(
        props.doneList.filter((item) => item.id != props.request.id)
      );
      props.setTrigger(false);
    } else {
      alert("削除できませんでした");
    }
  };

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <GrFormClose
          class="close-popup-bnt"
          onClick={() => props.setTrigger(false)}
        />
        <div className="title-popup">完成したリクエスト</div>
        <div className="after-title">
          <div className="left-part">
            <div className="name-box">
              <div>Client name</div>
              <div>{props.request?.User.username}</div>
            </div>
            <div className="address-box">
              <div>Client Address:{props.request?.address}</div>
            </div>
          </div>
          <div className="right-part">
            <div className="rq-number">Request No.{props.request?.id}</div>
          </div>
        </div>
        <div className="boxx">
          <div className="from-box">
            <div>From</div>
            <div>{convertDateToTMDHM(props.request?.start_date)}</div>
          </div>
          <div className="to-box">
            <div>To</div>
            <div>{convertDateToTMDHM(props.request?.end_date)}</div>
          </div>
        </div>
        <div className="boxx">
          <div className="price-box">Price:{props.request?.price}</div>
          <div className="note-box">
            <div>Note:{props.request?.note ? props.request?.note : "none"}</div>
          </div>
        </div>
        <div className="bntt">
          <button className="bnt-3" onClick={handleDelete}>
            <div className="bnt-2-content">削除</div>
          </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
