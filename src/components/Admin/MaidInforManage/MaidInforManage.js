import './MaidInforMange.scss'
import { FiCircle } from 'react-icons/fi';
import Switch from "react-switch";
import { useState } from 'react';

const MaidInforManage = () => {

    const [isblock, setIsblock] = useState(false);
    const handleChange = (checked) => {
        setIsblock(checked);
    }

    return (
        <>
            <div className="container-detailMaid">

                <div className="infor-container">
                    <div className="table-detail">
                        <form>
                            <h2 className="title-content ">メイド情報更新</h2>
                            <div className="form-row">
                                <div className="form-group ">
                                    <label for="inputEmail4">名</label>
                                    <input type="email" className="form-control" id="inputEmail4" />
                                </div>
                                <div className="form-group ">
                                    <label for="inputPassword4">苗字</label>
                                    <input type="password" className="form-control" id="inputPassword4" />
                                </div>

                                <div className="form-group ">
                                    <label for="inputAddress">電話番号</label>
                                    <input type="text" className="form-control" id="inputAddress" />
                                </div>
                                <div className="form-group ">
                                    <label >住所</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group ">
                                    <label >都市</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group ">
                                    <label >国</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group ">
                                    <label >ノート</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group ">
                                    <label >経験</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group ">
                                    <label >スキル</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group ">
                                    <label >証明書</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group ">
                                    <label >言語</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="btn-submit ">
                                    <button type="submit" className="btn btn-primary">レビューを書く</button>
                                    <button type="submit" className="btn btn-primary">レビューの一覧表示 </button>
                                </div>
                            </div>

                        </form>
                    </div>
                    <div className="infor-addtion">
                        <div className="btn-avt">
                            <img src="https://th.bing.com/th/id/OIP.ZTaJeuzR79d8RrLA3bgLxQHaGq?pid=ImgDet&rs=1" />
                        </div>
                        <div className="btn-price">
                            <div className="price-title">
                                <span className='title-col1'>時間あたりの料金</span>
                                <span className='title-col2'>(USD)</span>
                            </div>
                            <div className="price-content">
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="btn-cancle-rate">
                            <div className="cancle-rate">
                                10％
                            </div>
                            <div className="cancle-title">
                                キャンセル率
                            </div>
                        </div>
                        <div className="btn-block">
                            <div className="block-switch">
                                <Switch
                                    onChange={handleChange}
                                    checked={isblock}
                                    checkedIcon={false}
                                    uncheckedIcon={false}
                                    offHandleColor='#F06E6E'
                                    onHandleColor='#71F06E'
                                    onColor='#888888'
                                />
                            </div>
                            <div className="block-title">
                                禁止
                            </div>
                        </div>
                        <div className="btn-evaluation-review"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MaidInforManage