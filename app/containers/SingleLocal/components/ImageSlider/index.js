import React from 'react';
import Slider from 'react-slick';
import { sliderSettings } from './settings';
import { headerSliderImages } from '../../../../images/home-header';
import ObjectFitImage from '../../../../components/ObjectFitImage';

/**
 * ImageSlider component
 */
class ImageSlider extends React.Component {
  headerPictureComponent = (image, index) => (
    <div key={image}>
      <ObjectFitImage src={image} alt={`header ${index}`} />
    </div>
  );

  render() {
    return (
      <div className="slider-container">
        <Slider {...sliderSettings}>
          <div>
            1
          </div>
          <div>
            2
          </div>
          <div>
            3
          </div>
        </Slider>
      </div>
    );
  }
}

export default ImageSlider;
