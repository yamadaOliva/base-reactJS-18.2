import React from "react"
import "./RequestPopup.css"
import {GrFormClose} from 'react-icons/gr'

export default function Request1(props){
  
  return (props.trigger) ? (
    
      <div className="popup">
        <div className="popup-inner">
        <GrFormClose class="close-popup-bnt" onClick={() => props.setTrigger(false)}/>
        <div className="title-popup">新しいリクエスト</div>
            <div className="after-title">
                <div className="left-part">
                    <div className="name-box">
                        <div>Client name</div>
                        <div>Nguyen Van A</div>
                    </div>
                    <div className="address-box">
                        <div>Client Address:HUST</div>
                    </div>
                    
                </div>
                <div className="right-part">
                    <div className="rq-number">
                        Request No.1
                    </div>
                </div>
            </div>
            <div className="boxx">
                <div className="from-box">
                        <div>From</div>
                        <div>04/19/2023 - 10:15</div>
                </div>
                <div className="to-box">
                        <div>To</div>
                        <div>04/19/2023 - 14:00</div>
                </div>
            </div>
            <div className="boxx">
                <div className="price-box">
                    Price:20$
                </div>
                <div className="note-box">
                    <div>Note:none</div>
                </div>
            </div>
            <div className="bntt">
                <button className='bnt-1'>
                    <div className="bnt-1-content">
                    受け入れる
                    </div>
                </button>
                <button className='bnt-2'>
                    <div className="bnt-2-content">
                    却下
                    </div>
                </button>
            
            </div>
        </div>
      </div>

  ) : "";
}