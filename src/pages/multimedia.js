import React from 'react';
import SEO from '../components/layout/seo';
import Layout from '../components/layout/layout';
import SectionWrapper from '../components/layout/sectionWrapper';
import SectionContainer from '../components/layout/sectionContainer';
import SectionTitle from '../components/global/sectionTitle';

const Multimedia = () => {
  return (
    <Layout>
      <SEO title="Multimedia" />
      <SectionWrapper>
        <SectionContainer customClasses="pt-16 pb-20 md:py-20 lg:pt-32 lg:pb-40">
          <SectionTitle text="Contenu Multimedia" />
          <div></div>
        </SectionContainer>
      </SectionWrapper>
    </Layout>
  );
};

export default Multimedia;
