import "./Login.scss";
import { LoginService } from "../../service/authservice";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate,Link } from "react-router-dom";
export default function Login(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const defaultData = {
    email: true,
    password: true,
  };
  const [dataInPut, setDataInPut] = useState(defaultData);
  const isValidate = () => {
    if (email === "") {
      toast.error("Email is required");
      setDataInPut({ ...dataInPut, email: false });
      return false;
    }
    //regex email
    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regexEmail.test(email)) {
      toast.error("Email is invalid");
      setDataInPut({ ...dataInPut, email: false });
      return false;
    }
    if (password === "") {
      toast.error("Password is required");
      setDataInPut({ ...dataInPut, password: false });
      return false;
    }
    return true;
  };
  const handleSubmit = async () => {
    if (isValidate()) {
      const user = {
        email,
        password,
      };
      try {
        const res = await LoginService(user);
        console.log(res);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  };
  
  const handleSignUp = () => {
    navigate("/register");
  };
  return (
    <>
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
              <input
                type="email"
                className={
                  dataInPut.email? "form-control" : "form-control is-invalid"
                }
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className={
                  dataInPut.password? "form-control" : "form-control is-invalid"
                }
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="btn btn-primary"
              onClick={()=>handleSubmit()}
              >Submit</button>
              <span className="text-center">
                <Link to="/register">Register</Link>
              </span>
              <hr />
              <div className="text-center">
                <button className="btn btn-success"
                onClick={()=>handleSignUp()}
                >Sign up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
