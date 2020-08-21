import React from 'react';
import styled from 'styled-components';
import InfoCard from './infoCard';
import { FaExclamationTriangle } from 'react-icons/fa';
import SectionWrapper from '../../layout/sectionWrapper';
import SectionContainer from '../../layout/sectionContainer';
import PortableText from '@sanity/block-content-to-react';
import { serializers } from '../../../utils/portableTextSerializers';

const CovidButton = styled.div`
  button {
    background-color: rgba(42, 57, 81, 0.9);
  }
  button:active,
  button:hover {
    background-color: rgba(42, 57, 81, 1);
  }
`;

const DescriptionSection = ({ description, scolaires }) => {
  return (
    <SectionWrapper>
      <SectionContainer customClasses="pb-12">
        <InfoCard title="description" customClasses="" scolaires={scolaires}>
          <div className="text-lg leading-relaxed">
            <PortableText blocks={description} serializers={serializers} />
          </div>
          <a
            href="/covid"
            target="_blank"
            rel="noreferrer"
            className="text-center md:text-left"
          >
            <CovidButton className="mt-10">
              <span class="inline-flex rounded-md shadow-sm">
                <button
                  type="button"
                  class="uppercase inline-flex px-2.5 py-1.5 border border-transparent text-xs leading-4 font-medium rounded transition ease-in-out duration-150 text-white space-x-2 items-center"
                >
                  <span className="text-sm">
                    <FaExclamationTriangle />
                  </span>
                  <span>Consulter nos consignes Covid-19</span>
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
