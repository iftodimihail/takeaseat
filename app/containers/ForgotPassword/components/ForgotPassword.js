import React from 'react';
import { Helmet } from 'react-helmet';
import Container from '../../ContainerPage';
import ForgotPassword from '../../../components/ForgotPassword';

const ForgotPasswordPage = () => (
  <Container>
    <Helmet>
      <title>Forgot password</title>
    </Helmet>
    <div className="home-page p-extra-md">
      <h2>Forgot password page</h2>
      <ForgotPassword userType="clients" />
    </div>
  </Container>
);

export default ForgotPasswordPage;
