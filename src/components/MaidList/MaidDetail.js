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
import ReportModal from "./ReportModal";
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
        toast.error("Phải thuê mới được đánh giá");
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
    console.log("=>>11", props.maid);
  }, [props.maid]);
  return (
    <>
      <div className="">
        <Modal
          show={props.show}
          onHide={props.handleClose}
          className={`modal-custom ${
            isShowModal ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* <Modal.Header closeButton>
            <Modal.Title>MaidProfile</Modal.Title>
          </Modal.Header> */}
          <Modal.Body>
            <div className="container-detailMaid">
              <div className="infor-container">
                <div
                  className="btn-report cursor-pointer"
                  onClick={() => {
                    setIsShowModal(true);
                  }}
                >
                  Báo cáo
                </div>
                <div className="table-detail">
                  <form>
                    <h2 className="title-content ">Hồ sơ</h2>
                    <div className="form-row">
                      <div className="form-group ">
                        <label for="inputEmail4">Họ</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputEmail4"
                          disabled
                          value={dataRaw.last_name}
                        ></input>
                      </div>
                      <div className="form-group ">
                        <label for="inputPassword4">Tên</label>
                        <input
                          className="form-control"
                          disabled
                          value={dataRaw.first_name}
                        ></input>
                      </div>

                      <div className="form-group ">
                        <label for="inputAddress">Số điện thoại</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputAddress"
                          disabled
                          value={dataRaw.phone_number}
                        />
                      </div>
                      <div className="form-group ">
                        <label>Địa chỉ</label>
                        <input
                          type="text"
                          className="form-control"
                          disabled
                          value={dataRaw.address}
                        />
                      </div>
                      <div className="form-group ">
                        <label>Thành phố</label>
                        <input
                          type="text"
                          className="form-control"
                          disabled
                          value={dataRaw.city}
                        />
                      </div>
                      <div className="form-group ">
                        <label>Quốc gia</label>
                        <input
                          type="text"
                          className="form-control"
                          disabled
                          value={dataRaw.country}
                        />
                      </div>
                      <div className="form-group ">
                        <label>Chú ý</label>
                        <input
                          type="text"
                          className="form-control"
                          disabled
                          value={dataRaw.description}
                        />
                      </div>
                      <div className="form-group ">
                        <label>Kinh nghiệm</label>
                        <input
                          type="text"
                          className="form-control"
                          disabled
                          value={dataRaw.experience}
                        />
                      </div>
                      <div className="form-group ">
                        <label>Kỹ năng </label>

                        <div className="w-full flex flex-row items-center">
                          <input
                            type="checkbox"
                            className="form-check h-4 w-4"
                            id="food"
                            checked={dataRaw.skills?.includes("food")}
                          />
                          <label htmlFor="food" className="ml-2">
                            Nấu ăn
                          </label>
                          <input
                            type="checkbox"
                            className="form-check h-4 w-4"
                            id="care"
                            checked={dataRaw.skills?.includes("care")}
                          />
                          <label htmlFor="care" className="ml-2 grow">
                            Chăm sóc trẻ
                          </label>
                        </div>
                      </div>
                      <div className="form-group ">
                        <label>Chứng chỉ</label>
                        <input
                          type="text"
                          className="form-control"
                          disabled
                          value={dataRaw.ceftification}
                        />
                      </div>
                      <div className="form-group ">
                        <label>Ngôn ngữ</label>
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
                          Đánh giá{" "}
                        </button>
                        <button
                          // type="submit"
                          className="btn btn-primary"
                          onClick={(event) => handleShowReview(event)}
                        >
                          Danh sách đánh giá{" "}
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
                    <div className="evaluation-title">Đánh giá</div>
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
      <ReportModal
        isShowModal={isShowModal}
        handleCloseModal={handleCloseModal}
        data={props.maid.id}
      />
    </>
  );
};
export { MaidDetail };
