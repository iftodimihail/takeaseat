import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Index = () => (
  <div className="footer">
    <div className="logo" >
      LOGO
      &copy; copyright 2019
    </div>
    <div className="social-media">
      <p>Găsește-ne pe social media</p>
      <div>
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faLinkedin} />
      </div>
    </div>
  </div>
);

export default Index;
