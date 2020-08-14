import React from 'react';
import Layout from '../components/layout/layout';
import SectionWrapper from '../components/layout/sectionWrapper';
import SectionContainer from '../components/layout/sectionContainer';
import SectionTitle from '../components/global/sectionTitle';

const MesuresCovid = () => {
  return (
    <Layout>
      <SectionWrapper>
        <SectionContainer customClasses="py-20">
          <SectionTitle text="Informations relatives au Covid-19" />
          <div>
            <h1>Mesures Covid</h1>
          </div>
        </SectionContainer>
      </SectionWrapper>
    </Layout>
  );
};

export default MesuresCovid;
