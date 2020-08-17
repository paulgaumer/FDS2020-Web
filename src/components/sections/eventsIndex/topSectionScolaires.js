import React from 'react';
import { FaCampground } from 'react-icons/fa';
import SectionContainer from '../../layout/sectionContainer';
import SectionTitle from '../../global/sectionTitle';
import Villages from './villages';
import VillageCard from './villageCard';

const TopSectionScolaires = ({ villages }) => {
  return (
    <SectionContainer customClasses="pt-20">
      <SectionTitle text={`Programme Scolaires`} />
      <Villages villages={villages} />
    </SectionContainer>
  );
};

export default TopSectionScolaires;
