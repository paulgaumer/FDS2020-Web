import React from 'react';
import { Link } from 'gatsby';
import { FaCampground } from 'react-icons/fa';
import SectionWrapper from '../../layout/sectionWrapper';
import SectionContainer from '../../layout/sectionContainer';
import { formatDepartmentName } from '../../../utils/formatDepartmentName';

const VillageLinkSection = ({ event }) => {
  const department = formatDepartmentName(event.village.department.name);

  return (
    <SectionWrapper>
      <SectionContainer customClasses="pb-12 -mt-6">
        <div
          className={`relative max-w-5xl mx-auto bg-white rounded-lg shadow flex justify-center`}
        >
          <div className="flex items-center px-4 py-5 space-x-2 text-gray-500 sm:py-6 sm:px-10">
            <span className="text-xl">
              <FaCampground />
            </span>
            <span className="flex space-x-1">
              <span className="hidden md:inline-block">
                {`Cet évenement sera présent sur le `}
              </span>
              <Link
                to={`/${department}/${event.village.slug.current}`}
                className="border-b-2 border-gray-500 hover:border-secondary"
              >
                {event.village.title}
              </Link>
            </span>
          </div>
        </div>
      </SectionContainer>
    </SectionWrapper>
  );
};

export default VillageLinkSection;
