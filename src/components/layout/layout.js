import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Header from '../header/header';
import Footer from '../footer/footer';
import CookieBanner from './cookieBanner';
import './layout.css';

const Layout = ({ children, headerHidden = false }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="flex flex-col h-screen">
      <div style={{ display: headerHidden ? 'none' : 'block' }}>
        <Header siteTitle={data.site.siteMetadata.title} />
      </div>
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
