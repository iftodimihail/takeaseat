import React from 'react';
import { Tabs, Button } from 'antd';
import isEmpty from 'lodash/isEmpty';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
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
    localId: null,
    visibleReservationTab: false
  };

  componentDidMount() {
    if (isEmpty(this.props.places)) {
      axios.get(`/localuri/${this.props.match.params.localName}`)
        .then((res) => this.setState({ localId: res.data.data.id }));
    } else {
      this.setState({ localId: this.props.places.filter((place) => place.uniqueLink === this.props.match.params.localName)[0].id });
    }
  }

  renderReservationTab = () => this.setState({ visibleReservationTab: true });

  renderPresentation = () => this.setState({ visibleReservationTab: false });

  render() {
    const { visibleReservationTab } = this.state;

    return (
      <Container>
        <Helmet>
          <title>Local</title>
        </Helmet>
        <PageHeader />
        <ContainerInner>
          <div>Moo Bistro</div>
          <div className="single-local-wrapper">
            <div className="information-container">
              <Tabs defaultActiveKey="1" style={{ display: visibleReservationTab && 'none' }}>
                <Tabs.TabPane tab="Prezentare" key="1"><ImageSlider /></Tabs.TabPane>
                <Tabs.TabPane tab="Recenzii" key="2"><Reviews {...this.state} /></Tabs.TabPane>
                <Tabs.TabPane tab="Locație" key="3"><Location /></Tabs.TabPane>
              </Tabs>
            </div>
            <div className="reservation-tabs-container" style={{ display: (!visibleReservationTab && window.innerWidth < 540) && 'none' }}>
              <ReservationTab {...this.state} />
            </div>
            <div className="mobile-reservation-button" style={{ display: visibleReservationTab && 'none' }}>
              <Button type="primary" size="small" onClick={this.renderReservationTab}>Fă o rezervare</Button>
            </div>
            <div className="mobile-reservation-back" style={{ display: !visibleReservationTab && 'none' }}>
              <a onClick={this.renderPresentation}>
                <FontAwesomeIcon icon={faChevronLeft} />
                <span>Înapoi</span>
              </a>
            </div>
          </div>
        </ContainerInner>
        <Footer />
      </Container>
    );
  }
}

export default SingleLocal;
