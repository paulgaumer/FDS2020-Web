import React from 'react';
import { graphql, Link } from 'gatsby';
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
          <div className="flex justify-center py-5 mb-10 text-gray-600 shadow-inner md:text-lg md:mb-16">
            <ul className="grid grid-cols-2 md:flex md:space-x-4 gap-x-10 gap-y-6 ">
              {Object.keys(departments).map((dep) => {
                return (
                  <li className="text-center underline" key={`sum-${dep}`}>
                    <Link to={`#${dep}`}>{dep}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {Object.keys(departments).map((dep) => {
            return (
              <div className="mb-20 md:mb-16" key={dep} id={dep}>
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
      filter: { featured: { eq: true } } # sort: { fields: startDate___local, order: ASC }
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
          village {
            id
            title
          }
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
          timeSlots {
            endDate
            endTime
            startDate
            startTime
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
