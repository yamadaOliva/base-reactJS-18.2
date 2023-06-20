//css
import "./FormCreateReview.scss"
import { Rating } from 'react-simple-star-rating'
import { useEffect, useState } from "react"
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const FormCreateReview = (props) => {
    const [rating, setRating] = useState(0)

    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate)
        // other logic
    }

    useEffect(() => {
        console.log("bố mày vote: ", rating)
    }, [rating])
    // Optinal callback functions
    const onPointerEnter = (value) => { console.log('Enter', value) }
    const onPointerLeave = (value) => console.log('Leave', value)
    const onPointerMove = (value, index) => console.log(value, index)
    return (

        <>
            <div className="">
                <Modal show={props.show} onHide={props.handleClose} className="modal-custom">
                    <Modal.Header closeButton>
                        {/* <Modal.Title>MaidProfile</Modal.Title> */}
                    </Modal.Header>
                    <Modal.Body className="ModalCreateReview">
                        <div className="FormCreateReview-Container">
                            <div className="FormCreateReview-title"> メイドレビュー </div>
                            <div className="FormCreateReview-infor">
                                <div className="FormCreateReview-infor-name">
                                    <div className="FormCreateReview-infor-name-title"> メイド名: </div>
                                    <div className="FormCreateReview-infor-name-content"> Phùng Ngọc Vinh </div>
                                </div>
                                <div className="FormCreateReview-rating-start">
                                    <Rating
                                        onClick={handleRating}
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
                                <textarea className="Content-textarea" name="content" />
                            </div>
                            <div className="FormCreateReview-button">
                                <button type="submit" className="btn btn-primary">レビューを送る</button>
                                <button type="reset" className="btn btn-danger">キャンセル</button>
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
    )
}

export default FormCreateReview