import DetailReview from "./DetailReview"
import "./ShowReview.scss"
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


const ShowReview = (props) => {
    return (
        <div className="">
            <Modal show={props.show} onHide={props.handleClose} className="modal-custom">
                <Modal.Header closeButton>
                    {/* <Modal.Title>MaidProfile</Modal.Title> */}
                </Modal.Header>
                <Modal.Body className="ModalShowreview">
                    <div className="showreview-container">
                        <div className="showreview-title">レビューの一覧表示</div>
                        <div className="showreview-infor">
                            <div className="showreview-infor-title">メイド名：</div>
                            <div className="showreview-infor-name">Tuân waifu</div>
                        </div>
                        <div className="showreview-content">
                            <DetailReview />
                            <DetailReview />
                            <DetailReview />
                            <DetailReview />
                            <DetailReview />
                            <DetailReview />
                            <DetailReview />
                            <DetailReview />
                            <DetailReview />
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

    )
}

export default ShowReview