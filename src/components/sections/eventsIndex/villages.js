import React from 'react';
import { FaCampground } from 'react-icons/fa';
import styled from 'styled-components';
import SectionContainer from '../../layout/sectionContainer';
import VillageCard from './villageCard';

const Separator = styled.div`
  div {
    display: grid;
    grid-template-columns: minmax(50px, 1fr) auto minmax(50px, 1fr);
    align-items: center;
    text-align: center;
    grid-gap: 30px;
    width: 100%;
  }

  /* @media (min-width: 768px) { */
  div:before,
  div:after {
    content: '';
    border-top: 2px solid;
  }
  /* } */

  .pulsing-chevron {
    animation: bounce 4s infinite;

    @keyframes bounce {
      0% {
        transform: translateY(0%);
      }
      50% {
        transform: translateY(0%);
      }
      75% {
        transform: translateY(-25%);
        animationtimingfunction: cubic-bezier(0.8, 0, 1, 1);
      }
      100% {
        transform: translateY(0);
        animationtimingfunction: cubic-bezier(0, 0, 0.2, 1);
      }
    }
  }
`;

const Villages = ({
  villages = [],
  scolaires,
  villageTitle = 'Village des Sciences',
  villageContent,
}) => {
  return (
    <SectionContainer customClasses="pt-6 md:pt-16">
      <div className="text-gray-600">
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
        <Separator
          className={`mx-10 md:mx-20 ${villages.length >= 1 ? 'mt-16' : ''}`}
        >
          <div className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8 pulsing-chevron"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </Separator>
      </div>
    </SectionContainer>
  );
};

export default Villages;
