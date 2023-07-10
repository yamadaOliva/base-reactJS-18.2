import { FaEye } from 'react-icons/fa'
import Switch from "react-switch";
import './InforMaid.scss'

const InforMaid = (props) => {

    const { id, name, numberphone, address, exp, skill, authentication, price, active,rating } = props;
    

    const handleChange = (checked) => {
        // true la mau xanh
        // false la mau do            
        // setChecked(checked);
        console.log("dsfsdf=>",checked);
        props.updateActiveStatus(id, checked);
        console.log("id: " + id + " checked: " + checked);
        if (checked === true) {
            props.setTotalBlock(props.totalBlock - 1);
        } else {
            props.setTotalBlock(props.totalBlock + 1);
        }
    }

    return (
        <div className="infor-maid" key={id}>
            <div className="infor-maid__avt-maid">
                <img src={props.avatar} alt="" />
                <div className="infor-maid__price">
                    <span>価格：</span>
                    <span>{price}</span>
                </div>
            </div>
            <div className="infor-maid__detail">
                <div className="infor-maid__detail__Id__name">
                    <div className="infor-maid__detail__Id">
                        <span>ID: </span>
                        <span>{id}</span>
                    </div>
                    <div className="infor-maid__detail__name">
                        <span>名前: </span>
                        <span>{name}</span>
                    </div>
                </div>
                <div className="infor-maid__detail__numberphone">
                    <span>電話番号: </span>
                    <span>{numberphone}</span>
                </div>
                <div className="infor-maid__detail__address">
                    <span>住所: </span>
                    <span>{address}</span>
                </div>
                <div className="infor-maid__detail__exp_authentication">
                    <div className="infor-maid__detail__exp">
                        <span>経験: </span>
                        <span>{exp}</span>
                    </div>
                    <div className="infor-maid__detail__authentication">
                        <span>認証: </span>
                        <span>{authentication}</span>
                    </div>
                </div>
                <div className="infor-maid__detail__skill">
                    <span>スキル: </span>
                    <span>{skill}</span>
                </div>

            </div>
            <div className="infor-maid__btn_block">
                <div className="infor-maid__btn__title">
                    状態
                </div>
                <div className="infor-maid__btn__switch">
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
            <div className="infor-maid__cancle__rate">
                <div className="infor-maid__rate__value">0%</div>
                <div className="infor-maid__rate__title">キャンセル率</div>
            </div>
            <div className="infor-maid__view__detal__evaluation">
                <div className="infor-maid__view_detail">
                    <FaEye size={30} className='icon-eye-admin' />
                </div>
                <div className="infor-maid__evaluation">
                    <div className="infor-maid__evaluation__value">{rating}</div>
                    <div className="infor-maid__evaluation__title">総合評価</div>
                </div>
            </div>
        </div>

    )
}

export default InforMaid