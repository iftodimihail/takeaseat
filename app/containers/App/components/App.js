import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch } from 'react-router-dom';
import { GlobalPreloader } from '../../../components/Preloader';
import { ProtectedRoute, PublicRoute, UnauthenticatedRoute } from '../../../components/Access';

import Home from '../../Home';
import Localuri from '../../Localuri';
import SingleLocal from '../../SingleLocal';
import ReservationConfirmation from '../../ReservationConfirm';
import NotFound from '../../NotFound';
import ProtectedPage from '../../ProtectedPage';
import Login from '../../../components/Login';
import ForgotPassword from '../../ForgotPassword';
import ReviewForm from '../../ReviewForm';

const App = () => (
  <div className="app-wrapper">
    <Helmet titleTemplate="%s - Take-A-Seat" defaultTitle="Take-A-Seat">
      <meta name="description" content="Take-A-Seat application" />
    </Helmet>
    <Switch>
      <PublicRoute exact path="/" component={Home} />
      <PublicRoute exact path="/localuri" component={Localuri} />
      <PublicRoute path="/reviews/:reservationId" component={ReviewForm} />
      <PublicRoute path="/reservations/:reservationId" component={ReservationConfirmation} />
      <ProtectedRoute path="/protected-page" component={ProtectedPage} type="clients" />
      <UnauthenticatedRoute path="/admin/login" component={Login} />
      <UnauthenticatedRoute path="/forgot-password" component={ForgotPassword} />
      <PublicRoute path="/:localName" component={SingleLocal} />
      <PublicRoute path="" component={NotFound} />
    </Switch>
    <GlobalPreloader />
  </div>
);

export default App;
