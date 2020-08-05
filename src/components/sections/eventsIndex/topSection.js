import React from 'react';
import { FaCampground } from 'react-icons/fa';
import SectionContainer from '../../layout/sectionContainer';
import SectionTitle from '../../global/sectionTitle';
import VillageCard from './villageCard';

const TopSection = ({ villages, department }) => {
  return (
    <SectionContainer customClasses="py-20">
      <SectionTitle text={`Programme du ${department}`} />
      <div className="text-gray-500">
        <h3 className="inline-flex items-center space-x-2 text-2xl font-bold tracking-tight text-gray-700 uppercase border-b-4 border-secondary">
          <span>
            <FaCampground />
          </span>
          <span>- Village des Sciences</span>
        </h3>
        <p className="pt-6">
          Aux Villages des Sciences vous attendent de multiples espaces
          d’animations, de démonstrations et d’expositions ! Vous pourrez
          tester, échanger, expérimenter et questionner les scientifiques venus
          à votre rencontre ! Animations en continu, expositions et
          rencontres...
        </p>
        <div className="grid grid-cols-3 gap-10 pt-20">
          {villages.length >= 1 &&
            villages.map(({ node }) => {
              return (
                <VillageCard
                  key={node.id}
                  village={node}
                  department={department}
                />
              );
            })}
        </div>
      </div>
    </SectionContainer>
  );
};

export default TopSection;
