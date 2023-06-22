import "./Request.css"


export default function Cancel(props){
    
  
  return (props.trigger) ? (
    <div className="popup">
      <div className="popup-inner">
      <button class="close" onClick={() => props.setTrigger(false)}
      >+</button>
        <form>
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
              
               <div className="btn-submit ">
                  <button type="submit" className='cancel-btn'>キャンセル</button>
               </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  ) : "";
}