import React from 'react';
import { Tabs } from 'antd';
import { Helmet } from 'react-helmet';
import Container from '../../ContainerPage';
import ContainerInner from '../../../components/ContainerInner';
import PageHeader from '../../Localuri/components/PageHeader';
import Footer from '../../../components/Footer';
import ReservationTab from './Reservation';
import ImageSlider from './ImageSlider';
import Reviews from './Reviews';
import NotFound from '../../NotFound';

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
              <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab="Prezentare" key="1"><ImageSlider /></Tabs.TabPane>
                <Tabs.TabPane tab="Recenzii" key="2"><Reviews /></Tabs.TabPane>
                <Tabs.TabPane tab="Locație" key="3"><NotFound /></Tabs.TabPane>
              </Tabs>
            </div>
            <div className="reservation-tabs-container">
              <ReservationTab />
            </div>
          </div>
        </ContainerInner>
        <Footer />
      </Container>
    );
  }
}

export default SingleLocal;
