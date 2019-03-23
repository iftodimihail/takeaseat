import React from 'react';
import Avatar from 'react-avatar';
import { Rate } from 'antd';
import moment from 'moment/moment';

const SingleReview = (props) => (
  <div className="review">
    <div className="avatar-name">
      <Avatar name="Iftodi Mihai" round maxInitials={1} />
      <span className="name">Iftodi Mihai</span>
    </div>
    <div className="review-info">
      <div className="rating-date">
        <Rate disabled allowHalf defaultValue={Math.floor(parseFloat((Math.random() * 5).toFixed(1)) * 2) / 2} />
        <span>{moment().locale('ro').format('DD MMMM YYYY HH:mm')}</span>
      </div>
      <div className="commentary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
      </div>
    </div>
  </div>
);

export default SingleReview;
