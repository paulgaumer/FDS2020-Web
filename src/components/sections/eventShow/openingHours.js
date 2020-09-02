import React from 'react';
import InfoCard from './infoCard';
import SectionWrapper from '../../layout/sectionWrapper';
import SectionContainer from '../../layout/sectionContainer';
import { processDate } from '../../../utils/processDate';

const OpeningHours = ({ timeSlots }) => {
  return (
    <SectionWrapper>
      <SectionContainer customClasses="pb-12" id="opening-hours">
        <InfoCard title="Horaires" customClasses="">
          <div className="flex justify-center text-lg leading-relaxed">
            <ul className="list-disc">
              {timeSlots.map((slot) => {
                return <li>{processDate(slot)}</li>;
              })}
            </ul>
          </div>
        </InfoCard>
      </SectionContainer>
    </SectionWrapper>
  );
};

export default OpeningHours;
