import React from 'react';
import { Helmet } from 'react-helmet';
import Container from '../../ContainerPage';
import ContainerInner from '../../../components/ContainerInner';
import PageHeader from '../../Localuri/components/PageHeader';
import Footer from '../../../components/Footer';
import HorizontalMenu from './HorizontalMenu';
import ImageSlider from './ImageSlider/ImageSlider';
import RezervationCalendar from './Calendar';

/**
 * SingleLocal Component
 */
class SingleLocal extends React.Component {
  render() {
    return (
      <Container>
        <Helmet>
          <title>Local</title>
        </Helmet>
        <PageHeader />
        <ContainerInner>
          <div style={{ display: 'flex', paddingTop: 145 }}>
            <div className="information-container">
              <HorizontalMenu />
              <ImageSlider />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
              <RezervationCalendar />
            </div>
          </div>
        </ContainerInner>
        <Footer />
      </Container>
    );
  }
}

export default SingleLocal;
