import React from 'react';
import { Switch } from 'react-router-dom';
import { PublicRoute } from '../../../components/Access';
import SingleLocalWrapper from './SingleLocalWrapper';

/* Single Local Pages */
import ImageSlider from './ImageSlider';
import Reviews from './Reviews';
import NotFound from '../../NotFound';

const SingleLocalRoutes = () => (
  <SingleLocalWrapper>
    <Switch>
      <PublicRoute path={'/:placeName/prezentare'} component={ImageSlider} />
      <PublicRoute path={'/:placeName/recenzii'} component={Reviews} />
      <PublicRoute path={'/:placeName/locatie'} component={NotFound} />
    </Switch>
  </SingleLocalWrapper>
);

export default SingleLocalRoutes;
