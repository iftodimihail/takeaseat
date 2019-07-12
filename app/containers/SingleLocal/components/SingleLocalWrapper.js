import React from 'react';
import { Tabs, Button, Rate } from 'antd';
import { NavLink } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import isNumber from 'lodash/isNumber';
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
import { evalRating } from '../../../utils/common';
import ScrollToTop from '../../../components/ScrollToTop';
/**
 * SingleLocal Component
 */
class SingleLocal extends React.Component {
  state = {
    localId: null,
    visibleReservationTab: false,
    rating: null
  };

  componentDidMount() {
    if (isEmpty(this.props.places)) {
      axios.get(`/localuri/${this.props.match.params.localName}`)
        .then((res) => this.setState({
          localId: res.data.data.id,
          ...res.data.data
        }))
        .catch(() => this.setState({ noLocal: true }));
    } else {
      this.setState({ localId: this.props.places.filter((place) => place.uniqueLink === this.props.match.params.localName)[0].id });
    }
  }

  renderReservationTab = () => this.setState({ visibleReservationTab: true });

  renderPresentation = () => this.setState({ visibleReservationTab: false });

  render() {
    const {
      visibleReservationTab, name, rating, totalReviews
    } = this.state;

    return (
      <Container>
        <ScrollToTop />
        <Helmet>
          <title>Local</title>
        </Helmet>
        <PageHeader />
        <ContainerInner>
          {this.state.noLocal ?
            <div style={{ minHeight: '80vh', textAlign: 'center' }}>
              <div style={{ fontStyle: 'italic', marginBottom: 10 }}>Localul nu există</div>
              <NavLink to="/">
                <Button type="primary" size="small">Acasă</Button>
              </NavLink>
            </div> :
            <React.Fragment>
              <h1 className="single-local-name">{name}</h1>
              <div className="flex">
                {isNumber(rating) &&
                <Rate className="m-b-xl" disabled allowHalf defaultValue={evalRating(rating, totalReviews)} />}
                <div className="single-local-rating-text">({totalReviews} voturi)</div>
              </div>
              <div className="single-local-wrapper">
                <div className="information-container">
                  <Tabs defaultActiveKey="1" style={{ display: visibleReservationTab && 'none' }}>
                    <Tabs.TabPane tab="Prezentare" key="1"><ImageSlider /></Tabs.TabPane>
                    <Tabs.TabPane tab="Recenzii" key="2"><Reviews {...this.state} /></Tabs.TabPane>
                    <Tabs.TabPane tab="Locație" key="3"><Location {...this.state} /></Tabs.TabPane>
                  </Tabs>
                </div>
                <div className="reservation-tabs-container" style={{ display: (!visibleReservationTab && window.innerWidth < 540) && 'none' }}>
                  <ReservationTab {...this.state} />
                </div>
                <div className="mobile-reservation-button" style={{ display: visibleReservationTab && 'none' }}>
                  <Button type="primary" size="small" className="m-b-xl" onClick={this.renderReservationTab}>Fă o rezervare</Button>
                </div>
                <div className="mobile-reservation-back" style={{ display: !visibleReservationTab && 'none' }}>
                  <a onClick={this.renderPresentation}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                    <span>Înapoi</span>
                  </a>
                </div>
              </div>
            </React.Fragment>
          }
        </ContainerInner>
        <Footer />
      </Container>
    );
  }
}

export default SingleLocal;
