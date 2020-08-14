import React from 'react';
import styled from 'styled-components';
import PortableText from '@sanity/block-content-to-react';
import { serializers } from '../utils/portableTextSerializers';
import Layout from '../components/layout/layout';
import SectionWrapper from '../components/layout/sectionWrapper';
import SectionContainer from '../components/layout/sectionContainer';
import SectionTitle from '../components/global/sectionTitle';

const PortableContainer = styled.div`
  & > div > h2:first-child {
    margin-top: 2rem;
  }
`;

const MesuresCovid = ({ data }) => {
  const { contentBlock, topTitle } = data.sanityPage._rawPageContent[0];

  return (
    <Layout>
      <SectionWrapper>
        <SectionContainer customClasses="pt-20 pb-40">
          <SectionTitle text={topTitle} />
          <PortableContainer className="text-gray-500">
            <PortableText blocks={contentBlock} serializers={serializers} />
          </PortableContainer>
        </SectionContainer>
      </SectionWrapper>
    </Layout>
  );
};

export default MesuresCovid;

export const query = graphql`
  query CovidPage {
    sanityPage(pageName: { eq: "Covid19" }) {
      _rawPageContent
    }
  }
`;
