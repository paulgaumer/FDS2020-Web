import React from 'react';
import { MdToday } from 'react-icons/md';
import InfoCard from './infoCard';
import SectionWrapper from '../../layout/sectionWrapper';
import SectionContainer from '../../layout/sectionContainer';
import { processDate } from '../../../utils/processDate';

const OpeningHours = ({ timeSlots, scolaires }) => {
  return (
    <SectionWrapper>
      <SectionContainer customClasses="pb-12" id="opening-hours">
        <InfoCard title="Horaires" customClasses="" scolaires={scolaires}>
          <div className="flex justify-center text-lg leading-relaxed">
            <ul className="flex flex-col">
              {timeSlots.map((slot, i) => {
                const length = timeSlots.length;
                return (
                  <div className="flex flex-col items-start">
                    <li className="flex items-center space-x-2">
                      <span className="text-xl">
                        <MdToday />
                      </span>
                      <span>{processDate(slot)}</span>
                    </li>
                    {i + 1 < length && (
                      <div className="self-center w-6 h-1 my-3 rounded bg-secondary" />
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
