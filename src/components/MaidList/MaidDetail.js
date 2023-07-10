import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import "./MaidDetail.scss";
import { FiCircle } from "react-icons/fi";
import FormCreateReview from "../ReviewComponent/CreateReview/FormCreateReview";
import ShowReview from "../ReviewComponent/ShowReview/ShowReview";
import { CheckReviewService } from "../../service/reviewService";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import  ReportModal  from "./ReportModal";
const MaidDetail = (props) => {
  const user = useSelector((state) => state.user);
  const [id, setId] = useState(0);
  const [isCreateReview, setIsCreateReview] = useState(false);
  const [isReview, setIsReview] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const handleCloseModal = () => {
    setIsShowModal(false);
  };
  const handleCreateReview = async (event) => {
    event.preventDefault();
    try {
      console.log("user", user.id);
      const response = await CheckReviewService(props.maid.UserId, user.id);
      console.log("response", response);
      if (+response.EC == 400) {
        toast.error("レビューはすでに存在しています。");
        return;
      }
    } catch (error) {
      console.log("error", error);
    }
    setIsCreateReview(true);
  };

  const handleCloseCreateReview = () => {
    setIsCreateReview(false);
  };

  const [isShowReview, setIsShowReview] = useState(false);

  const handleShowReview = (event) => {
    event.preventDefault();
    setIsShowReview(true);
  };

  const handleCloseShowReview = () => {
    setIsShowReview(false);
  };

  const [dataRaw, setDataRaw] = useState({});
  useEffect(() => {
    setId(props.maid.id);
    setDataRaw(props.maid);
    console.log("=>>", props.maid);
  }, [props.maid]);
  return (
    <>
      <div className="">
        <Modal
          show={props.show}
          onHide={props.handleClose}
          className={
            `modal-custom ${isShowModal ? "opacity-0" : "opacity-100"}` 
          }
        >
          {/* <Modal.Header closeButton>
            <Modal.Title>MaidProfile</Modal.Title>
          </Modal.Header> */}
          <Modal.Body>
            <div className="container-detailMaid">
              <div className="infor-container">
                <ReportModal 
                  isShowModal={isShowModal}
                  handleCloseModal={handleCloseModal}
                  // data={dataRaw}
                />
                <div className="btn-report" onClick={
                  () => {
                    setIsShowModal(true);
                  }
                }
                 >報告</div>
                <div className="table-detail">
                  <form>
                    <h2 className="title-content ">メイドプロフィール</h2>
                    <div className="form-row">
                      <div className="form-group ">
                        <label for="inputEmail4">名</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputEmail4"
                          disabled
                          value={dataRaw.last_name}
                        ></input>
                      </div>
                      <div className="form-group ">
                        <label for="inputPassword4">苗字</label>
                        <input
                          className="form-control"
                          disabled
                          value={dataRaw.first_name}
                        ></input>
                      </div>

                      <div className="form-group ">
                        <label for="inputAddress">電話番号</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputAddress"
                          disabled
                          value={dataRaw.phone_number}
                        />
                      </div>
                      <div className="form-group ">
                        <label>住所</label>
                        <input
                          type="text"
                          className="form-control"
                          disabled
                          value={dataRaw.address}
                        />
                      </div>
                      <div className="form-group ">
                        <label>都市</label>
                        <input
                          type="text"
                          className="form-control"
                          disabled
                          value={dataRaw.city}
                        />
                      </div>
                      <div className="form-group ">
                        <label>国</label>
                        <input
                          type="text"
                          className="form-control"
                          disabled
                          value={dataRaw.country}
                        />
                      </div>
                      <div className="form-group ">
                        <label>ノート</label>
                        <input
                          type="text"
                          className="form-control"
                          disabled
                          value={dataRaw.description}
                        />
                      </div>
                      <div className="form-group ">
                        <label>経験</label>
                        <input
                          type="text"
                          className="form-control"
                          disabled
                          value={dataRaw.experience}
                        />
                      </div>
                      <div className="form-group ">
                        <label>スキル</label>
                        <input
                          type="text"
                          className="form-control"
                          disabled
                          value={dataRaw.skills}
                        />
                      </div>
                      <div className="form-group ">
                        <label>証明書</label>
                        <input
                          type="text"
                          className="form-control"
                          disabled
                          value={dataRaw.ceftification}
                        />
                      </div>
                      <div className="form-group ">
                        <label>言語</label>
                        {(dataRaw.Languages || []).map((item) => {
                          return (
                            <input
                              type="text"
                              className="form-control"
                              disabled
                              value={item.language_name}
                            />
                          );
                        })}
                      </div>
                      <div className="btn-submit ">
                        <button
                          // type="submit"
                          className="btn btn-primary"
                          onClick={(event) => handleCreateReview(event)}
                        >
                          レビューを書く
                        </button>
                        <button
                          // type="submit"
                          className="btn btn-primary"
                          onClick={(event) => handleShowReview(event)}
                        >
                          レビューの一覧表示{" "}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="infor-addtion">
                  <div className="btn-salary">
                    <h2>{dataRaw.price_per_hour + "$"}</h2>
                  </div>
                  <div className="btn-avt">
                    <img src={dataRaw.avatar_url} />
                  </div>
                  <div className="btn-evaluation">
                    <div className="btn-point">
                      <FiCircle className="edit-size-icon" />
                      <div className="point">{dataRaw.rating}</div>
                    </div>
                    <div className="evaluation-title">評価</div>
                  </div>

                  <div className="btn-cancle-rate">
                    <div className="cancle-rate-title">
                      リクエスト <br />
                      キャンセル率
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
      <FormCreateReview
        show={isCreateReview}
        handleClose={handleCloseCreateReview}
        maidId={id}
        setIsReview={setIsReview}
        isReview={isReview}
        maidName={dataRaw.first_name + " " + dataRaw.last_name}
      />
      <ShowReview
        show={isShowReview}
        handleClose={handleCloseShowReview}
        maidId={id}
        maidName={dataRaw.first_name + " " + dataRaw.last_name}
        setIsReview={setIsReview}
        isReview={isReview}
      />
    </>
  );
};
export { MaidDetail };
