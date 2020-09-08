import React from 'react';
import { FaCampground } from 'react-icons/fa';
import SectionContainer from '../../layout/sectionContainer';
import VillageCard from './villageCard';

const Villages = ({
  villages = [],
  scolaires,
  villageTitle = 'Village des Sciences',
  villageContent,
}) => {
  return (
    <SectionContainer customClasses="pt-6 md:pt-16">
      <div className="text-gray-500">
        <h3 className="inline-flex items-center space-x-2 text-xl font-bold tracking-tight text-gray-700 uppercase md:text-2xl md:border-b-4 md:border-secondary">
          <span className="text-2xl">
            <FaCampground />
          </span>
          <span>- {villageTitle}</span>
        </h3>
        {villageContent && <p className="pt-6">{villageContent}</p>}
        <div className="grid grid-cols-1 gap-10 pt-16 md:grid-cols-2 lg:grid-cols-3">
          {villages.length >= 1 &&
            villages.map(({ node }) => {
              return (
                <VillageCard
                  village={node}
                  department={node.department.name}
                  scolaires={scolaires}
                  key={node.id}
                />
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
