import React from 'react';
import CookieConsent, { Cookies } from 'react-cookie-consent';
import s from './cookieBanner.module.css';

const CookieBanner = () => {
  return (
    <CookieConsent
      containerClasses={s.container}
      contentClasses={s.content}
      buttonClasses={s.acceptBtn}
      declineButtonClasses={s.declineBtn}
      location="bottom"
      buttonText="Accepter"
      enableDeclineButton
      flipButtons
      declineButtonText="Refuser"
      cookieName="gatsby-gdpr-google-analytics"
      // disableStyles={true}
    >
      Nous utilisons des cookies pour nous permettre de mieux comprendre comment
      le site est utilisé et enrichir votre expérience.
    </CookieConsent>
  );
};

export default CookieBanner;
