import "./Login.scss";
import { LoginService } from "../../service/authservice";

export default function Login(props) {
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
              <input type="email" placeholder="Email" />
              <input type="password" />
              <button className="btn btn-primary" >
                Submit
              </button>
              <span className="text-center">
                <a className="forgot-passoword" href="#">
                  Forgot password?
                </a>
              </span>
              <hr />
              <div className="text-center">
                <button className="btn btn-success">Sign up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
