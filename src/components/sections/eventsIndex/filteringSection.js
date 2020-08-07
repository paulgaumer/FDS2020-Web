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
  };

  // Initialize states
  const [allEvents, setAllEvents] = useState(events);
  const [selectedEvents, setSelectedEvents] = useState(allEvents);
  const [filters, setFilters] = useState(intialFilters);
  const [isFiltered, setIsFiltered] = useState(false);
  const [themeFilters, setThemeFilters] = useState([]);
  const [formatFilters, setFormatFilters] = useState([]);
  const [publicFilter, setPublicFilter] = useState(
    '-d4e31ef1-7615-5290-88e1-b85b940c521a'
  );

  // Monitor the activation of filters
  useEffect(() => {
    if (
      filters.themes.length > 0 ||
      filters.formats.length > 0 ||
      filters.public !== '-d4e31ef1-7615-5290-88e1-b85b940c521a'
    ) {
      setIsFiltered(true);
    } else {
      setIsFiltered(false);
    }
  }, [filters]);

  // Update the list of selected events based on filters
  useEffect(() => {
    const sortedEvents = multiFilter(allEvents, filters);
    setSelectedEvents(sortedEvents);
  }, [filters]);

  // Update list of filters based on inputs
  useEffect(() => {
    setFilters({
      themes: themeFilters,
      formats: formatFilters,
      public: publicFilter,
    });
  }, [themeFilters, formatFilters, publicFilter]);

  return (
    <SectionContainer customClasses="py-20">
      <OuterGrid className="gap-20">
        <div data-name="filters" className="">
          <Filters
            setThemeFilters={setThemeFilters}
            setFormatFilters={setFormatFilters}
            setPublicFilter={setPublicFilter}
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
