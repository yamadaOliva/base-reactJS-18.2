import "./Register.scss";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { RegisterService } from "../../service/authservice";
export default function Register(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState(1);
  const [name, setName] = useState("");
  const role_name = {
    1: "User",
    2: "Maid",
  };
  const defaultDataInput = {
    email: true,
    password: true,
    confirmPassword: true,
    username: true,
    role: true,
    name: true,
  };
  const [dataInput, setDataInput] = useState(defaultDataInput);

  ///////////////////////////////////////////
  const validataInput = () => {
    if (!email) {
      toast.error("Email is required");
      setDataInput({ ...dataInput, email: false });
      return false;
    }
    if (!password) {
      toast.error("Password is required");
      setDataInput({ ...dataInput, password: false });
      return false;
    }
    if (!confirmPassword) {
      toast.error("Confirm password is required");
      setDataInput({ ...dataInput, confirmPassword: false });
      return false;
    }
    if (!name) {
      toast.error("Name is required");
      setDataInput({ ...dataInput, name: false });
      return false;
    }
    if (!role) {
      toast.error("Phone is required");
      setDataInput({ ...dataInput, role: false });
      return false;
    }
    if (password !== confirmPassword) {
      toast.error("Password and confirm password not match");
      setDataInput({ ...dataInput, password: false, confirmPassword: false });
      return false;
    }
    //regex email
    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regexEmail.test(email)) {
      toast.error("Email is not valid");
      return false;
    }
    //regex phone

    return true;
  };
  ///////////////////////
  const setRoleUser = (e) => {
    setRole(e.target.value);
    setName(role_name[e.target.value]);
  };
  const handleRegister = async () => {
    if (!validataInput()) {
      return;
    }
    const data = {
      email: email,
      password: password,
      name: name,
      role: role,
      username: username,
    };
    const res = await RegisterService(data);
    console.log(res);
    switch (res.EC) {
      case 400:
        toast.error(res.EM.message);
        break;
      case 200:
        toast.success("Register success");
        navigate("/login");
        break;
    }
  };
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div className="login-containers mt-5">
      <div className="container">
        <div className="row">
          <div className="content-left col-7 py-5">
            <div className="text-logo">LOGO</div>
            <div>
              <h1>Welcome back!</h1>
            </div>
          </div>
          <div className="content-right col-5  d-flex flex-column py-3 gap-3 shadow-lg">
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className={
                  dataInput.email ? "form-control" : "form-control is-invalid"
                }
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                className={
                  dataInput.password
                    ? "form-control"
                    : "form-control is-invalid"
                }
                id="exampleInputPassword1"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Confirm Password</label>
              <input
                type="password"
                className={
                  dataInput.confirmPassword
                    ? "form-control"
                    : "form-control is-invalid"
                }
                id="exampleInputPassword1"
                placeholder="Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label for="exampleName">User Name</label>
              <input
                type="text"
                className={
                  dataInput.username
                    ? "form-control"
                    : "form-control is-invalid"
                }
                id="exampleName"
                placeholder="Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group row">
              <label for="examplePhone">role</label>
              <select
                className="from-select col-2 mt-1 "
                onChange={(e) => setRoleUser(e)}
              >
                <option value="1" defaultValue={1}>
                  User
                </option>
                <option value="2">Maid</option>
              </select>
            </div>

            <button
              className="btn btn-primary"
              onClick={() => handleRegister()}
            >
              Submit
            </button>
            <span className="text-center">
              <a className="forgot-passoword" href="#">
                Forgot password?
              </a>
            </span>
            <hr />
            <div className="text-center">
              <button className="btn btn-success" onClick={() => handleLogin()}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
