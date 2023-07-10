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
  const [isRobot, setIsRobot] = useState(false);
  const [doPolicyAgree, setDoPolicyAgree] = useState(false);
  const [fullName, setFullName] = useState("");
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
  const refeshDataInput = () => {
    setDataInput(defaultDataInput);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setUsername("");
    setRole(0);
    setName("");
  };
  const validateInput = () => {
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
    
    if (!role) {
      toast.error("Role is required");
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
    const data = {
      email: email,
      password: password,
      name: name,
      role: role,
      username: username,
      fullName: fullName,
    };
    console.log(data);
    if (!validateInput()) {
      return;
    }
    const res = await RegisterService(data);
    console.log(res);
    switch (res.EC) {
      case 400:
        toast.error(res.EM);
        refeshDataInput();
        break;
      case 200:
        toast.success("Register success");
        navigate("/login");
        break;
      default:
        console.log("something went wrong");
    }
  };
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div className="register-container h-full">
      <div className="flex flex-col justify-center items-center mb-10">
        <div className="mt-20">
          <span className="text-3xl font-bold leading-relaxed font-delius">
            IIOSINへようこそ&#128075;、
            <br />
            <span className="text-3xl font-bold leading-relaxed">
              サインアップしましょう
            </span>
          </span>
        </div>
      </div>
      <form className="flex flex-row justify-center items-center gap-12 mb-10">
        <div className="w-1/2 flex flex-col gap-10" id="left-content">
          <div className="flex flex-row mr-40 ml-[36px]">
            <div className="w-2/12">
              <label
                for="name"
                className="w-full h-full pr-4 flex flex-row-reverse items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>

            <input
              type="text"
              id="name"
              placeholder="氏名"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className={`form-control ${
                dataInput.name ? "" : "is-invalid"
              } h-[50px] border-black border-[1px] rounded-[15px] placeholder-[#bbbbbb]`}
            />
          </div>
          <div className="flex flex-row mr-40 ml-[36px]">
            <div className="w-2/12">
              <label
                for="username"
                className="w-full h-full pr-4 flex flex-row-reverse items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
            <input
              type="text"
              id="username"
              placeholder="ユーザー名"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={`form-control ${
                dataInput.username ? "" : "is-invalid"
              } h-[50px] border-black border-[1px] rounded-[15px] placeholder-[#bbbbbb]`}
            />
          </div>
          <div className="flex flex-row mr-40 ml-[36px]">
            <div className="w-2/12">
              <label
                for="password"
                className="w-full h-full pr-4 flex flex-row-reverse items-center"
              >
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
              </label>
            </div>
            <input
              type="password"
              id="password"
              placeholder="パスワード"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`form-control ${
                dataInput.password ? "" : "is-invalid"
              } h-[50px] border-black border-[1px] rounded-[15px] placeholder-[#bbbbbb]`}
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-10" id="right-content">
          <div className="flex flex-row mr-40 ml-[36px]">
            <div className="w-2/12">
              <label
                for="email"
                className="w-full h-full pr-4 flex flex-row-reverse items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </label>
            </div>

            <input
              type="email"
              id="email"
              aria-describedby="emailHelp"
              placeholder="電子メールアドレス"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`form-control ${
                dataInput.email ? "" : "is-invalid"
              } h-[50px] border-black border-[1px] rounded-[15px] placeholder-[#bbbbbb]`}
            />
          </div>
          <div className="flex flex-row mr-40 ml-[36px]">
            <div className="w-2/12">
              <label
                for="role"
                className="w-full h-full pr-4 flex flex-row-reverse items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                </svg>
              </label>
            </div>
            <select
              name="role"
              className="bg-transparent border-[1px] border-black h-[50px] rounded-[15px] w-full pl-4 pr-4 focus:outline outline-4 outline-[#C2DBFE]"
              onChange={(e) => setRoleUser(e)}
              required
            >
              <option value="" disabled hidden selected>
                ロール
              </option>
              <option value="1">ユーザー</option>
              <option value="2">メイド</option>
            </select>
          </div>
          <div className="flex flex-row mr-40 ml-[36px]">
            <div className="w-2/12">
              <label
                for="confirmPassword"
                className="w-full h-full pr-4 flex flex-row-reverse items-center"
              >
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
              </label>
            </div>
            <input
              type="password"
              id="confirmPassword"
              placeholder="パスワード確認"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`form-control ${
                dataInput.confirmPassword ? "" : "is-invalid"
              } h-[50px] border-black border-[1px] rounded-[15px] placeholder-[#bbbbbb]`}
            />
          </div>
        </div>
      </form>
      <div className="flex flex-col justify-center mt-[30px] gap-8">
        <div className="flex flex-row justify-center items-center">
          <input
            className="w-[25px] h-[25px] border-[1px] border-black rounded-[5px]"
            name="policy-check"
            id="policy-check"
            type="checkbox"
            onClick={() => {
              setDoPolicyAgree(!doPolicyAgree);
            }}
            checked={doPolicyAgree}
          />
          <label htmlFor="policy-check" className="ml-[10px]">
            <span className="text-[30px]">
              ウェブサイトの利用規約に同意する。
            </span>
          </label>
        </div>
        <div className="flex flex-row justify-center items-center">
          <input
            className="w-[25px] h-[25px] border-[1px] border-black rounded-[5px]"
            name="robot-check"
            id="robot-check"
            type="checkbox"
            onClick={() => {
              setIsRobot(!isRobot);
            }}
            checked={isRobot}
          />
          <label htmlFor="robot-check" className="ml-[10px]">
            <span className="text-[30px]">
              わたしはロボットではありません。
            </span>
          </label>
        </div>
        <div className="text-center h-[48px]">
          <button
            className="bg-[#404040] text-white w-[200px] h-[48px] rounded-[15px]"
            onClick={() => handleRegister()}
          >
            登録
          </button>
        </div>
        <div
          className="text-right mt-20"
          onClick={() => {
            handleLogin();
          }}
        >
          <span className="text-[20px] underline text-red-600 cursor-pointer">
            アカウントをお持ちですか？
          </span>
        </div>
      </div>
    </div>
  );
}
