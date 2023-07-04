import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header/Header";
import "./App.css";
import { Outlet } from "react-router-dom";
function App() {
  
  return (
    <>
      <div className="App">
          <Header />
          <div>
            <div className="container-fluid">
            </div>
          </div>
      </div>
      <div className="h-full pt-[70px]">   
        <Outlet />
      </div>
    </>
  );
}

export default App;
