import Header from "../Header/Header";
import './DetailMaid.scss';
import { useState } from 'react';
import { FiCircle } from 'react-icons/fi';



export default function DetailMaid(props) {
    return (
        <>
            <Header />
            <div className="container-detailMaid">

                <div className="infor-container">
                    <div className="btn-report">報告</div>
                    <div className="table-detail">
                        <form>
                            <h2 className="title-content ">メイドプロフィール</h2>
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
                        <div className="btn-salary">
                            <h2>$20</h2>
                        </div>
                        <div className="btn-avt">
                            <img src="https://th.bing.com/th/id/OIP.ZTaJeuzR79d8RrLA3bgLxQHaGq?pid=ImgDet&rs=1" />
                        </div>
                        <div className="btn-evaluation">
                            <div className="btn-point">
                                <FiCircle className="edit-size-icon" />
                                <div className="point">4.5</div>
                            </div>
                            <div className="evaluation-title">評価</div>
                        </div>

                        <div className="btn-cancle-rate">
                            <div className="cancle-rate-title">
                                リクエスト <br />キャンセル率
                            </div>
                            <div className="cancle-rate-render">
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
