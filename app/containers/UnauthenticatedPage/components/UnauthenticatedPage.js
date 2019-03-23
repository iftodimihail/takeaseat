import React from 'react';
import { Helmet } from 'react-helmet';
import Container from '../../ContainerPage';

class UnauthenticatedPage extends React.PureComponent {
  render() {
    return (
      <Container>
        <Helmet>
          <title>Unauthenticated Page</title>
        </Helmet>
        <div className="home-page p-extra-md">
          <h2>Unauthenticated Page</h2>
        </div>
      </Container>
    );
  }
}

export default UnauthenticatedPage;
