import React from 'react';
import styled from 'styled-components';
import SectionContainer from '../../layout/sectionContainer';
import EventCard from './eventCard';
import EventsFilters from './eventsFilters';

const OuterGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(150px, 25%) 1fr;
`;

const ListSection = ({ events, department }) => {
  return (
    <SectionContainer customClasses="py-20">
      <OuterGrid className="gap-20">
        <div data-name="filters" className="bg-red-200">
          <EventsFilters />
        </div>
        <div data-name="events" className="grid grid-cols-2 gap-10">
          {events.map(({ node }) => {
            return (
              <div className="col-span-1">
                <EventCard event={node} department={department} key={node.id} />
              </div>
            );
          })}
        </div>
      </OuterGrid>
    </SectionContainer>
  );
};

export default ListSection;
