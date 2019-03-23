import React from 'react';
import Slider from 'react-slick';
import { headerSliderImages } from '../../../images/home-header';
import ObjectFitImage from '../../../components/ObjectFitImage';
import { sliderSettings } from './config';

/**
 * SimpleSlider for home header
 */
class SimpleSlider extends React.Component {
  headerPictureComponent = (image, index) => (
    <div key={image}>
      <ObjectFitImage src={image} alt={`header ${index}`} />
    </div>
  );

  render() {
    return (
      <Slider {...sliderSettings}>
        {headerSliderImages.map(this.headerPictureComponent)}
      </Slider>
    );
  }
}

export default SimpleSlider;
