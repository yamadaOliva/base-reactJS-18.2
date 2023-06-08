import logo from "./logo.png"
import banner from "./banner.png"
import "./style.css"

function Landing() {
    return (
        <div>
            
            <div className="container">
                <div className="content">
                    <div className="banner">
                      
                        <div style={{paddingTop: 10, textAlign: 'center', width: '100%'}}>
                            <div className="message">
                            <span>
                                新しいメンバーですか？<br/>
                                サインアップしてください！
                            </span>
                            </div>
                            <div className="selection">
                                <div style={{width: '50%', textAlign: "right", paddingRight: 40}}>
                                    <a href="">メイドを見つける</a>
                                </div>
                                <div style={{width: '50%', textAlign: "left", paddingLeft: 40}}>
                                    <a href="">私はメイドです。</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide-bar">
                        <button className="previous">&lt;</button>
                        <div className="element">
                            <img src={banner} alt=""/>
                            <div><span>名１</span></div>
                        </div>
                        <div className="element">
                            <img src={banner} alt=""/>
                            <div><span>名２</span></div>
                        </div>
                        <div className="element">
                            <img src={banner} alt=""/>
                            <div><span>名３</span></div>
                        </div>
                        <div className="element">
                            <img src={banner} alt=""/>
                            <div><span>名４</span></div>
                        </div>
                        <button className="next">&gt;</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Landing