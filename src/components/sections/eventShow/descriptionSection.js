import React from 'react';
import styled from 'styled-components';
import InfoCard from './infoCard';
import { FaExclamationTriangle } from 'react-icons/fa';
import SectionWrapper from '../../layout/sectionWrapper';
import SectionContainer from '../../layout/sectionContainer';

const CovidButton = styled.div`
  button {
    background-color: rgba(42, 57, 81, 0.9);
  }
  button:active,
  button:hover {
    background-color: rgba(42, 57, 81, 1);
  }
`;

const DescriptionSection = ({ description }) => {
  return (
    <SectionWrapper>
      <SectionContainer customClasses="pb-12">
        <InfoCard title="description" customClasses="">
          <div className="text-lg leading-relaxed">{description}</div>
          <a href="/mesures-covid" target="_blank" rel="noreferrer">
            <CovidButton className="mt-10">
              <span class="inline-flex rounded-md shadow-sm">
                <button
                  type="button"
                  class="uppercase inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs leading-4 font-medium rounded text-white transition ease-in-out duration-150 text-white flex space-x-2 items-center"
                >
                  <span className="text-sm">
                    <FaExclamationTriangle />
                  </span>
                  <span>Consultez nos consignes Covid-19</span>
                </button>
              </span>
            </CovidButton>
          </a>
        </InfoCard>
      </SectionContainer>
    </SectionWrapper>
  );
};

export default DescriptionSection;