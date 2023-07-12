//import css
import "./DetailReview.scss";
import { Rating } from "react-simple-star-rating";
import { likeDislikeReport1 } from "../../../service/reportService";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
const DetailReview = (props) => {
  const user = useSelector((state) => state.user);
  const getRand = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const handleLikeDislike = async (agreement) => {
    if (!user.username) {
      toast.error("ログインしてください");
      return;
    } else {
      try {
        const res = await likeDislikeReport1({
          review_id: props.data.id,
          user_id: user.id,
          status: agreement,
        });
        props.setOffOn(!props.offOn);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="detail-review-container">
      <div className="detail-review-border">
        <div className="detail-review-title">
          <div className="detail-review-infor">
            <div className="detail-review-infor-name">
              {props.data.User.username}
            </div>
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
              <button onClick={() => handleLikeDislike(true)}>
                <div className="detail-review-vote-like-title">同意：</div>
              </button>
              <div className="detail-review-vote-like-number">
                {
                  props.data.Review_agreements.filter(
                    (item) => item.agreement === true
                  ).length
                }
              </div>
            </div>
            <div className="detail-review-vote-like-dis">
              <button onClick={() => handleLikeDislike(false)}>
                <div className="detail-review-vote-dislike-title">
                  不同意：
                </div>
              </button>
              <div className="detail-review-vote-dislike-number">
                {
                  props.data.Review_agreements.filter(
                    (item) => item.agreement === false
                  ).length
                }
              </div>
            </div>
          </div>
        </div>
        <div className="detail-review-content">
          <textarea
            className="ContentReview-textarea"
            name="content"
            value={props.data.comment}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailReview;
