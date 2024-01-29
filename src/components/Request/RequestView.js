import React from "react";
import "./Request.css";
import { GrFormClose } from "react-icons/gr";

export default function RequestView(props) {
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
              <h1 className="title">Số thứ tự</h1>
              <div className="form-row">
                {}
                <div className="pb-4">
                  <label className="block text-sm pb-1" htmlFor="name">
                    Người yêu cầu：
                  </label>
                  <input className="form-control" type="text" name="name" />
                </div>
                {}
                <div className="pb-4">
                  <label className="block text-sm pb-1" htmlFor="address">
                    Địa chỉ khách：
                  </label>
                  <input className="form-control" type="text" name="address" />
                </div>
                {}
                <div className="pb-4">
                  <label className="block text-sm pb-1" htmlFor="date">
                    Ngày giờ：
                  </label>
                  <input className="form-control-date" />
                  Năm
                  <input className="form-control-date" />
                  Tháng
                  <input className="form-control-date" />
                  Ngày
                </div>
                <input
                  className="form-control-date"
                  type="text"
                  name="time"
                  pattern="^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$"
                />{" "}
                Bắt đầu
                <input
                  className="form-control-date"
                  type="text"
                  name="time"
                  pattern="^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$"
                />{" "}
                Kết thúc
                <div className="infor-addtion">
                  <div className="btn-salary">
                    <hihi>{"$"}</hihi>
                  </div>
                  {}
                  <div className="pb-4">
                    <label className="block text-sm pb-1" htmlFor="address">
                      Ghi chú：
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="address"
                    />
                  </div>
                </div>
                <div>
                  <button type="reset" className="cancel-btn">
                    Hủy bỏ
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
