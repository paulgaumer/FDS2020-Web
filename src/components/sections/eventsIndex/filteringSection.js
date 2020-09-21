import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SectionContainer from '../../layout/sectionContainer';
import EventCard from './eventCard';
import Filters from './filters';
import EventsMap from './eventsMap';
import { multiFilter } from '../../../utils/multiFilter';
import { hasWindow } from '../../../utils/hasWindow';
import { formatDepartmentName } from '../../../utils/formatDepartmentName';
import { FaSearch } from 'react-icons/fa';
import Pagination from '../../global/pager';
import URLSearchParams from '@ungap/url-search-params';

const OuterGrid = styled.div`
  grid-template-columns: minmax(150px, 25%) 1fr;
`;

const InnerEventGrid = styled.div`
  grid-auto-rows: minmax(min-content, max-content);
`;

const FilteringSection = ({ department, events, scolaires = false }) => {
  // Initialize states
  const [allEvents] = useState(events);
  const [selectedEvents, setSelectedEvents] = useState(allEvents);
  const [themeFilters, setThemeFilters] = useState([]);
  const [formatFilters, setFormatFilters] = useState([]);
  const [audienceFilters, setAudienceFilters] = useState([]);
  const [departmentFilter, setDepartmentFilter] = useState('all');
  const [datesFilter, setDatesFilter] = useState({
    startDate: new Date('2020-10-02T00:00:00.000Z'),
    endDate: new Date('2020-10-12T00:00:00.000Z'),
  });

  const [allFilters, setAllFilters] = useState({
    themes: themeFilters,
    formats: formatFilters,
    audiences: audienceFilters,
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
      audiences: audienceFilters,
      dates: datesFilter,
      department: departmentFilter,
    });
  }, [
    themeFilters,
    formatFilters,
    audienceFilters,
    datesFilter,
    departmentFilter,
  ]);

  // *******************************
  // PAGINATION LOGIC START
  // *******************************

  // Check window url for a page query
  const checkPage = () => {
    if (hasWindow) {
      const urlParams = new URLSearchParams(window.location.search);
      const pageQuery = urlParams.get('p');
      return pageQuery ? parseInt(pageQuery) : 1;
    }
  };

  // Set the current page based on the page query
  const [currentPage, setCurrentPage] = useState(checkPage());
  const [eventsToPaginate, setEventsToPaginate] = useState(selectedEvents);
  const [eventsPerPage] = useState(6);

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const displayedEvents = eventsToPaginate.slice(
    indexOfFirstEvent,
    indexOfLastEvent
  );

  const handlePopState = () => {
    setCurrentPage(checkPage());
  };

  useEffect(() => {
    // React to url changes, here the page number changing in the page query
    if (hasWindow) {
      window.addEventListener('popstate', handlePopState);
      return () => {
        window.removeEventListener('popstate', handlePopState);
      };
    }
  }, []);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    if (hasWindow) {
      // Scroll back to the first event of the list on page change. Different position based on screen size
      window.innerWidth >= 768
        ? document
            .getElementById('events-map-container')
            .scrollIntoView({ block: 'start' })
        : document
            .getElementById('filter-accordion-mobile')
            .scrollIntoView({ block: 'start' });

      // Save the current page as a url query and update window history.
      // This allows to browse back to the page location after visiting an event.
      scolaires
        ? window.history.pushState(
            {},
            null,
            window.location.origin + `/scolaires?p=${pageNumber}`
          )
        : window.history.pushState(
            {},
            null,
            window.location.origin +
              `/${formatDepartmentName(department)}?p=${pageNumber}`
          );
    }
  };

  useEffect(() => {
    setEventsToPaginate(selectedEvents);
  }, [selectedEvents]);
  // *******************************
  // PAGINATION LOGIC END
  // *******************************

  return (
    <SectionContainer customClasses="pt-16 pb-20 flex flex-col-reverse md:flex-col">
      <div className="mt-16 md:mt-0 md:mb-16" id={'events-map-container'}>
        <EventsMap selectedEvents={selectedEvents} department={department} />
      </div>
      <OuterGrid className="gap-0 lg:gap-10 md:grid">
        <div data-name="filters" className="">
          <Filters
            setThemeFilters={setThemeFilters}
            setFormatFilters={setFormatFilters}
            setAudienceFilters={setAudienceFilters}
            setDatesFilter={setDatesFilter}
            setDepartmentFilter={setDepartmentFilter}
            scolaires={scolaires}
          />
        </div>
        <InnerEventGrid
          data-name="events"
          className="flex flex-col space-y-6 md:ml-10 lg:ml-0 lg:space-y-0 lg:grid lg:gap-10 lg:grid-cols-2"
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
              <p>Aucun événement ne correspond à votre recherche.</p>
            </div>
          )}
          <div data-name="pagination" className="col-span-2">
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={eventsPerPage}
              totalItemsCount={eventsToPaginate.length}
              onChange={paginate}
            />
          </div>
        </InnerEventGrid>
      </OuterGrid>
    </SectionContainer>
  );
};

export default FilteringSection;
