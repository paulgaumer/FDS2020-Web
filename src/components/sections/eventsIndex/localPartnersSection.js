import React from 'react';
import SectionContainer from '../../layout/sectionContainer';
import SectionTitle from '../../global/sectionTitle';
import LogosGrid from '../../global/logosGrid';

const LocalPartnersSection = ({ logos }) => {
  return (
    <SectionContainer customClasses="pt-20 pb-40">
      <SectionTitle text={`Nos Partenaires Locaux`} />
      <LogosGrid logos={logos} />
    </SectionContainer>
  );
};

export default LocalPartnersSection;
