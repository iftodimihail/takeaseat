import React from 'react';
import { Helmet } from 'react-helmet';
import Container from '../../ContainerPage';
import HeaderSlider from './HeaderSlider';
import SearchBar from '../../../components/SearchBar';
import DarkenContainer from '../../../components/DarkenContainer';
import Menu from './Menu';
import ContainerInner from '../../../components/ContainerInner';
import PlaceCards from './PlaceCards/index';
import Footer from '../../../components/Footer';

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
          <DarkenContainer height="400px" />
          <SearchBar />
          <Menu />
        </div>
        <ContainerInner>
          <p>Cele mai populare restaurante, baruri, cafenele sau pub-uri</p>
          <PlaceCards />
        </ContainerInner>
        <Footer />
      </Container>
    );
  }
}

export default Home;
