import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./components/Login/Login";
import Admin from "./components/Admin/Admin";
import User from "./components/User/User";
import Register from "./components/Register/Register";
import Homepage from "./components/User/Homepage/Homepage";
import DetailMaid from "./components/DetailMaid/DetailMaid";
import LandingPage from "./components/Landing/Landing";
import UserProfile from "./components/User/Profile/Profile";
import RequestM from "./components/Request/RequestM";
import MaidHomePage from "./components/MaidHomePage/MaidHomePage";
import RequestList from "./components/Request/RequestList";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import UserManage from "./components/Admin/UserManage/UserManage";
import MaidManage from "./components/Admin/MainManage/MaidManage";
import MaidInforManage from "./components/Admin/MaidInforManage/MaidInforManage";
import UserInforManage from "./components/Admin/UserInforManage/UserInforManage";
import UserRequestList from "./components/Request/RequestUser"
import RequestDoneList from "./components/Request/RequestDoneList";
import ReviewList from "./components/Admin/ReviewList/ReviewList";
import ReportList from "./components/Admin/Reports/ReportList"
import RequestUser from "./components/Request/RequestUser";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="/user" element={<User />}></Route>
              <Route path="/admin" element={<Admin />} />
              <Route path="/user/home" element={<Homepage />} />
              <Route path="/" element={<LandingPage />} />
              <Route path="/user/profile" element={<UserProfile />} />
              <Route path="/maid/home" element={<MaidHomePage />} />
              <Route path="/requestlist" element={<RequestList />} />
              <Route path="/test" element={<DetailMaid />} />
              <Route path="/requestuser" element={<RequestUser/>} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<h1>Not Found</h1>} />
           

            
            {/* <<<<<<< HEAD */}

            <Route path="/usermanage" element={<UserManage />} />
            <Route path="/updateinformaid" element={<MaidInforManage />} />
            <Route path="/maidmanage" element={<MaidManage />} />
            <Route path="/updateinforuser" element={<UserInforManage />} />
            <Route path="/user/request-list" element={<UserRequestList />} />
            <Route path="/request-done-list" element={<RequestDoneList />} />
            {/* ======= */}
            <Route path="/admin/reviews" element={<ReviewList />} />
            <Route path="/admin/reports" element={<ReportList />} />
            {/* >>>>>>> 45b4828279006f41b32afb4e32b1e5b5bfcdde0a */}
          </Routes>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </BrowserRouter>
      </React.StrictMode>
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
