import "./Request.css"
import Request from "./Request";
import Cancel from "./Cancel";
import RequestView from "./RequestView";
import { useState } from "react";



function App(){
    const[buttonRequest, setButtonRequest] = useState(false);
    const[buttonCancel, setButtonCancel] = useState(false);
    const[buttonRV, setButtonRV] = useState(false);

    return(
        <div className="App">
        <h3>1232141323</h3>
         <main>
          <h1>Popup</h1>
          <br></br>
          <button onClick={() => setButtonRequest(true)}>Request</button>
          <br></br>
          <button onClick={() => setButtonCancel(true)}>Cancel</button>
          <br></br>
          <button onClick={() => setButtonRV(true)}>View</button>
          </main>
          <Request trigger={buttonRequest} setTrigger={setButtonRequest}>
        
          </Request>
          <Cancel trigger={buttonCancel} setTrigger={setButtonCancel}>
        
          </Cancel>
          <RequestView trigger={buttonRV} setTrigger={setButtonRV}>
        
          </RequestView>
         
        </div>
    )
}

export default App;