import React from 'react';
import { FaCampground } from 'react-icons/fa';
import SectionContainer from '../../layout/sectionContainer';
import VillageCard from './villageCard';

const Villages = ({ villages = [], scolaires }) => {
  return (
    <SectionContainer customClasses="pt-6 md:pt-16">
      <div className="text-gray-500">
        <h3 className="inline-flex items-center space-x-2 text-xl font-bold tracking-tight text-gray-700 uppercase md:text-2xl md:border-b-4 md:border-secondary">
          <span className="text-2xl">
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
        <div className="grid grid-cols-1 gap-10 pt-16 md:grid-cols-2 lg:grid-cols-3">
          {villages.length >= 1 &&
            villages.map(({ node }) => {
              return (
                <div className="col-span-1" key={node.id}>
                  <VillageCard
                    village={node}
                    department={node.department.name}
                    scolaires={scolaires}
                  />
                </div>
              );
            })}
        </div>
        <hr
          className={`${
            villages.length >= 1 ? 'mt-16' : ''
          } text-center text-gray-500 border-t-2 mx-36`}
        />
      </div>
    </SectionContainer>
  );
};

export default Villages;
