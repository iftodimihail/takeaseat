import React from 'react';
import { Helmet } from 'react-helmet';
import Container from '../../ContainerPage';
import ContainerInner from '../../../components/ContainerInner';
import Footer from '../../../components/Footer';
import PageHeader from './PageHeader';
import List from './List';
import SidebarFilters from './SidebarFilters';

/**
 * Localuri component
 */
class Localuri extends React.Component {
  render() {
    return (
      <Container>
        <Helmet>
          <title>Localuri</title>
        </Helmet>
        <PageHeader />
        <ContainerInner>
          <div className="flex" style={{ paddingTop: 100 }}>
            <SidebarFilters />
            <List />
          </div>
        </ContainerInner>
        <Footer />
      </Container>
    );
  }
}

export default Localuri;
