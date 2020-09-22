import React from 'react';
import InfoCard from './infoCard';
import { MdPhone, MdDrafts } from 'react-icons/md';
import { FaGlobe } from 'react-icons/fa';
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
  bookingWebsite,
  scolaires,
}) => {
  return (
    <SectionWrapper>
      <SectionContainer customClasses="pb-12" id="reservation">
        <InfoCard title="réservation" customClasses="" scolaires={scolaires}>
          <div className="text-base leading-relaxed text-center sm:text-lg">
            <p>{bookingText}</p>
            <div className="inline-flex flex-col pt-10 pb-8 space-y-6 md:space-y-0 md:flex md:items-start md:justify-center md:flex-row md:space-x-14">
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
              {bookingWebsite && (
                <a
                  href={`${bookingWebsite}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <RoundIcon>
                    <FaGlobe />
                  </RoundIcon>
                  <span className="border-b border-gray-500 hover:border-secondary">
                    Site Web
                  </span>
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
