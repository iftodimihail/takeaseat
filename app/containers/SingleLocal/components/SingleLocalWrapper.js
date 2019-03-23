import React from 'react';
import { Helmet } from 'react-helmet';
import Container from '../../ContainerPage';
import ContainerInner from '../../../components/ContainerInner';
import PageHeader from '../../Localuri/components/PageHeader';
import Footer from '../../../components/Footer';
import HorizontalMenu from './HorizontalMenu';
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
              {this.props.children}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%' }}>
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
