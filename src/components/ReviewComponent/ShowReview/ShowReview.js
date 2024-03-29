import DetailReview from "./DetailReview";
import "./ShowReview.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import { ReviewListService } from "../../../service/reviewService";
const ShowReview = (props) => {
  const [reivew, setReview] = useState([]);
  const [offOn, setOffOn] = useState(false);
  const getReview = async () => {
    try {
      const response = await ReviewListService(props.maidId);
      setReview(response.DT);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    console.log("=>> id", props.maidId);
    getReview();
  }, [props.maidId, props.isReview, offOn]);

  useEffect(() => {
    console.log("=>>", reivew);
  }, [reivew]);
  return (
    <div className="">
      <Modal
        show={props.show}
        onHide={props.handleClose}
        className="modal-custom"
      >
        <Modal.Header closeButton>
          {/* <Modal.Title>MaidProfile</Modal.Title> */}
        </Modal.Header>
        <Modal.Body className="ModalShowreview">
          <div className="showreview-container">
            <div className="showreview-title">Đánh giá của người dùng</div>
            <div className="showreview-infor">
              <div className="showreview-infor-title">
                Tên người giúp việc：
              </div>
              <div className="showreview-infor-name">{props.maidName}</div>
            </div>
            <div className="showreview-content">
              {reivew.map((item, index) => {
                return (
                  <DetailReview
                    key={index}
                    data={item}
                    offOn={offOn}
                    setOffOn={setOffOn}
                  />
                );
              })}
            </div>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer> */}
      </Modal>
    </div>
  );
};

export default ShowReview;
