import React from 'react';
import InfoCard from './infoCard';
import { FaWindowMinimize, FaGlobe, FaFacebook } from 'react-icons/fa';
import SectionWrapper from '../../layout/sectionWrapper';
import SectionContainer from '../../layout/sectionContainer';

const OrganizerSection = ({ organizer }) => {
  return (
    <SectionWrapper>
      <SectionContainer customClasses="pb-12">
        <InfoCard title="l'organisateur" customClasses="">
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
            <div className="pt-8">
              {organizer.website && (
                <a
                  href={organizer.website}
                  className="flex items-center space-x-2 text-base"
                >
                  <span className="text-primary">
                    <FaGlobe />
                  </span>
                  <span>{organizer.website}</span>
                </a>
              )}
              {organizer.facebook && (
                <a
                  href={organizer.facebook}
                  className="flex items-center pt-2 space-x-2 text-base"
                >
                  <span className="text-primary">
                    <FaFacebook />
                  </span>
                  <span>Facebook</span>
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
