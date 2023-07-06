import './UserinforManage.scss'
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import {
    UserProfileService,
    getProfileService,
    updateProfileService,
} from "../../../service/userProfileService";
import Switch from "react-switch";
import Upload from "../../User/Profile/Upload";

const UserInforManage = () => {
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

    const [isBlock, setIsBlock] = useState(false);

    const handleChange = (checked) => {
        setIsBlock(checked);
    };

    // useEffect(() => {
    //     // get token from cookie
    //     getUserProfile();
    //     if (!user.username) {
    //         toast.error("ログインしてください");
    //         navigate("/login");
    //         return;
    //     }
    // }, []);

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
                toast.success("更新成功");
            } else {
                toast.error("更新失敗");
            }
            console.log(res);
            return;
        }

        const res = await UserProfileService(data);
        if (+res.EC == 200) {
            toast.success("更新成功");
        } else {
            toast.error("更新失敗");
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
                <span className={"back-caption"}>戻る</span>
            </a>
            <div className={"container"}>
                <h2>ユーザー情報</h2>
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
                    <div className={"upload-admin"}>
                        <div className={"avatar"}>
                            <Upload
                                setAvatarUrl={setAvatarUrl}
                                backgroundImage={avatarUrl}
                            ></Upload>
                        </div>
                        <div className={"cancle-rate"}>
                            <div className={"cancle-value"}>10%</div>
                            <div className={"cancle-caption"}>キャンセル率</div>
                        </div>
                        <div className={"block"}>
                            <div className={"block-btn"}>
                                <Switch
                                    onChange={handleChange}
                                    checked={isBlock}
                                    checkedIcon={false}
                                    uncheckedIcon={false}
                                    offHandleColor='#F06E6E'
                                    onHandleColor='#71F06E'
                                    onColor='#888888'
                                    height={40}
                                    width={80}
                                    handleDiameter={35}
                                />
                            </div>
                            <div className={"block-caption"}>禁止</div>
                        </div>
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

export default UserInforManage;
