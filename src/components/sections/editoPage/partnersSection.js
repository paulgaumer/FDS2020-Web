import React from 'react';
import SectionWrapper from '../../layout/sectionWrapper';
import SectionContainer from '../../layout/sectionContainer';
import SectionTitle from '../../global/sectionTitle';
import LogosGrid from '../../global/logosGrid';

const PartnersSection = ({ logos }) => {
  return (
    <SectionWrapper backgroundColor="bg-white">
      <SectionContainer customClasses="pt-20 pb-40">
        <SectionTitle text="Nos Partenaires" />
        <div>
          <LogosGrid logos={logos} />
        </div>
      </SectionContainer>
    </SectionWrapper>
  );
};

export default PartnersSection;
