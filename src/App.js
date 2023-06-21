import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header/Header";
import "./App.css";
import { Outlet } from "react-router-dom";
import UploadWidget from "./components/testCloud/UploadWidget";
function App() {
  return (
    <>
      <div className="App">
          <Header />
          <div>
            <div className="container-fluid">
              {/* <UploadWidget/> */}
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
