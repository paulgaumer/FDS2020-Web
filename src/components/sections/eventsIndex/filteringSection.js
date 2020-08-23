import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SectionContainer from '../../layout/sectionContainer';
import EventCard from './eventCard';
import Filters from './filters';
import EventsMap from './eventsMap';
import { multiFilter } from '../../../utils/multiFilter';
import { FaSearch } from 'react-icons/fa';
import Pagination from './pagination';

const OuterGrid = styled.div`
  grid-template-columns: minmax(150px, 25%) 1fr;
`;

const InnerEventGrid = styled.div`
  grid-auto-rows: minmax(min-content, max-content);
`;

const FilteringSection = ({ events, scolaires = false }) => {
  // Initialize states
  const [allEvents] = useState(events);
  const [selectedEvents, setSelectedEvents] = useState(allEvents);
  const [themeFilters, setThemeFilters] = useState([]);
  const [formatFilters, setFormatFilters] = useState([]);
  const [publicFilter, setPublicFilter] = useState(
    '-d4e31ef1-7615-5290-88e1-b85b940c521a'
  );
  const [departmentFilter, setDepartmentFilter] = useState('all');
  const [datesFilter, setDatesFilter] = useState({
    startDate: new Date('2020-10-02T00:00:00.000Z'),
    endDate: new Date('2020-10-12T00:00:00.000Z'),
  });

  const [allFilters, setAllFilters] = useState({
    themes: themeFilters,
    formats: formatFilters,
    public: publicFilter,
    dates: datesFilter,
    department: departmentFilter,
  });

  // Update the list of selected events based on current filters
  useEffect(() => {
    const sortedEvents = multiFilter(allEvents, allFilters, scolaires);
    setSelectedEvents(sortedEvents);
  }, [allFilters, allEvents]);

  // Update list of filters based on inputs
  useEffect(() => {
    setAllFilters({
      themes: themeFilters,
      formats: formatFilters,
      public: publicFilter,
      dates: datesFilter,
      department: departmentFilter,
    });
  }, [
    themeFilters,
    formatFilters,
    publicFilter,
    datesFilter,
    departmentFilter,
  ]);

  // *******************************
  // PAGINATION LOGIC

  const [eventsToPaginate, setEventsToPaginate] = useState(selectedEvents);
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(6);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const displayedEvents = eventsToPaginate.slice(
    indexOfFirstEvent,
    indexOfLastEvent
  );

  useEffect(() => {
    setEventsToPaginate(selectedEvents);
  }, [selectedEvents]);
  // *******************************

  return (
    <SectionContainer customClasses="pt-16 pb-20 flex flex-col-reverse md:flex-col">
      <div className="mt-16 md:mt-0 md:mb-16">
        <EventsMap selectedEvents={selectedEvents} />
      </div>
      <OuterGrid className="gap-0 lg:gap-20 md:grid">
        <div data-name="filters" className="">
          <Filters
            setThemeFilters={setThemeFilters}
            setFormatFilters={setFormatFilters}
            setPublicFilter={setPublicFilter}
            setDatesFilter={setDatesFilter}
            setDepartmentFilter={setDepartmentFilter}
            scolaires={scolaires}
          />
        </div>
        <InnerEventGrid
          data-name="events"
          className="flex flex-col space-y-6 md:space-y-0 md:grid-cols-1 md:grid md:gap-10 lg:grid-cols-2"
        >
          {selectedEvents.length > 0 &&
            displayedEvents.map((event, i) => {
              return (
                <div className="col-span-1" key={event.id}>
                  <EventCard event={event} />
                </div>
              );
            })}
          {selectedEvents.length === 0 && (
            <div className="flex flex-col items-center justify-center col-span-2 p-10 space-y-6 text-xl text-center text-gray-500 border border-dotted rounded-md shadow-inner">
              <p className="text-3xl">
                <FaSearch />
              </p>
              <p>Aucun évenement ne correspond à votre recherche.</p>
            </div>
          )}
          <div data-name="pagination" className="col-span-2">
            <Pagination
              itemsPerPage={eventsPerPage}
              totalItems={eventsToPaginate.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
        </InnerEventGrid>
      </OuterGrid>
    </SectionContainer>
  );
};

export default FilteringSection;
