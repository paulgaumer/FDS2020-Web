import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SectionContainer from '../../layout/sectionContainer';
import EventCard from './eventCard';
import Filters from './filters';

const OuterGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(150px, 25%) 1fr;
`;

const ListSection = ({ events, department }) => {
  const [filters, setFilters] = useState({
    themes: [],
    formats: [],
  });
  const [isFiltered, setIsFiltered] = useState(false);
  const [themeFilters, setThemeFilters] = useState([]);
  const [formatFilters, setFormatFilters] = useState([]);

  // Monitor the activation of filters
  useEffect(() => {
    if (filters.themes.length > 0 || filters.formats.length > 0) {
      setIsFiltered(true);
    } else {
      setIsFiltered(false);
    }
  }, [filters]);

  // Update list of filters based on inputs
  useEffect(() => {
    setFilters({
      themes: themeFilters,
      formats: formatFilters,
    });
  }, [themeFilters, formatFilters]);

  return (
    <SectionContainer customClasses="py-20">
      <OuterGrid className="gap-20">
        <div data-name="filters" className="">
          <Filters
            setThemeFilters={setThemeFilters}
            setFormatFilters={setFormatFilters}
          />
        </div>
        <div data-name="events" className="grid grid-cols-2 gap-10">
          {events.map(({ node }) => {
            // Show everything if no filters are activated
            if (!isFiltered) {
              return (
                <div className="col-span-1" key={node.id}>
                  <EventCard event={node} department={department} />
                </div>
              );
              // Show based on selected filters
            } else if (
              filters.themes.includes(node.theme[0].id) ||
              filters.formats.includes(node.format[0].id)
            ) {
              return (
                <div className="col-span-1" key={node.id}>
                  <EventCard event={node} department={department} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </OuterGrid>
    </SectionContainer>
  );
};

export default ListSection;
