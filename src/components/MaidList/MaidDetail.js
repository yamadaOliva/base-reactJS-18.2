import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import "./MaidDetail.scss";
import { FiCircle } from 'react-icons/fi';
const MaidDetail = (props) => {
  const [dataRaw, setDataRaw] = useState({});
  useEffect(() => {
    setDataRaw(props.maid);
    console.log("=>>", props.maid);
  }, [props.maid]);
  return (
    <>
      <div className="">
        <Modal show={props.show} onHide={props.handleClose} className="modal-custom">
          <Modal.Header closeButton>
            <Modal.Title>MaidProfile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container-detailMaid">

              <div className="infor-container">
                <div className="btn-report">報告</div>
                <div className="table-detail">
                  <form>
                    <h2 className="title-content ">メイドプロフィール</h2>
                    <div className="form-row">
                      <div className="form-group ">
                        <label for="inputEmail4">名</label>
                        <input type="text" className="form-control" id="inputEmail4" disabled value={dataRaw.last_name}></input>
                      </div>
                      <div className="form-group ">
                        <label for="inputPassword4">苗字</label>
                        <input className="form-control" disabled value={dataRaw.first_name}></input>
                      </div>

                      <div className="form-group ">
                        <label for="inputAddress">電話番号</label>
                        <input type="text" className="form-control" id="inputAddress" disabled value={dataRaw.phone_number} />
                      </div>
                      <div className="form-group ">
                        <label >住所</label>
                        <input type="text" className="form-control" disabled value={dataRaw.address} />
                      </div>
                      <div className="form-group ">
                        <label >都市</label>
                        <input type="text" className="form-control" disabled value={dataRaw.city} />
                      </div>
                      <div className="form-group ">
                        <label >国</label>
                        <input type="text" className="form-control" disabled value={dataRaw.country} />
                      </div>
                      <div className="form-group ">
                        <label >ノート</label>
                        <input type="text" className="form-control" disabled value={dataRaw.description} />
                      </div>
                      <div className="form-group ">
                        <label >経験</label>
                        <input type="text" className="form-control" disabled value={dataRaw.experience} />
                      </div>
                      <div className="form-group ">
                        <label >スキル</label>
                        <input type="text" className="form-control" disabled value={dataRaw.skills} />
                      </div>
                      <div className="form-group ">
                        <label >証明書</label>
                        <input type="text" className="form-control" disabled value={dataRaw.ceftification} />
                      </div>
                      <div className="form-group ">
                        <label >言語</label>
                        {
                          (dataRaw.Languages || []).map((item) => {
                            return <input type="text" className="form-control" disabled value={item.language_name} />
                          }
                          )
                        }
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
                    <h2>{dataRaw.price_per_hour+"$"}</h2>
                  </div>
                  <div className="btn-avt">
                    <img src={dataRaw.avatar_url}/>
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
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};
export { MaidDetail };
