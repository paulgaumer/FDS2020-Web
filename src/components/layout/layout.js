import React from 'react';
import PropTypes from 'prop-types';
import './layout.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import CookieBanner from './cookieBanner';
import PWAPrompt from 'react-ios-pwa-prompt';
import HideNavOnScrollHook from '../../utils/scrollNavHook';

const Layout = ({ children, headerHidden }) => {
  return (
    <div className="flex flex-col h-screen">
      {!headerHidden && (
        <div className={`${HideNavOnScrollHook() ? 'hidden' : 'block'}`}>
          <Header />
        </div>
      )}
      <div
        className={`flex-grow bg-sectionBackground
        ${headerHidden ? '' : 'pt-24'}`}
      >
        <main>{children}</main>
      </div>
      <div>
        <Footer />
      </div>
      <CookieBanner />
      <PWAPrompt
        delay={20000}
        copyTitle="Télécharger l'app"
        copyBody="Ce site peut être utilisé comme une app. Ajoutez le à votre écran d'accueil pour l'utiliser en modes plein écran et hors-ligne."
        copyShareButtonLabel="1) Appuyez sur l'icône 'Partager'"
        copyAddHomeButtonLabel="2) Appuyez sur 'Sur l'écran d'accueil'"
        copyClosePrompt="Fermer"
        // debug={true}
      />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
