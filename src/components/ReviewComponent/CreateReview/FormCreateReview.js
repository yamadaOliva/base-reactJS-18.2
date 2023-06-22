//css
import "./FormCreateReview.scss";
import { Rating } from "react-simple-star-rating";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ReviewCreateService } from "../../../service/reviewService";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
const FormCreateReview = (props) => {
  const user = useSelector((state) => state.user);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [reviewRate, setReviewRate] = useState("");
  const ratingRate = [
    "very bad",
    "bad",
    "not good",
    "good",
    "very good",
    "excellent",
  ];

  // Catch Rating value
  const handleRate = (rate) => {
    setRating(rate);
    console.log("Rating selected: ", rate);
  };
  const handleRating = async () => {
    console.log("Rating selected: ", user);
    if (!user.username) {
      toast.error("You need to login to create review");
    } else {
      console.log(ratingRate[rating]);
      const res = await ReviewCreateService({
        maid_id: props.maidId,
        UserId: user.id,
        rating: rating,
        comment: comment,
        review: ratingRate[rating],
      });
      toast.success("Create review success");
      
      setRating(0);
      setComment("");
    props.setIsReview(!props.isReview);      
      props.handleClose();
      console.log(res);
    }
    // other logic
  };

  // Optinal callback functions
  const onPointerEnter = (value) => {
    console.log("Enter", value);
  };
  const onPointerLeave = (value) => console.log("Leave", value);
  const onPointerMove = (value, index) => console.log(value, index);
  return (
    <>
      <div className="">
        <Modal
          show={props.show}
          onHide={props.handleClose}
          className="modal-custom"
        >
          <Modal.Header closeButton>
            {/* <Modal.Title>MaidProfile</Modal.Title> */}
          </Modal.Header>
          <Modal.Body className="ModalCreateReview">
            <div className="FormCreateReview-Container">
              <div className="FormCreateReview-title"> メイドレビュー </div>
              <div className="FormCreateReview-infor">
                <div className="FormCreateReview-infor-name">
                  <div className="FormCreateReview-infor-name-title">
                    {" "}
                    メイド名:{" "}
                  </div>
                  <div className="FormCreateReview-infor-name-content">
                    {" "}
                    {props.maidName}{" "}
                  </div>
                </div>
                <div className="FormCreateReview-rating-start">
                  <Rating
                    onClick={handleRate}
                    onPointerEnter={onPointerEnter}
                    onPointerLeave={onPointerLeave}
                    onPointerMove={onPointerMove}
                    transition
                    size={75}
                    // /* Available Props */
                  />
                </div>
              </div>
              <div className="FormCreateReview-content">
                <div className="Content-title">レビュー内容:</div>
                <textarea
                  className="Content-textarea"
                  name="content"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </div>
              <div className="FormCreateReview-button">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleRating}
                >
                  レビューを送る
                </button>
                <button
                  type="reset"
                  className="btn btn-danger"
                  onClick={props.handleClose}
                >
                  キャンセル
                </button>
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
    </>
  );
};

export default FormCreateReview;
