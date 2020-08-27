import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/layout/seo';
import Layout from '../components/layout/layout';
import SectionWrapper from '../components/layout/sectionWrapper';
import SectionContainer from '../components/layout/sectionContainer';
import SectionTitle from '../components/global/sectionTitle';
import EventCard from '../components/sections/eventsIndex/eventCard';

const CoupsDeCoeur = ({ data }) => {
  const departments = data.allSanityEvent.edges.reduce((acc, { node }) => {
    acc[node.department.name] = [...(acc[node.department.name] || []), node];
    return acc;
  }, {});

  return (
    <Layout>
      <SEO title="Coups de Coeur" />
      <SectionWrapper>
        <SectionContainer customClasses="py-16 md:py-20 lg:pt-32 lg:pb-40">
          <SectionTitle text="Nos Evénements Coups de Coeur" />
          {Object.keys(departments).map((dep) => {
            return (
              <div className="mb-20 md:mb-16">
                <h3 className="inline-block mb-8 text-3xl text-gray-700 md:border-b-4 border-secondary">
                  {dep}
                </h3>
                <div className="grid gap-10 md:grid-cols-2">
                  {departments[dep].map((event) => {
                    return (
                      <div>
                        <EventCard event={event} />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </SectionContainer>
      </SectionWrapper>
    </Layout>
  );
};

export default CoupsDeCoeur;

export const query = graphql`
  query FeaturedPage {
    allSanityEvent(
      filter: { featured: { eq: true } }
      sort: { fields: department___name, order: ASC }
    ) {
      edges {
        node {
          id
          title
          slug {
            current
          }
          department {
            name
          }
          featured
          village
          _rawDescription
          description {
            children {
              text
            }
          }
          theme {
            id
            name
          }
          startDate {
            local
          }
          endDate {
            local
          }
          format {
            id
            name
            formatIcon {
              asset {
                fluid(maxWidth: 500) {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
          image {
            asset {
              fluid(maxWidth: 1000) {
                ...GatsbySanityImageFluid
              }
            }
            hotspot {
              x
              y
            }
          }
          audience {
            id
            name
          }
          map {
            address
            lng
            lat
          }
        }
      }
    }
  }
`;
