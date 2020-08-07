import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SectionContainer from '../../layout/sectionContainer';
import EventCard from './eventCard';
import Filters from './filters';
import { multiFilter } from '../../../utils/multiFilter';

const OuterGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(150px, 25%) 1fr;
`;

const ListSection = ({ events, department }) => {
  const intialFilters = {
    themes: [],
    formats: [],
    public: '-d4e31ef1-7615-5290-88e1-b85b940c521a',
    dates: {
      startDate: new Date('2020-10-02T00:00:00.000Z'),
      endDate: new Date('2020-10-12T00:00:00.000Z'),
    },
  };

  // Initialize states
  const [allEvents] = useState(events);
  const [selectedEvents, setSelectedEvents] = useState(allEvents);
  const [allFilters, setAllFilters] = useState(intialFilters);
  const [themeFilters, setThemeFilters] = useState([]);
  const [formatFilters, setFormatFilters] = useState([]);
  const [publicFilter, setPublicFilter] = useState('');
  const [datesFilter, setDatesFilter] = useState({
    startDate: new Date('2020-10-02T00:00:00.000Z'),
    endDate: new Date('2020-10-12T00:00:00.000Z'),
  });

  // Update the list of selected events based on current filters
  useEffect(() => {
    const sortedEvents = multiFilter(allEvents, allFilters);
    setSelectedEvents(sortedEvents);
  }, [allFilters, allEvents]);

  // Update list of filters based on inputs
  useEffect(() => {
    setAllFilters({
      themes: themeFilters,
      formats: formatFilters,
      public: publicFilter,
      dates: datesFilter,
    });
  }, [themeFilters, formatFilters, publicFilter, datesFilter]);

  return (
    <SectionContainer customClasses="py-20">
      <OuterGrid className="gap-20">
        <div data-name="filters" className="">
          <Filters
            setThemeFilters={setThemeFilters}
            setFormatFilters={setFormatFilters}
            setPublicFilter={setPublicFilter}
            setDatesFilter={setDatesFilter}
          />
        </div>
        <div data-name="events" className="grid grid-cols-2 gap-10">
          {selectedEvents.map((event) => {
            return (
              <div className="col-span-1" key={event.id}>
                <EventCard event={event} department={department} />
              </div>
            );
          })}
        </div>
      </OuterGrid>
    </SectionContainer>
  );
};

export default ListSection;
