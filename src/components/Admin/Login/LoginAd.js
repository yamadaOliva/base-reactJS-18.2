import React from 'react'
import './LoginAd.scss'
import Header from '../../Header/Header'
import { FaKey, FaUser } from 'react-icons/fa'


const LoginAd = () => {
    return (
        <>
            <div className="loginAd-container">
                <div className="loginAd-header">
                    <Header />
                </div>
                <div className="loginAd-form">
                    <div className="loginAd-avt">
                        <img src="https://images.squarespace-cdn.com/content/v1/594c9a79414fb5311da8888f/1500584272653-TM0X3I8VC5YGDT4VYHZ8/unknown+border.jpg?format=500w" alt="" />
                    </div>
                    <div className="loginAd-title">
                        <h1>Administrator</h1>
                    </div>
                    <div className="loginAd-input">
                        <div className="loginAd-input-col">
                            <div className="loginAd-input-username-icon">
                                {/* <i className="fa fa-user" aria-hidden="true"></i> */}
                                <FaUser size={30} />
                            </div>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className="loginAd-input-col">
                            <div className="loginAd-input-password-icon">
                                {/* <i className="fa fa-key" aria-hidden="true"></i> */}
                                <FaKey size={30} />
                            </div>
                            <input type="password" placeholder="Password" />
                        </div>
                    </div>
                    <div className="loginAd-btn">
                        <button className="btn btn-primary">ログイン</button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default LoginAd