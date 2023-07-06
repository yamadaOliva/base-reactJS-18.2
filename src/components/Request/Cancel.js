import "./Request.css";
import { GrFormClose } from "react-icons/gr";
import { useState } from "react";
import { updateRequestService } from "../../service/requestService";
import { toast } from "react-toastify";
export default function Cancel(props) {
  const [reason, setReason] = useState("");
  const handleCancel = async () => {
    const data = {
      status: "cancel",
      data: {
        id: props.request.id,
        reason: reason,
      },
    };
    const res = await updateRequestService(data);
    console.log(res);
    if (+res.EC == 200) {
      toast.success("キャンセルしました");
      //pop current request from accept list
      props.setAcceptedList(
        props.acceptedList.filter((item) => item.id != props.request.id)
      );
      props.setButtonCancel(false);
      props.setTrigger(false);
    } else {
      toast.error("キャンセルできませんでした");
    }
  };

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <GrFormClose
          class="close-popup-bnt"
          onClick={() => props.setTrigger(false)}
        />
        <div className="formm">
          <div className="flex-1 text-gray-700 p-15">
            <h1 style={{ fontSize: 25 }} className="title-cancel">
              キャンセル理由
            </h1>
            <div className="mt-6">
              {}
              <div className="pb-4">
                <label className="block text-sm pb-1"></label>
                <textarea
                  className="cancel-form-control"
                  onChange={(e) => setReason(e.target.value)}
                  value={reason}
                  type="text"
                  name="name"
                />
              </div>

              <div>
                <button
                  className="cancel-btn"
                  onClick={() => {
                    handleCancel();
                  }}
                >
                  キャンセル
                </button>
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
