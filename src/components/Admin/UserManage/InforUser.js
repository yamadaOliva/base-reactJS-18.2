import './InforUser.scss'
import { FaEye } from 'react-icons/fa'
import { IoIosSwitch } from 'react-icons/io'

const InforUser = () => {
    return (
        <>
            <div className="infor-user">
                <div className="infor-user__avt">
                    <img src="https://images.squarespace-cdn.com/content/v1/594c9a79414fb5311da8888f/1500584272653-TM0X3I8VC5YGDT4VYHZ8/unknown+border.jpg?format=500w" alt="" />
                </div>
                <div className="infor-user__detail">

                </div>
                <div className="infor-user__btn_block">
                    <div className="infor-user__btn__title">
                        禁止
                    </div>
                    <div className="infor-user__btn__switch">
                        <IoIosSwitch size={30} className='icon-switch' />
                    </div>
                </div>
                <div className="infor-user__cancle__rate">
                    <div className="infor-user__rate__value">80%</div>
                    <div className="infor-user__rate__title">キャンセル率</div>
                </div>
                <div className="infor-user__view_detail">
                    <FaEye size={50} className='icon-eye' />
                </div>
            </div>
        </>
    )
}

export default InforUser