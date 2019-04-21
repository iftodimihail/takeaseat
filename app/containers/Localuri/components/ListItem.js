import React from 'react';
import { NavLink } from 'react-router-dom';
import { Rate, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ListItem = (props) => (
  <div className="place-container">
    <NavLink to={props.name.toLowerCase().split(' ').join('-')} className="place-list-item">
      <div>
        <img src={props.img} alt="bar" />
      </div>
      <div className="details">
        <h2>{props.name}</h2>
        <Rate disabled allowHalf defaultValue={Math.floor(parseFloat((Math.random() * 5).toFixed(1)) * 2) / 2} />
        <p className="address"><FontAwesomeIcon icon={faMapMarkerAlt} />{props.address}</p>
        <div className="detail-types">
          <span>{props.priceType}</span>
          <span>{props.placeType}</span>
          <span>{props.kitchenType}</span>
        </div>
      </div>
    </NavLink>
    <NavLink to={`${props.name.toLowerCase().split(' ').join('-')}`} className="reservation-button">
      <Button type="primary" size="small">Rezervă</Button>
    </NavLink>
  </div>
);

export default ListItem;
