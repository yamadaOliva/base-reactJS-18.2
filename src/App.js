import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header/Header";
import "./App.css";
import { useSelector,useDispatch } from "react-redux";
import { increment, decrement } from "./redux/slices/counterSlice";
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
        <Outlet />
      </>
  );
}

export default App;
