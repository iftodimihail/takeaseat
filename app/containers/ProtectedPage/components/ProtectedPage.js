import React from 'react';
import { Helmet } from 'react-helmet';
import Container from '../../ContainerPage';

class ProtectedPage extends React.PureComponent {
  render() {
    return (
      <Container>
        <Helmet>
          <title>Protected Page</title>
        </Helmet>
        <div className="home-page p-extra-md">
          <h2>Protected page</h2>
        </div>
      </Container>
    );
  }
}

export default ProtectedPage;
