import React from 'react';
import InfoCard from './infoCard';
import { FaWindowMinimize, FaGlobe, FaFacebook } from 'react-icons/fa';
import SectionWrapper from '../../layout/sectionWrapper';
import SectionContainer from '../../layout/sectionContainer';

const Organizer = ({ organizer, scolaires }) => {
  return (
    <div className="text-base leading-relaxed sm:text-lg">
      <h3 className="flex space-x-3">
        <span className="pt-1 text-xl text-secondary">
          <FaWindowMinimize />
        </span>
        <span className="text-lg font-bold text-gray-700 uppercase sm:text-2xl">
          {organizer.name}
        </span>
      </h3>
      {organizer.description && <p className="pt-4">{organizer.description}</p>}
      <div className={`${organizer.description ? 'pt-4' : 'pt-2'}`}>
        {organizer.website && (
          <a
            href={organizer.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-base group"
          >
            <span
              className={`text-lg ${
                scolaires ? 'text-eduDark' : 'text-primary'
              }`}
            >
              <FaGlobe />
            </span>
            <span className="underline md:no-underline group-hover:underline">
              Visiter le site web
            </span>
          </a>
        )}
        {organizer.facebook && (
          <a
            href={organizer.facebook}
            target="_blank"
            rel="noreferrer"
            className="flex items-center pt-2 space-x-2 text-base group"
          >
            <span className={`${scolaires ? 'text-eduDark' : 'text-primary'}`}>
              <FaFacebook />
            </span>
            <span className="group-hover:underline">Facebook</span>
          </a>
        )}
      </div>
    </div>
  );
};

const OrganizerSection = ({ organizers, scolaires }) => {
  return (
    <SectionWrapper>
      <SectionContainer customClasses="pb-12">
        <InfoCard
          title={organizers.length > 1 ? 'les organisateurs' : "l'organisateur"}
          customClasses=""
          scolaires={scolaires}
        >
          <div data-name="organizers-list" className="flex flex-col space-y-6">
            {organizers.map((organizer) => {
              return (
                <Organizer
                  organizer={organizer}
                  scolaires={scolaires}
                  key={organizer.id}
                />
              );
            })}
          </div>
        </InfoCard>
      </SectionContainer>
    </SectionWrapper>
  );
};

export default OrganizerSection;
