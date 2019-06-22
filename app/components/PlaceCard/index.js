import React from 'react';
import { Rate } from 'antd';
import { NavLink } from 'react-router-dom';
import ObjectFitImage from '../ObjectFitImage';
import DarkenContainer from '../DarkenContainer';
import { evalRating } from '../../utils/common';

/**
 * Place Card
 * @function PlaceCard
 * @description Place Card Component
 */
class PlaceCard extends React.Component {
  state = {
    hovered: false
  };

  enableHoverStyle = () => this.setState({ hovered: true });

  disableHoverStyle = () => this.setState({ hovered: false });

  render() {
    return (
      <NavLink to={this.props.uniqueLink} className="place-card">
        <ObjectFitImage src={this.props.cardImage} />
        <div onMouseLeave={this.disableHoverStyle} onMouseEnter={this.enableHoverStyle}>
          <p className="place-name">{this.props.name}</p>
          <div className="place-rating">
            <Rate disabled allowHalf defaultValue={evalRating(this.props.rating, this.props.totalReviews)} />
            <div className="rating-text">({this.props.totalReviews} voturi)</div>
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
    );
  }
}

export default PlaceCard;
