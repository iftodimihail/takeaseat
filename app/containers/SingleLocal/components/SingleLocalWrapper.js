import React from 'react';
import { Tabs } from 'antd';
import isEmpty from 'lodash/isEmpty';
import { Helmet } from 'react-helmet';
import Container from '../../ContainerPage';
import ContainerInner from '../../../components/ContainerInner';
import PageHeader from '../../Localuri/components/PageHeader';
import Footer from '../../../components/Footer';
import ReservationTab from './Reservation';
import ImageSlider from './ImageSlider';
import Reviews from './Reviews';
import Location from './Location';
import axios from '../../../axios';

/**
 * SingleLocal Component
 */
class SingleLocal extends React.Component {
  state = {
    localId: null
  };

  componentDidMount() {
    if (isEmpty(this.props.places)) {
      axios.get(`/localuri/${this.props.match.params.localName}`)
        .then((res) => this.setState({ localId: res.data.data.id }));
    } else {
      this.setState({ localId: this.props.places.filter((place) => place.uniqueLink === this.props.match.params.localName)[0].id });
    }
  }

  render() {
    return (
      <Container>
        <Helmet>
          <title>Local</title>
        </Helmet>
        <PageHeader />
        <ContainerInner>
          <div>Moo Bistro</div>
          <div style={{ display: 'flex', paddingTop: 145 }}>
            <div className="information-container">
              <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab="Prezentare" key="1"><ImageSlider /></Tabs.TabPane>
                <Tabs.TabPane tab="Recenzii" key="2"><Reviews {...this.state} /></Tabs.TabPane>
                <Tabs.TabPane tab="Locație" key="3"><Location /></Tabs.TabPane>
              </Tabs>
            </div>
            <div className="reservation-tabs-container">
              <ReservationTab {...this.state} />
            </div>
          </div>
        </ContainerInner>
        <Footer />
      </Container>
    );
  }
}

export default SingleLocal;
