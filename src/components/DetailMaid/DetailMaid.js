import "./DetailMaid.scss";
import { useState, useEffect } from "react";
import { FiCircle } from "react-icons/fi";
import Upload from "../User/Profile/Upload";
import {
  FindMaidByIdService,
  createMaid,
  updateMaid,
} from "../../service/maidService";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export default function DetailMaid() {
  const [avatarUrl, setAvatarUrl] = useState(
    window.location.origin + "/images/upload-image.png"
  );
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [note, setNote] = useState("");
  const [experience, setExperience] = useState(0);
  const [skills, setSkills] = useState("");
  const [certification, setCertification] = useState("");
  const [language_name, setLanguage_name] = useState("");
  const [price_per_hour, setPrice_per_hour] = useState(0);
  const [isExist, setIsExist] = useState(false);
  const [idProfile, setIdProfile] = useState(0);
  const [rate, setRate] = useState(0);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const getMaidById = async () => {
    const res = await FindMaidByIdService(user.id);
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
      setExperience(res.DT.experience);
      setSkills(res.DT.skills);
      setCertification(res.DT.ceftification);
      setIdProfile(res.DT.id);
      setRate(res.DT.rating);
      let language_ptr = "";
      let ptr_language = res.DT.Languages.map((item) => {
        language_ptr += item.language_name + ", ";
        return item.language_name;
      });
      //delete last character
      language_ptr = language_ptr.slice(0, -2);
      console.log(language_ptr);
      setLanguage_name(language_ptr);
      setPrice_per_hour(res.DT.price_per_hour);
      setIsExist(true);
    }
    return res;
  };

  useEffect(() => {
    if (!user.username) {
      toast.error("ログインしてください");
      navigate("/login");
      return;
    }
    getMaidById();
  }, []);

  const handleSubmit = async () => {
    const ptr = language_name.split(",");
    const data = {
      profile_id: idProfile,
      id: user.id,
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
      address: address,
      city: city,
      country: country,
      description: note,
      avatar_url: avatarUrl,
      experience: experience,
      skills: skills,
      certification: certification,
      language_name: ptr,
      price_per_hour: price_per_hour,
    };
    if (isExist) {
      try {
        const res = await updateMaid(data);
        if (+res.EC == 200) {
          toast.success("更新成功");
        } else {
          toast.error("更新失敗");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const res = await createMaid(data);
        if (+res.EC == 200) {
          toast.success("更新成功");
        } else {
          toast.error("更新失敗");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <div className="container-detailMaid">
        <div className="infor-container">
          <div className="table-detail">
            <div className="form-abc">
              <h2 className="title-content ">メイドプロフィール</h2>
              <div className="form-row">
                <div className="form-group ">
                  <label for="inputEmail4">名</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail4"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="form-group ">
                  <label for="inputPassword4">苗字</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword4"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label for="inputAddress">電話番号</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className="form-group ">
                  <label>住所</label>
                  <input
                    type="text"
                    className="form-control"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="form-group ">
                  <label>都市</label>
                  <input
                    type="text"
                    className="form-control"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div className="form-group ">
                  <label>国</label>
                  <input
                    type="text"
                    className="form-control"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
                <div className="form-group ">
                  <label>ノート</label>
                  <input
                    type="text"
                    className="form-control"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                  />
                </div>
                <div className="form-group ">
                  <label>経験</label>
                  <input
                    type="text"
                    className="form-control"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                  />
                </div>
                <div className="form-group ">
                  <label>スキル</label>
                  <input
                    type="text"
                    className="form-control"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                  />
                </div>
                <div className="form-group ">
                  <label>証明書</label>
                  <input
                    type="text"
                    className="form-control"
                    value={certification}
                    onChange={(e) => setCertification(e.target.value)}
                  />
                </div>
                <div className="form-group ">
                  <label>言語</label>
                  <input
                    type="text"
                    className="form-control"
                    value={language_name}
                    onChange={(e) => setLanguage_name(e.target.value)}
                  />
                </div>
                <div className="form-group ">
                  <label>値段</label>
                  <input
                    type="text"
                    className="form-control"
                    value={price_per_hour}
                    onChange={(e) => setPrice_per_hour(e.target.value)}
                  />
                </div>
                <div className="btn-submit ">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmit}
                  >
                    プロフィールを更新する
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="infor-addtion">
            <div className="btn-salary"></div>
            <div className="btn-avt1">
              <Upload
                setAvatarUrl={setAvatarUrl}
                backgroundImage={avatarUrl}
              ></Upload>
            </div>
            <div className="btn-evaluation">
              <div className="btn-point">
                <FiCircle className="edit-size-icon" />
                <div className="point">{rate}</div>
              </div>
              <div className="evaluation-title">評価</div>
            </div>

            <div className="btn-cancle-rate">
              <div className="cancle-rate-title">
                リクエスト <br />
                キャンセル率
              </div>
              <div className="cancle-rate-render">
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
