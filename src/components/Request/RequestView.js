import React from "react"
import "./Request.css"
import {GrFormClose} from 'react-icons/gr'

export default function RequestView(props){
  
  return (props.trigger) ? (
    <div>
    
      <div className="popup">
        <div className="popup-inner">
        <GrFormClose class="close-popup-bnt" onClick={() => props.setTrigger(false)}/>
        <div className="formm bg-white flex rounded-lg w-1/2">
        
          <div className="flex-1 text-gray-700 p-15">
            <h1 className="title">リクエスト番号</h1>
            <div className="form-row">
              {}
              <div className="pb-4">
                <label 
                  className="block text-sm pb-1" 
                  htmlFor="name"
                >クライアント名： 
                </label>
                <input className="form-control"
                 type="text" name="name" />
              </div>
              {}
              <div className="pb-4">
                <label 
                  className="block text-sm pb-1" 
                  htmlFor="address"
                >ユーザー住所：
                </label>
                <input className="form-control"
                 type="text" name="address" />
              </div>
              {}
              <div className="pb-4">
                <label 
                  className="block text-sm pb-1" 
                  htmlFor="date"
                >日付：
                </label>
                <input className="form-control-date"/>年
                <input className="form-control-date"/>月
                <input className="form-control-date"/>日
              </div>
              <input className="form-control-date"
                 type="text" name="time" pattern="^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$"/> から
              <input className="form-control-date"
                 type="text" name="time" pattern="^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$"/> まで

                 <div className="infor-addtion">
                 <div className="btn-salary">
                   <hihi>{"$"}</hihi>
                 </div>
                 {}
                 <div className="pb-4">
                   <label 
                     className="block text-sm pb-1" 
                     htmlFor="address"
                   >ノート：
                   </label>
                   <input className="form-control"
                    type="text" name="address" />
                 </div>
               </div>
               <div>
    
                  <button type="reset" className='cancel-btn'>キャンセル</button>
               </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  ) : "";
}