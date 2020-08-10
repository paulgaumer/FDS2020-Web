import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SectionContainer from '../../layout/sectionContainer';
import EventCard from './eventCard';
import Filters from './filters';
import EventsMap from './eventsMap';
import { multiFilter } from '../../../utils/multiFilter';
import { FaSearch } from 'react-icons/fa';

const OuterGrid = styled.div`
  grid-template-columns: minmax(150px, 25%) 1fr;
`;

const InnerEventGrid = styled.div`
  grid-auto-rows: minmax(min-content, max-content);
`;

const ListSection = ({ events, department }) => {
  // Initialize states
  const [allEvents] = useState(events);
  const [selectedEvents, setSelectedEvents] = useState(allEvents);
  const [themeFilters, setThemeFilters] = useState([]);
  const [formatFilters, setFormatFilters] = useState([]);
  const [publicFilter, setPublicFilter] = useState(
    '-d4e31ef1-7615-5290-88e1-b85b940c521a'
  );
  const [datesFilter, setDatesFilter] = useState({
    startDate: new Date('2020-10-02T00:00:00.000Z'),
    endDate: new Date('2020-10-12T00:00:00.000Z'),
  });

  const [allFilters, setAllFilters] = useState({
    themes: themeFilters,
    formats: formatFilters,
    public: publicFilter,
    dates: datesFilter,
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
      <div className="mb-16">
        <EventsMap selectedEvents={selectedEvents} />
      </div>
      <OuterGrid className="grid gap-20">
        <div data-name="filters" className="">
          <Filters
            setThemeFilters={setThemeFilters}
            setFormatFilters={setFormatFilters}
            setPublicFilter={setPublicFilter}
            setDatesFilter={setDatesFilter}
          />
        </div>
        <InnerEventGrid
          data-name="events"
          className="grid grid-cols-1 gap-10 lg:grid-cols-2"
        >
          {selectedEvents.length > 0 &&
            selectedEvents.map((event) => {
              return (
                <div className="col-span-1" key={event.id}>
                  <EventCard event={event} department={department} />
                </div>
              );
            })}
          {selectedEvents.length === 0 && (
            <div className="flex flex-col items-center justify-center col-span-2 p-10 space-y-6 text-xl text-gray-500 border border-dotted rounded-md shadow-inner">
              <p className="text-3xl">
                <FaSearch />
              </p>
              <p>Aucun évenement ne correspond à votre recherche.</p>
            </div>
          )}
        </InnerEventGrid>
      </OuterGrid>
    </SectionContainer>
  );
};

export default ListSection;
