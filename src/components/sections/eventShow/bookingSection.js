import React from 'react';
import InfoCard from './infoCard';
import { MdPhone, MdDrafts } from 'react-icons/md';
import SectionWrapper from '../../layout/sectionWrapper';
import SectionContainer from '../../layout/sectionContainer';

const RoundIcon = ({ children }) => {
  return (
    <span className="p-2 text-white rounded-full bg-secondary">{children}</span>
  );
};

const BookingSection = ({ bookingPhone, bookingEmail }) => {
  return (
    <SectionWrapper>
      <SectionContainer customClasses="pb-12">
        <InfoCard title="réservation" customClasses="">
          <div className="text-lg leading-relaxed text-center" id="reservation">
            <p>
              Attention, cet évenement est uniquement accessible sur
              réservation!
            </p>
            <div className="inline-flex flex-col pt-10 pb-8 space-y-6 sm:space-y-0 sm:flex sm:items-start sm:justify-center sm:flex-row sm:space-x-14">
              <a
                href={`mailto: ${bookingEmail}`}
                className="flex items-center space-x-2"
              >
                <RoundIcon>
                  <MdDrafts />
                </RoundIcon>
                <span>{bookingEmail}</span>
              </a>
              <a
                href={`tel: ${bookingPhone}`}
                className="flex items-center space-x-2"
              >
                <RoundIcon>
                  <MdPhone />
                </RoundIcon>
                <span>{bookingPhone}</span>
              </a>
            </div>
          </div>
        </InfoCard>
      </SectionContainer>
    </SectionWrapper>
  );
};

export default BookingSection;
