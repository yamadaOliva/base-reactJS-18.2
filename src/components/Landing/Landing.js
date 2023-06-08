import logo from "./logo.png"
import banner from "./banner.png"
import "./style.css"

function Landing() {
    return (
        <div>
            <div className="navbar">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="right">
                    <label htmlFor="">ログイン： </label>
                    <a className="userBtn" href="http://localhost:3000/login">ユーザー</a>
                    <a className="maidBtn" href="http://localhost:3000/login">メイド</a>
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <div className="content">
                    <div className="banner">
                        <div style={{ width: '50%', height: '100%' }}></div>
                        <div style={{ paddingTop: 10, textAlign: 'center', width: '50%' }}>
                            <div className="message">
                                <span>
                                    新しいメンバーですか？<br />
                                    サインアップしてください！
                                </span>
                            </div>
                            <div className="selection">
                                <div style={{ width: '50%', textAlign: "right", paddingRight: 40 }}>
                                    <a href="">メイドを見つける</a>
                                </div>
                                <div style={{ width: '50%', textAlign: "left", paddingLeft: 40 }}>
                                    <a href="">私はメイドです。</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide-bar">
                        <button className="previous">&lt;</button>
                        <div className="element">
                            <img src={banner} alt="" />
                            <div><span>名１</span></div>
                        </div>
                        <div className="element">
                            <img src={banner} alt="" />
                            <div><span>名２</span></div>
                        </div>
                        <div className="element">
                            <img src={banner} alt="" />
                            <div><span>名３</span></div>
                        </div>
                        <div className="element">
                            <img src={banner} alt="" />
                            <div><span>名４</span></div>
                        </div>
                        <button className="next">&gt;</button>
                    </div>
                </div>
                <div className="advertisement">

                </div>
            </div>
        </div>
    )
}

export default Landing