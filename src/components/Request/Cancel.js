import "./Request.css"
import {GrFormClose} from 'react-icons/gr'

export default function Cancel(props){
    
  
  return (props.trigger) ? (
    <div className="popup">
      <div className="popup-inner">
      <GrFormClose class="close-popup-bnt" onClick={() => props.setTrigger(false)}/>
        <div className="formm">
          <div className="flex-1 text-gray-700 p-15">
            <h1 style={{ fontSize: 25 }} className="title-cancel">キャンセル理由</h1>
            <div className="mt-6">
              {}
              <div className="pb-4">
                <label 
                  className="block text-sm pb-1" 
                >
                </label>
                <textarea className="cancel-form-control"
                 type="text" name="name" />
              </div>
              
               <div>
                  <button className='cancel-btn'>キャンセル</button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : "";
}