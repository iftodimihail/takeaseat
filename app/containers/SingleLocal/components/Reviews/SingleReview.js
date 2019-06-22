import React from 'react';
import Avatar from 'react-avatar';
import { Rate } from 'antd';
import moment from 'moment/moment';

const dateFormat = window.innerWidth < 994 ? 'DD MMMM YYYY' : 'DD MMMM YYYY HH:mm';

const SingleReview = (props) => (
  <div className="review">
    <div className="avatar-name">
      <Avatar name={`${props.first_name}`} round maxInitials={1} size={window.innerWidth < 994 ? 60 : 100} />
      <span className="name">{`${props.first_name}`}</span>
    </div>
    <div className="review-info">
      <div className="rating-date">
        <Rate disabled defaultValue={props.rating} />
        <span>{moment(props.date).locale('ro').format(dateFormat)}</span>
      </div>
      <div className="commentary">
        {props.review_text}
      </div>
    </div>
  </div>
);

export default SingleReview;
