import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import CheckboxFilter from './checkboxFilter';
import SelectFilter from './selectFilter';

const EventsFilters = ({
  setThemeFilters,
  setFormatFilters,
  setPublicFilter,
}) => {
  const data = useStaticQuery(graphql`
    query FiltersQuery {
      allSanityTheme(sort: { fields: name, order: ASC }) {
        edges {
          node {
            name
            id
          }
        }
      }
      allSanityFormat(sort: { fields: name, order: ASC }) {
        edges {
          node {
            name
            id
          }
        }
      }
      allSanityAudience(sort: { fields: name, order: DESC }) {
        edges {
          node {
            name
            id
          }
        }
      }
    }
  `);

  const getCheckedThemes = (items) => {
    setThemeFilters(items);
  };
  const getCheckedFormats = (items) => {
    setFormatFilters(items);
  };
  const getSelectedPublic = (item) => {
    setPublicFilter(item);
  };

  return (
    <>
      <div className="overflow-hidden text-gray-500 bg-white rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h4 className="pb-6 font-bold text-gray-700 uppercase">thèmes</h4>
          <div data-name="themesFilter">
            <CheckboxFilter
              list={data.allSanityTheme.edges}
              getValues={getCheckedThemes}
            />
          </div>
        </div>
      </div>
      <div className="mt-10 overflow-hidden text-gray-500 bg-white rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h4 className="pb-6 font-bold text-gray-700 uppercase">Formes</h4>
          <div data-name="formatsFilter">
            <CheckboxFilter
              list={data.allSanityFormat.edges}
              getValues={getCheckedFormats}
            />
          </div>
        </div>
      </div>
      <div className="mt-10 overflow-hidden text-gray-500 bg-white rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h4 className="pb-6 font-bold text-gray-700 uppercase">
            Quel Public ?
          </h4>
          <div data-name="publicFilter">
            <SelectFilter
              list={data.allSanityAudience.edges}
              getValue={getSelectedPublic}
            />
          </div>
        </div>
      </div>
      {/* <div className="mt-10 overflow-hidden text-gray-500 bg-white rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h4 className="pb-6 font-bold text-gray-700 uppercase">Dates</h4>
          <div data-name="publicFilter">
            <SelectFilter />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default EventsFilters;
