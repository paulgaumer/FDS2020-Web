import React from 'react';
import PropTypes from 'prop-types';
import './layout.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import CookieBanner from './cookieBanner';
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
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
