import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import CheckboxFilter from './checkboxFilter';
import SelectPublicFilter from './selectPublicFilter';
import SelectDepartmentFilter from './selectDepartmentFilter';
import DateFilter from './dateFilter';
import FilterToggles from './filterToggles';

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
  // ****** DATA END ******
  // -------------------------

  const [selectedFormats, setSelectedFormats] = useState([]);
  const [selectedThemes, setSelectedThemes] = useState([]);

  const getCheckedThemes = (items) => {
    setThemeFilters(items);
  };
  // const getCheckedFormats = (items) => {
  //   setFormatFilters(items);
  // };
  const getSelectedPublic = (item) => {
    setPublicFilter(item);
  };
  const getSelectedDates = (item) => {
    setDatesFilter(item);
  };
  const getSelectedDepartment = (item) => {
    setDepartmentFilter(item);
  };

  useEffect(() => {
    setFormatFilters(selectedFormats);
    setThemeFilters(selectedThemes);
  }, [selectedFormats, selectedThemes]);

  const firstDate = data.firstDate.edges[0].node.startDate;
  const lastDate = data.lastDate.edges[0].node.endDate;

  return (
    <>
      {/* *************************** */}
      {/* FILTERS MOBILE START */}
      {/* *************************** */}
      <div className="mb-10 md:hidden">
        <div className="flex items-center space-x-2 text-gray-700">
          <span>
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6 h-6 adjustments"
            >
              <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
            </svg>
          </span>
          <span>Filtrer les évènements</span>
        </div>
        <div className="p-4 bg-white rounded">
          <div>
            <p className="pb-2 text-gray-700">Formes</p>
            <FilterToggles
              list={data.allSanityFormat.edges}
              getValues={setSelectedFormats}
            />
          </div>
        </div>
      </div>
      {/* *************************** */}
      {/* FILTERS MOBILE STOP */}
      {/* *************************** */}
      {/* *************************** */}
      {/* FILTERS DESKTOP START */}
      {/* *************************** */}
      <div className="flex-col hidden space-y-6 md:flex">
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
            <h4 className="pb-6 font-bold text-gray-700 uppercase">Formes</h4>
            <div data-name="formatsFilter">
              <CheckboxFilter
                list={data.allSanityFormat.edges}
                getValues={setSelectedFormats}
                topic="format"
              />
            </div>
          </div>
        </div>
        <div className="overflow-hidden text-gray-500 bg-white rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h4 className="pb-6 font-bold text-gray-700 uppercase">thèmes</h4>
            <div data-name="themesFilter">
              <CheckboxFilter
                list={data.allSanityTheme.edges}
                getValues={setSelectedThemes}
                topic="theme"
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
      {/* *************************** */}
      {/* FILTERS DESKTOP STOP */}
      {/* *************************** */}
    </>
  );
};

export default EventsFilters;
