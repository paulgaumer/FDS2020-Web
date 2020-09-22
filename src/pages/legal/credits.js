import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../../components/layout/seo';
import Layout from '../../components/layout/layout';
import SectionWrapper from '../../components/layout/sectionWrapper';
import SectionContainer from '../../components/layout/sectionContainer';
import SectionTitle from '../../components/global/sectionTitle';

const Credits = ({ data }) => {
  // Check if a non-null credit exist
  const creditSet = new Set();
  data.allSanityEvent.edges.map(({ node }) =>
    creditSet.add(node.eventImageCredits)
  );

  return (
    <Layout>
      <SEO title="Crédits Photos" />
      <SectionWrapper>
        <SectionContainer customClasses="py-16 md:py-20 lg:pt-32 lg:pb-40">
          <SectionTitle text="Crédits Photos" />
          {data.allSanityEvent.edges.length >= 1 && (
            <ul className="flex flex-col space-y-3 list-disc list-inside">
              {data.allSanityEvent.edges.map(({ node }) => {
                const credit = node.eventImageCredits;
                return credit ? (
                  <li className="text-gray-600" key={node.id}>
                    {node.eventImageCredits}
                  </li>
                ) : null;
              })}
            </ul>
          )}
          {creditSet.size === 1 && (
            <div className="flex items-center justify-center text-gray-600">
              <p className="p-6 text-center sm:p-12">
                Aucun crédit n'a été enregistré pour le moment
              </p>
            </div>
          )}
        </SectionContainer>
      </SectionWrapper>
    </Layout>
  );
};

export default Credits;

export const query = graphql`
  query CreditsPage {
    allSanityEvent {
      edges {
        node {
          id
          eventImageCredits
        }
      }
    }
  }
`;
