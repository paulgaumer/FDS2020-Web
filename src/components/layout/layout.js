import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from '../header/header';
import Footer from '../footer/footer';
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
    <>
      <div className={`${headerHidden ? 'hidden' : 'block'}`}>
        <Header siteTitle={data.site.siteMetadata.title} />
      </div>
      <div className={`${headerHidden ? '' : 'pt-24'}`}>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
