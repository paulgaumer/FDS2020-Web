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

const BookingSection = ({
  bookingPhone,
  bookingEmail,
  bookingText,
  scolaires,
}) => {
  return (
    <SectionWrapper>
      <SectionContainer customClasses="pb-12" id="reservation">
        <InfoCard title="réservation" customClasses="" scolaires={scolaires}>
          <div className="text-lg leading-relaxed text-center">
            <p>{bookingText}</p>
            <div className="inline-flex flex-col pt-10 pb-8 space-y-6 sm:space-y-0 sm:flex sm:items-start sm:justify-center sm:flex-row sm:space-x-14">
              {bookingEmail && (
                <a
                  href={`mailto: ${bookingEmail}`}
                  className="flex items-center space-x-2"
                >
                  <RoundIcon>
                    <MdDrafts />
                  </RoundIcon>
                  <span>{bookingEmail}</span>
                </a>
              )}
              {bookingPhone && (
                <a
                  href={`tel: ${bookingPhone}`}
                  className="flex items-center space-x-2"
                >
                  <RoundIcon>
                    <MdPhone />
                  </RoundIcon>
                  <span>{bookingPhone}</span>
                </a>
              )}
            </div>
          </div>
        </InfoCard>
      </SectionContainer>
    </SectionWrapper>
  );
};

export default BookingSection;
