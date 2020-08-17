import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import CheckboxFilter from './checkboxFilter';
import SelectPublicFilter from './selectPublicFilter';
import SelectDepartmentFilter from './selectDepartmentFilter';
import DateFilter from './dateFilter';

const EventsFilters = ({
  setThemeFilters,
  setFormatFilters,
  setPublicFilter,
  setDatesFilter,
  setDepartmentFilter,
  scolaires,
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
      allSanityDepartment(sort: { fields: name, order: ASC }) {
        edges {
          node {
            name
            id
          }
        }
      }
      firstDate: allSanityEvent(
        sort: { fields: startDate, order: ASC }
        limit: 1
      ) {
        edges {
          node {
            startDate
          }
        }
      }
      lastDate: allSanityEvent(
        sort: { fields: endDate, order: DESC }
        limit: 1
      ) {
        edges {
          node {
            endDate
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
  const getSelectedDates = (item) => {
    setDatesFilter(item);
  };
  const getSelectedDepartment = (item) => {
    setDepartmentFilter(item);
  };

  const firstDate = data.firstDate.edges[0].node.startDate;
  const lastDate = data.lastDate.edges[0].node.endDate;

  return (
    <div className="flex flex-col space-y-6">
      {scolaires && (
        <div className="overflow-hidden text-gray-500 bg-white rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h4 className="pb-6 font-bold text-gray-700 uppercase">
              Quel Département ?
            </h4>
            <div data-name="publicFilter">
              <SelectDepartmentFilter
                list={data.allSanityDepartment.edges}
                getValue={getSelectedDepartment}
              />
            </div>
          </div>
        </div>
      )}
      <div className="overflow-hidden text-gray-500 bg-white rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h4 className="pb-6 font-bold text-gray-700 uppercase">thèmes</h4>
          <div data-name="themesFilter">
            <CheckboxFilter
              list={data.allSanityTheme.edges}
              getValues={getCheckedThemes}
              topic="theme"
            />
          </div>
        </div>
      </div>
      <div className="overflow-hidden text-gray-500 bg-white rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h4 className="pb-6 font-bold text-gray-700 uppercase">Formes</h4>
          <div data-name="formatsFilter">
            <CheckboxFilter
              list={data.allSanityFormat.edges}
              getValues={getCheckedFormats}
              topic="format"
            />
          </div>
        </div>
      </div>
      {!scolaires && (
        <div className="overflow-hidden text-gray-500 bg-white rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h4 className="pb-6 font-bold text-gray-700 uppercase">
              Quel Public ?
            </h4>
            <div data-name="publicFilter">
              <SelectPublicFilter
                list={data.allSanityAudience.edges}
                getValue={getSelectedPublic}
              />
            </div>
          </div>
        </div>
      )}
      <div className="overflow-hidden text-gray-500 bg-white rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h4 className="pb-6 font-bold text-gray-700 uppercase">Dates</h4>
          <div data-name="dateFilter">
            <DateFilter
              getValues={getSelectedDates}
              firstDate={firstDate}
              lastDate={lastDate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsFilters;
