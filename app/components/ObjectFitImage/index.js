import React from 'react';
import objectFitImages from 'object-fit-images';

/**
 * ObjectFitImage
 */
class ObjectFitImage extends React.Component {
  componentDidMount() {
    objectFitImages(document.getElementsByClassName('object-fit'));
  }

  render() {
    return (
      <img src={this.props.src} alt={this.props.alt} className="object-fit" />
    );
  }
}

export default ObjectFitImage;
