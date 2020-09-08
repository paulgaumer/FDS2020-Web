import React from 'react';
import { MdToday } from 'react-icons/md';
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
            <ul className="flex flex-col">
              {timeSlots.map((slot, i) => {
                const length = timeSlots.length;
                return (
                  <div className="flex flex-col items-center">
                    <li className="flex items-center space-x-2">
                      <span className="text-xl">
                        <MdToday />
                      </span>
                      <span>{processDate(slot)}</span>
                    </li>
                    {i + 1 < length && (
                      <div className="w-6 h-1 my-3 rounded bg-secondary" />
                    )}
                  </div>
                );
              })}
            </ul>
          </div>
        </InfoCard>
      </SectionContainer>
    </SectionWrapper>
  );
};

export default OpeningHours;
