/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import Header from '../header/header';
import './layout.css';

const Layout = ({ children }) => {
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
      <Helmet defer={false}>
        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/96/three.min.js"></script> */}
        {/* <script src="https://cdn.jsdelivr.net/gh/tengbao/vanta@master/dist/vanta.net.min.js"></script> */}
      </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-sectionBackground">
        <main>{children}</main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
