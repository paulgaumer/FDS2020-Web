import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../../components/layout/seo';
import styled from 'styled-components';
import PortableText from '@sanity/block-content-to-react';
import { serializers } from '../../utils/portableTextSerializers';
import Layout from '../../components/layout/layout';
import SectionWrapper from '../../components/layout/sectionWrapper';
import SectionContainer from '../../components/layout/sectionContainer';
import SectionTitle from '../../components/global/sectionTitle';

const PortableContainer = styled.div`
  & > div > h2:first-child {
    margin-top: 2rem;
  }
`;

const MentionsLegales = ({ data }) => {
  const { contentBlock, topTitle } = data.sanityPage._rawPageContent[0];

  return (
    <Layout>
      <SEO title="Mentions Légales" />
      <SectionWrapper>
        <SectionContainer customClasses="py-16 md:py-20 lg:pt-32 lg:pb-40">
          <SectionTitle text={topTitle} />
          <PortableContainer className="text-base text-gray-500 sm:text-lg">
            <PortableText blocks={contentBlock} serializers={serializers} />
          </PortableContainer>
        </SectionContainer>
      </SectionWrapper>
    </Layout>
  );
};

export default MentionsLegales;

export const query = graphql`
  query MentionsLegalesPage {
    sanityPage(pageName: { eq: "Mentions Légales" }) {
      _rawPageContent
    }
  }
`;
