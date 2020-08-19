import React from 'react';
import SectionContainer from '../../layout/sectionContainer';
import SectionTitle from '../../global/sectionTitle';
import Villages from './villages';

const TopSection = ({ villages, department }) => {
  return (
    <SectionContainer customClasses="pt-16 md:pt-20 lg:pt-32">
      <SectionTitle text={`Programme en ${department}`} />
      <Villages villages={villages} />
    </SectionContainer>
  );
};

export default TopSection;
