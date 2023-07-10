import { avatar } from '@material-tailwind/react';
import './InforUser.scss'
import { FaEye } from 'react-icons/fa'
import Switch from "react-switch";

const InforUser = (props) => {

    const { id, name, numberphone, address, active } = props;
    console.log("active: " + active);

    const handleChange = (checked) => {
        // true la mau xanh
        // false la mau do            
        // setChecked(checked);
        props.updateActiveStatus(id, checked);
        console.log("id: " + id + " checked: " + checked);
        if (checked === true) {
            props.setTotalBlock(props.totalBlock - 1);
        } else {
            props.setTotalBlock(props.totalBlock + 1);
        }
    }

    return (
        <div className="infor-user" key={id}>
            <div className="infor-user__avt">
                <img src={props.avatar} alt="" />
            </div>
            <div className="infor-user__detail">
                <div className="infor-user__detail__Id__name">
                    <div className="infor-user__detail__Id">
                        <span>ID: </span>
                        <span>{id}</span>
                    </div>
                    <div className="infor-user__detail__name">
                        <span>名前: </span>
                        <span>{name}</span>
                    </div>
                </div>
                <div className="infor-user__detail__numberphone">
                    <span>電話番号: </span>
                    <span>{numberphone}</span>
                </div>
                <div className="infor-user__detail__address">
                    <span>住所: </span>
                    <span>{address}</span>
                </div>
            </div>
            <div className="infor-user__btn_block">
                <div className="infor-user__btn__title">
                    状態
                </div>
                <div className="infor-user__btn__switch">
                    <label>
                        <Switch
                            onChange={handleChange}
                            checked={active}
                            checkedIcon={false}
                            uncheckedIcon={false}
                            offHandleColor='#F06E6E'
                            onHandleColor='#71F06E'
                            onColor='#888888'
                        />
                    </label>
                </div>
            </div>
            <div className="infor-user__cancle__rate">
                <div className="infor-user__rate__value">80%</div>
                <div className="infor-user__rate__title">キャンセル率</div>
            </div>
            <div className="infor-user__view_detail">
                <FaEye size={50} className='icon-eye-admin' />
            </div>
        </div>

    )
}

export default InforUser