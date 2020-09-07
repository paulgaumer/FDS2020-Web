import React from 'react';
import SectionContainer from '../../layout/sectionContainer';
import SectionTitle from '../../global/sectionTitle';
import LogosGrid from '../../global/logosGrid';

const LocalPartnersSection = ({
  logos,
  partnersTitle = 'Nos Partenaires Locaux',
}) => {
  return (
    <SectionContainer customClasses="pt-20 pb-40">
      <SectionTitle text={partnersTitle} />
      <LogosGrid logos={logos} />
    </SectionContainer>
  );
};

export default LocalPartnersSection;
