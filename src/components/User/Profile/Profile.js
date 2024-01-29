import Upload from "./Upload";
import "./Profile.css";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  UserProfileService,
  getProfileService,
  updateProfileService,
} from "../../../service/userProfileService";
import { get } from "lodash";
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
  const [isExist, setIsExist] = useState(false);
  const goBack = () => {
    navigate(-1);
  };
  const getUserProfile = async () => {
    const res = await getProfileService(user.id);
    console.log(res);
    if (+res.EC == 200) {
      setFirstName(res.DT.first_name);
      setLastName(res.DT.last_name);
      setPhoneNumber(res.DT.phone_number);
      setAddress(res.DT.address);
      setCity(res.DT.city);
      setCountry(res.DT.country);
      setNote(res.DT.description);
      setAvatarUrl(res.DT.avatar_url);
      setIsExist(true);
    }
    return res;
  };

  useEffect(() => {
    // get token from cookie
    getUserProfile();
    if (!user.username) {
      toast.error("Hãy đăng nhập trước");
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
    console.log(data);
    if (isExist) {
      const res = await updateProfileService(data);
      if (+res.EC == 200) {
        toast.success("Thay đổi thành công");
      } else {
        toast.error("Thay đổi thất bại");
      }
      console.log(res);
      return;
    }

    const res = await UserProfileService(data);
    if (+res.EC == 200) {
      toast.success("Thay đổi thành công");
    } else {
      toast.error("Thay đổi thất bại");
    }
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
        <span className={"back-caption"}>Quay lại</span>
      </a>
      <div className={"container"}>
        <h2>Cập nhật thông tin cá nhân</h2>
        <div className={"wrapper"}>
          <div className={"inputs"}>
            <Input
              label={"Họ"}
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
            <Input
              label={"Tên"}
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
            <Input
              label={"Số điện thoại"}
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
            />
            <Input
              label={"Địa chỉ"}
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />
            <Input
              label={"Thành phố"}
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
            <Input
              label={"Quốc gia"}
              onChange={(e) => setCountry(e.target.value)}
              value={country}
            />
            <Input
              label={"Ghi chú "}
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
          Cập nhật
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
