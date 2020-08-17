import React from 'react';
import SectionContainer from '../../layout/sectionContainer';
import SectionTitle from '../../global/sectionTitle';
import Villages from './villages';

const TopSectionScolaires = ({ villages, scolaires = false }) => {
  return (
    <SectionContainer customClasses="pt-32">
      <SectionTitle text={`Programme Scolaires`} />
      <Villages villages={villages} scolaires={scolaires} />
    </SectionContainer>
  );
};

export default TopSectionScolaires;
