import { LoginService } from "../../service/authservice";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import { setUser } from "../../redux/slices/userSlice";
import { useDispatch } from "react-redux";

export default function Login(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const defaultData = {
    email: true,
    password: true,
  };
  const [dataInput, setDataInput] = useState(defaultData);
  const isValidate = () => {
    if (email === "") {
      toast.error("Email is required");
      setDataInput({ ...dataInput, email: false });
      return false;
    }
    //regex email
    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regexEmail.test(email)) {
      toast.error("Email is invalid");
      setDataInput({ ...dataInput, email: false });
      return false;
    }
    if (password === "") {
      toast.error("Password is required");
      setDataInput({ ...dataInput, password: false });
      return false;
    }
    return true;
  };
  const refeshDataInput = () => {
    setDataInput(defaultData);
    setEmail("");
    setPassword("");
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
        console.log(+res.EC == -1);
        if (+res.EC == -1) {
          toast.error(res.EM);
          refeshDataInput();
          return;
        }
        console.log(res.DT);
        const payload = {
          email: res.DT.email,
          username: res.DT.username,
          token: res.DT.accessToken,
          role: res.DT.role,
          id: res.DT.id,
          address: res.DT.address,
        };
        dispatch(setUser(payload));
        if(res.DT.active == 0){
          toast.error("アカウントがブロックされました。");
          refeshDataInput();
          return;
        }
        if (+res.DT.role == 1) navigate("/user/home");
        else if (+res.DT.role ==2) navigate("/maid/home");
        else if(+res.DT.role == 0) navigate("/maidmanage");
          
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="login-container h-full">
        <div className="flex flex-row h-full">
          <div className="left-side w-1/2 h-full border-r-[0.5px] border-black">
            <div className="flex flex-col justify-center items-center h-full">
              <div className="text-logo text-center">
                <Typography
                  id="logo"
                  as="a"
                  href="/"
                  className="cursor-pointer font-medium no-underline text-8xl"
                >
                  Iiosin
                </Typography>
              </div>
            </div>
          </div>
          <div className="right-side h-full w-1/2 pr-[4%]">
            <div className="flex flex-col pt-[100px]">
              <div className="flex flex-col w-full gap-10">
                <div className="w-10/12 ml-auto">
                  <div className="flex flex-col gap-4">
                    <span className="text-3xl font-bold font-delius">
                      IIOSINへようこそ&#128075;、
                    </span>

                    <span className="text-3xl font-bold">
                      まず、ログインしてください
                    </span>
                  </div>
                </div>
                <div className="w-full flex flex-row">
                  <div className="flex w-2/12 flex-col justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="w-10/12">
                    <input
                      type="email"
                      className={
                        dataInput.email
                          ? "form-control"
                          : "form-control is-invalid"
                      }
                      placeholder="ユーザー名または電子メール"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        border: "1px solid #000000",
                        height: "50px",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                </div>
                <div className="w-full flex flex-row">
                  <div className="flex w-2/12 flex-col justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15.75 1.5a6.75 6.75 0 00-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 00-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 00.75-.75v-1.5h1.5A.75.75 0 009 19.5V18h1.5a.75.75 0 00.53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1015.75 1.5zm0 3a.75.75 0 000 1.5A2.25 2.25 0 0118 8.25a.75.75 0 001.5 0 3.75 3.75 0 00-3.75-3.75z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="w-10/12">
                    <input
                      type="password"
                      placeholder="パスワード"
                      className={
                        dataInput.password
                          ? "form-control"
                          : "form-control is-invalid"
                      }
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      style={{
                        border: "1px solid #000000",
                        height: "50px",
                        borderRadius: "10px",
                        color: "#000000",
                      }}
                    />
                  </div>
                </div>
                <div className="w-full flex flex-row">
                  <div className="w-10/12 ml-auto">
                    <div className="flex justify-center w-full ">
                      <button
                        className="border-2 border-[#91B9E0] rounded-2xl bg-[#A4F1E4]  w-9/12 h-12 font-bold drop-shadow-[0_3px_2px_rgba(0,0,0,0.35)]"
                        onClick={() => handleSubmit()}
                      >
                        ログイン
                      </button>
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-row">
                  <div className="w-10/12 ml-auto -mt-6">
                    <div className="flex justify-center w-full">
                      <span className="text-center text-red-600 font-light">
                        または
                        <Link to="/register" className="text-red-600 font-bold">
                          <span>サインアップ</span>
                        </Link>
                        &#xFF01;
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
