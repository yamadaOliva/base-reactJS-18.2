import Upload from "./Upload";
import "./Profile.css";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { UserProfileService } from "../../../service/userProfileService";
function Profile() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [note, setNote] = useState("");
  const [avatarUrl, setAvatarUrl] = useState(
    window.location.origin + "/images/upload-image.png"
  );
  const goBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    // get token from cookie
    if (!user.username) {
      toast.error("ログインしてください");
      navigate("/login");
      return;
    }
  }, []);

  const handleSubmit = async () => {
    const data = {
      id: user.id,
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
      address: address,
      city: city,
      country: country,
      description: note,
      avatar_url: avatarUrl,
    };
    const res = await UserProfileService(data);
    console.log(res);
  };
  return (
    <div>
      <a className={"back-link"} href="#a">
        <img
          className={"back-image"}
          src={window.location.origin + "/images/icons8-back.png"}
          alt=""
          onClick={goBack}
        />
        <span className={"back-caption"}>戻る</span>
      </a>
      <div className={"container"}>
        <h2>ユーザー情報のへ更新</h2>
        <div className={"wrapper"}>
          <div className={"inputs"}>
            <Input
              label={"名"}
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
            <Input
              label={"苗字"}
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
            <Input
              label={"電話番号"}
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
            />
            <Input
              label={"住所"}
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />
            <Input
              label={"都市"}
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
            <Input
              label={"国"}
              onChange={(e) => setCountry(e.target.value)}
              value={country}
            />
            <Input
              label={"ノート"}
              onChange={(e) => setNote(e.target.value)}
              value={note}
            />
          </div>
          <div className={"upload"}>
            <Upload
              setAvatarUrl={setAvatarUrl}
              backgroundImage={avatarUrl}
            ></Upload>
          </div>
        </div>
        <button className={"submit"} onClick={handleSubmit}>
          変更内容を保存
        </button>
        <div style={{ height: 20 }}></div>
      </div>
    </div>
  );
}
function Input({ label, ...inputProps }) {
  return (
    <div className={"input-group"}>
      <label className="profile-label">{label}</label>
      <input type={"text"} {...inputProps} />
    </div>
  );
}

export default Profile;
