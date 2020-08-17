import React from 'react';
import { FaCampground } from 'react-icons/fa';
import SectionContainer from '../../layout/sectionContainer';
import SectionTitle from '../../global/sectionTitle';
import Villages from './villages';
import VillageCard from './villageCard';

const TopSection = ({ villages, department }) => {
  return (
    <SectionContainer customClasses="pt-20">
      <SectionTitle text={`Programme en ${department}`} />
      <Villages villages={villages} />
    </SectionContainer>
  );
};

export default TopSection;
