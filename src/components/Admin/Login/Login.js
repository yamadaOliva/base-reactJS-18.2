import "./Login.css"
import {useState} from "react";

export default function Login (){
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className={'container'}>
            <div className={'avatar'}>
                <img src={window.location.origin + "/images/avatar1.png"} alt=""/>
            </div>
            <h1>Administrator</h1>
            <div className={'mail'}>
                <img src={window.location.origin + "/images/avatar2.png"} alt=""/>

                <input type="text"
                    onChange={e => {setMail(e.target.value)}}
                />
            </div>
            <div className={'password'}>
                <img src={window.location.origin + "/images/key.png"} alt=""/>
                <input type="password"
                    onChange={e => {setPassword(e.target.value)}}
                />
            </div>
            <button className={'submit'}>ログイン</button>
            <div style={{height: 40}}></div>
        </div>
    )
}
