import React from 'react';
import { Helmet } from 'react-helmet';
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
      <Helmet>
        <script src="/node_modules/focus-visible/dist/focus-visible.min.js"></script>
      </Helmet>
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
