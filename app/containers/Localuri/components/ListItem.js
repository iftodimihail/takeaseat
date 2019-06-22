import React from 'react';
import { NavLink } from 'react-router-dom';
import { Rate, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faMoneyBill, faUtensils } from '@fortawesome/free-solid-svg-icons';
import DarkenContainer from '../../../components/DarkenContainer';
import { evalRating } from '../../../utils/common';

class ListItem extends React.Component {
  state = {
    hovered: false
  };

  enableHoverStyle = () => this.setState({ hovered: true });

  disableHoverStyle = () => this.setState({ hovered: false });

  render() {
    return (
      <div className="place-container">
        <NavLink to={this.props.name.toLowerCase().split(' ').join('-')} className="place-list-item">
          <div>
            <img src={this.props.img} alt="bar" />
          </div>
          <div className="details">
            <h2>{this.props.name}</h2>
            <Rate disabled allowHalf defaultValue={evalRating(this.props.rating, this.props.totalReviews)} />
            <p className="address"><FontAwesomeIcon icon={faMapMarkerAlt} />{this.props.address}</p>
            <div className="detail-types">
              <FontAwesomeIcon icon={faMoneyBill} /><span>{this.props.priceType}</span>
              <span style={{ paddingRight: 15 }}>{this.props.placeType}</span>
              <FontAwesomeIcon icon={faUtensils} /><span>{this.props.kitchenType}</span>
            </div>
          </div>
          <DarkenContainer
            height={200}
            width={300}
            hovered={this.state.hovered}
            onMouseLeave={this.disableHoverStyle}
            onMouseEnter={this.enableHoverStyle}
          />
        </NavLink>
        <NavLink to={`${this.props.name.toLowerCase().split(' ').join('-')}`} className="reservation-button">
          <Button type="primary" size="small">Rezervă</Button>
        </NavLink>
      </div>
    );
  }
}

export default ListItem;
