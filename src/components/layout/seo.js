/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, lang, meta, title }) {
  const { site, allSanitySiteSettings } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
        allSanitySiteSettings {
          edges {
            node {
              title
              openGraph {
                title
                keywords
                description
                image {
                  asset {
                    url
                  }
                }
              }
            }
          }
        }
      }
    `
  );

  const openGraph = allSanitySiteSettings.edges[0].node.openGraph;
  const ogTitle = openGraph.title;
  const ogDescription = openGraph.description;
  const ogKeywords = openGraph.keywords;
  const ogImage = openGraph.image.asset.url;
  const metaDescription = description || ogDescription;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${ogTitle}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: ogImage,
        },
        {
          property: `og:image:width`,
          content: `2400`,
        },
        {
          property: `og:image:height`,
          content: `1260`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: site.siteMetadata.siteUrl,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: `twitter:image`,
          content: ogImage,
        },
        {
          name: 'keywords',
          content: ogKeywords,
        },
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `fr`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
