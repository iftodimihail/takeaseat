import React from 'react';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Container from '../../ContainerPage';
import HeaderSlider from './HeaderSlider';
import SearchBar from '../../../components/SearchBar';
import DarkenContainer from '../../../components/DarkenContainer';
import Menu from './Menu';
import ContainerInner from '../../../components/ContainerInner';
import PlaceCards from './PlaceCards/index';
import Footer from '../../../components/Footer';
import { onSearch } from '../../Localuri/components/methods';

/**
 * Home component
 */
class Home extends React.Component {
  render() {
    return (
      <Container>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <div className="home-header">
          <HeaderSlider />
          <DarkenContainer height={window.innerWidth < 764 ? '250px' : '400px'} />
          <SearchBar onSearch={onSearch(this.props.history)} />
          <Menu />
        </div>
        <ContainerInner smallMargin>
          <p className="most-popular-text">Cele mai populare restaurante, baruri, cafenele sau pub-uri</p>
          <PlaceCards />
        </ContainerInner>
        <Footer />
      </Container>
    );
  }
}

export default withRouter(Home);
