//import css
import './DetailReview.scss'
import { Rating } from 'react-simple-star-rating'

const DetailReview = (props) => {
    const getRand = (min,max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
        <div className="detail-review-container">
            <div className="detail-review-border">
                <div className="detail-review-title">
                    <div className="detail-review-infor">
                        <div className="detail-review-infor-name">{props.data.User.username}</div>
                        <div className="detail-review-infor-start">
                            <Rating
                                size={25}
                                allowHover={false}
                                initialValue={props.data.rating}
                                disable
                            />
                        </div>
                    </div>
                    <div className="detail-review-vote">
                        <div className="detail-review-vote-like-dis">
                            <div className="detail-review-vote-like-title">同意：</div>
                            <div className="detail-review-vote-like-number">{getRand(1,10)}</div>
                        </div>
                        <div className="detail-review-vote-like-dis">
                            <div className="detail-review-vote-dislike-title">同意しない：</div>
                            <div className="detail-review-vote-dislike-number">{getRand(1,10)}</div>
                        </div>
                    </div>
                </div>
                <div className="detail-review-content">
                    <textarea className="ContentReview-textarea" name="content" value={props.data.comment} />

                </div>
            </div>
        </div>
    )
}

export default DetailReview