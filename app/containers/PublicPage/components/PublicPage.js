import React from 'react';
import { Helmet } from 'react-helmet';
import Container from '../../ContainerPage';

class PublicPage extends React.PureComponent {
  render() {
    return (
      <Container>
        <Helmet>
          <title>Public Page</title>
        </Helmet>
        <div className="home-page p-extra-md">
          <h2>Public Page</h2>
        </div>
      </Container>
    );
  }
}

export default PublicPage;
