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
import UserProfile from "./components/User/Profile/Profile"
import RequestM from "./components/Request/RequestM";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/user" element={<User />}></Route>
            <Route path="/admin" element={<Admin />} />
            <Route path="/user/home" element={<Homepage />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/user/profile" element={<UserProfile />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route path="/test" element={<DetailMaid />} />

          <Route path="/request" element={<RequestM />} />
  
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
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
