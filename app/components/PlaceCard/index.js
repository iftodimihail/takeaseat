import React from 'react';
import { Rate } from 'antd';
import ObjectFitImage from '../ObjectFitImage';
import DarkenContainer from '../DarkenContainer';

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

  randRating = this.props.rate < 2.5 ? this.props.rate + 2.5 : this.props.rate;

  render() {
    return (
      <a className="place-card" style={{ zIndex: 30 }}>
        <ObjectFitImage src={this.props.cardImage} />
        <div onMouseLeave={this.disableHoverStyle} onMouseEnter={this.enableHoverStyle}>
          <p className="place-name">{this.props.name}</p>
          <div className="place-rating">
            <Rate disabled allowHalf defaultValue={Math.floor(parseFloat(this.randRating.toFixed(1)) * 2) / 2} />
            <div className="rating-text">({this.randRating.toFixed(2)} / {Math.round(this.props.votes)} voturi)</div>
          </div>
        </div>
        <DarkenContainer
          height={200}
          width={300}
          hovered={this.state.hovered}
          onMouseLeave={this.disableHoverStyle}
          onMouseEnter={this.enableHoverStyle}
        />
      </a>
    );
  }
}

export default PlaceCard;
