import React from 'react';
import Slider from 'react-slick';
import { sliderSettings } from './settings';
import { singlePlace } from '../../../../images/single-place';
import ObjectFitImage from '../../../../components/ObjectFitImage';

/**
 * ImageSlider component
 */
class ImageSlider extends React.Component {
  singlePlaceRender = (place) => (
    <div key={place.id}>
      <ObjectFitImage src={place.img} />
    </div>
  );

  render() {
    return (
      <div className="slider-container">
        <Slider {...sliderSettings}>
          {singlePlace.map(this.singlePlaceRender)}
        </Slider>
      </div>
    );
  }
}

export default ImageSlider;
