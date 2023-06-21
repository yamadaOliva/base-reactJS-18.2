import Upload from './Upload'
import "./Profile.css"

function Profile(){
    return (
        <div>

            <a className={'back-link'} href="#a">
                <img className={'back-image'} src={window.location.origin + "/images/icons8-back.png"} alt=""/>
                <span className={'back-caption'}>戻る</span>
            </a>
            <div className={'container'}>
                <h2>ユーザー情報のへ更新</h2>
                <div className={'wrapper'}>
                    <div className={'inputs'}>
                        <Input
                            label={'名'}
                        />
                        <Input
                            label={'苗字'}
                        />
                        <Input
                            label={'電話番号'}
                        />
                        <Input
                            label={'住所'}
                        />
                        <Input
                            label={'都市'}
                        />
                        <Input
                            label={'国'}
                        />
                        <Input
                            label={'ノート'}
                        />
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
                <button className={'submit'} type={'submit'}>変更内容を保存</button>
                <div style={{height: 20}}></div>
            </div>
        </div>
    )
}
function Input({ label,...inputProps}){
    return (
        <div className={'input-group'}>
            <label className='profile-label'>{label}</label>
            <input type={'text'} {...inputProps}/>
        </div>
    )
}

export default Profile;