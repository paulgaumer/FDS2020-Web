import React from 'react';
import InfoCard from './infoCard';
import { FaWindowMinimize, FaGlobe, FaFacebook } from 'react-icons/fa';
import SectionWrapper from '../../layout/sectionWrapper';
import SectionContainer from '../../layout/sectionContainer';

const OrganizerSection = ({ organizer, scolaires }) => {
  return (
    <SectionWrapper>
      <SectionContainer customClasses="pb-12">
        <InfoCard title="l'organisateur" customClasses="" scolaires={scolaires}>
          <div className="text-lg leading-relaxed">
            <h3 className="flex pb-4 space-x-3">
              <span className="pt-1 text-xl text-secondary">
                <FaWindowMinimize />
              </span>
              <span className="text-2xl font-bold text-gray-700 uppercase">
                {organizer.name}
              </span>
            </h3>
            <p>{organizer.description}</p>
            <div className="pt-8 text-center sm:text-left">
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
                  <span
                    className={`${scolaires ? 'text-eduDark' : 'text-primary'}`}
                  >
                    <FaFacebook />
                  </span>
                  <span className="group-hover:underline">Facebook</span>
                </a>
              )}
            </div>
          </div>
        </InfoCard>
      </SectionContainer>
    </SectionWrapper>
  );
};

export default OrganizerSection;
