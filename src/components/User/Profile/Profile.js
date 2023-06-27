import Upload from './Upload'
import "./Profile.css"
import {useState} from "react";

function Profile(){

    const [ name, setName ] = useState('Ling');
    const [ surname, setSurname ] = useState('Ta');
    const [ phone, setPhone ] = useState('0231232');
    const [ address, setAddress ] = useState('Thanh Thuy');
    const [ city, setCity ] = useState('Phu Tho');
    const [ country, setCountry ] = useState('Viet Nam');
    const [ note, setNote ] = useState('');

    console.log(name)
    return (
        <div>

            <a className={'back-link'} href="">
                <img className={'back-image'} src={window.location.origin + "/images/icons8-back.png"} alt=""/>
                <span className={'back-caption'}>戻る</span>
            </a>
            <div className={'container'}>
                <h2>ユーザー情報のへ更新</h2>
                <div className={'wrapper'}>
                    <div className={'inputs'}>
                        <div className={'input-group'}>
                            <label>{'名'}</label>
                            <input type={'text'} onChange={(e) => {setName(e.target.value)}} value={name}/>
                        </div>
                        <div className={'input-group'}>
                            <label>{'苗字'}</label>
                            <input type={'text'} onChange={(e) => {setSurname(e.target.value)}} value={surname}/>
                        </div>
                        <div className={'input-group'}>
                            <label>{'電話番号'}</label>
                            <input type={'text'} onChange={(e) => {setPhone(e.target.value)}} value={phone}/>
                        </div>
                        <div className={'input-group'}>
                            <label>{'住所'}</label>
                            <input type={'text'} onChange={(e) => {setAddress(e.target.value)}} value={address}/>
                        </div>
                        <div className={'input-group'}>
                            <label>{'都市'}</label>
                            <input type={'text'} onChange={(e) => {setCity(e.target.value)}} value={city}/>
                        </div>
                        <div className={'input-group'}>
                            <label>{'国'}</label>
                            <input type={'text'} onChange={(e) => {setCountry(e.target.value)}} value={country}/>
                        </div>
                        <div className={'input-group'}>
                            <label>{'ノート'}</label>
                            <input type={'text'} onChange={(e) => {setNote(e.target.value)}} value={note}/>
                        </div>
                    </div>
                    <div className={'upload'}>
                        <Upload>
                            {{
                                width: 200,
                                height: 200,
                                backgroundImage: 'url("'+window.location.origin+'/images/upload-image.png")',
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                            }}
                        </Upload>
                    </div>
                </div>
                <button className={'submit'}　type={'submit'}>変更内容を保存</button>
                <div style={{height: 20}}></div>
            </div>
        </div>
    )
}
function Input({ label,...inputProps}){
    console.log(inputProps)
    return (
        <div className={'input-group'}>
            <label>{label}</label>
            <input type={'text'} {...inputProps}/>
        </div>
    )
}

export default Profile;