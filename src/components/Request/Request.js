import React from "react"
import "./Request.css"
import {GrFormClose} from 'react-icons/gr'

export default function Request(props){
  
  return (props.trigger) ? (
    <div>
    
      <div className="popup">
        <div className="popup-inner">
        <GrFormClose class="close-popup-bnt" onClick={() => props.setTrigger(false)}/>
        <div className="formm bg-white flex rounded-lg w-1/2">
        
          <div className="flex-1 text-gray-700 p-15">
            <div className="title-rq">新しいリクエスト</div>
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
                <select className="form-control-date">
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
                <select className="form-control-date">
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
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>
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
                  <button type="reset" className='cancel-btn2'>キャンセル</button>
               </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  ) : "";
}