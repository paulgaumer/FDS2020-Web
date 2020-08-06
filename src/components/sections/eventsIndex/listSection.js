import React from 'react';
import SectionContainer from '../../layout/sectionContainer';
import EventCard from './eventCard';

const ListSection = ({ events, department }) => {
  return (
    <SectionContainer customClasses="py-20">
      <div>
        {events.map(({ node }) => {
          return <EventCard event={node} department={department} />;
        })}
      </div>
    </SectionContainer>
  );
};

export default ListSection;
