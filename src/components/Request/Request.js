import React from "react"
import "./Request.css"
import { useState, useEffect } from "react";
export default function Request(props){
  const daysOfMonths = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
  const [month, setMonth] = useState(1);
  const [day, setDay] = useState(1);
  useEffect(() => {
  }, [month, day]);
  return (props.trigger) ? (
    <div>
    
      <div className="popup">
        <div className="popup-inner">
        <button class="close" onClick={() => props.setTrigger(false)}
        >+</button>
        <form className="bg-white flex rounded-lg w-1/2">
        
          <div className="flex-1 text-gray-700 p-15">
            <h1 className="title">新しいリクエスト</h1>
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
                <select className="form-control-date">
                  <option className="form-control-date">2023</option>
                </select>年
                <select className="form-control-date"
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
                </select>月
                <select className="form-control-date"
                  onChange={(e) => setDay(e.target.value)}
                >
                  {month == 2 ? daysOfMonths.slice(0,28).map((day) => <option>{day}</option>) : null}
                  {month == 4 || month == 6 || month == 9 || month == 11 ? daysOfMonths.slice(0,30).map((day) => <option>{day}</option>) : null}
                  {month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12 ? daysOfMonths.map((day) => <option>{day}</option>) : null}
                
                </select>日
              </div>
              <input className="form-control-date"
                 type="text" name="time" pattern="^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$"/> から
              <input className="form-control-date"
                 type="text" name="time" pattern="^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$"/> まで

                 <div className="infor-addtion">
                 <div className="btn-salary">
                 <br></br>
                   <hihi>{"価格：20$"}</hihi>
                   
                 </div>
                 {}
                 <div className="pb-4">
                 <br></br>
                 <div>
                   <label 
                     className="block text-sm pb-1" 
                     htmlFor="address"
                   >ノート：
                   </label>
                   <input className="form-control"
                    type="text" name="address" />
                  </div>
                 </div>
               </div>
               <div className="btn-submit ">
                  <button type="submit" className='request-btn'>リクエストを送信</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <button type="reset" className='cancel-btn2'
                  onClick={() => props.setTrigger(false)}
                  >キャンセル</button>
               </div>
            </div>
          </div>
        </form>
        </div>
      </div>
    </div>
  ) : "";
}