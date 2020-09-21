import React from 'react';
import { MdToday } from 'react-icons/md';
import { FaBan } from 'react-icons/fa';
import InfoCard from './infoCard';
import SectionWrapper from '../../layout/sectionWrapper';
import SectionContainer from '../../layout/sectionContainer';
import { processDate } from '../../../utils/processDate';

const OpeningHours = ({ timeSlots, scolaires, eventCanceled }) => {
  return (
    <SectionWrapper>
      <SectionContainer customClasses="pb-12" id="opening-hours">
        <InfoCard title="Horaires" customClasses="" scolaires={scolaires}>
          <div className="flex justify-center text-lg leading-relaxed">
            {eventCanceled && (
              <span className="inline-flex rounded-md shadow-sm">
                <div
                  className={`inline-flex items-center px-4 py-2 space-x-2 text-base font-bold leading-6 uppercase transition duration-150 ease-in-out text-gray-700`}
                >
                  <span>
                    <FaBan />
                  </span>
                  <span>événement annulé</span>
                </div>
              </span>
            )}
            {!eventCanceled && (
              <ul className="flex flex-col">
                {timeSlots.map((slot, i) => {
                  const length = timeSlots.length;
                  return (
                    <div
                      className="flex flex-col items-start"
                      key={`slot-${i}`}
                    >
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
            )}
          </div>
        </InfoCard>
      </SectionContainer>
    </SectionWrapper>
  );
};

export default OpeningHours;
