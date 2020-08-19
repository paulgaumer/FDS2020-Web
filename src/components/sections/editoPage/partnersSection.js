import React from 'react';
import SectionWrapper from '../../layout/sectionWrapper';
import SectionContainer from '../../layout/sectionContainer';
import SectionTitle from '../../global/sectionTitle';
import LogosGrid from '../../global/logosGrid';

const PartnersSection = ({ logos, partnersTitle }) => {
  return (
    <SectionWrapper backgroundColor="bg-white">
      <SectionContainer customClasses="pt-16 pb-16 md:py-20 lg:pb-40">
        <SectionTitle text={partnersTitle} />
        <div>
          <LogosGrid logos={logos} />
        </div>
      </SectionContainer>
    </SectionWrapper>
  );
};

export default PartnersSection;
