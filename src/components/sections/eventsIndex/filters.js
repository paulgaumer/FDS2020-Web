import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
  Accordion,
  AccordionItem,
  AccordionItemState,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
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
            formatIcon {
              asset {
                fluid(maxWidth: 500) {
                  ...GatsbySanityImageFluid
                }
              }
            }
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
        sort: { fields: startDate___local, order: ASC }
        limit: 1
      ) {
        edges {
          node {
            startDate {
              local
            }
          }
        }
      }
      lastDate: allSanityEvent(
        sort: { fields: endDate___local, order: DESC }
        limit: 1
      ) {
        edges {
          node {
            endDate {
              local
            }
          }
        }
      }
    }
  `);
  // ****** DATA END ******
  // -------------------------

  const [selectedFormats, setSelectedFormats] = useState([]);
  const [selectedThemes, setSelectedThemes] = useState([]);
  const [selectedDates, setSelectedDates] = useState({
    startDate: new Date('2020-10-02T00:00:00.000Z'),
    endDate: new Date('2020-10-12T00:00:00.000Z'),
  });

  const getSelectedPublic = (item) => {
    setPublicFilter(item);
  };
  // const getSelectedDates = (item) => {
  //   setDatesFilter(item);
  // };
  const getSelectedDepartment = (item) => {
    setDepartmentFilter(item);
  };

  useEffect(() => {
    setFormatFilters(selectedFormats);
    setThemeFilters(selectedThemes);
    setDatesFilter(selectedDates);
  }, [selectedFormats, selectedThemes, selectedDates]);

  const firstDate = data.firstDate.edges[0].node.startDate.local;
  const lastDate = data.lastDate.edges[0].node.endDate.local;

  return (
    <>
      {/* *************************** */}
      {/* FILTERS MOBILE START */}
      {/* *************************** */}
      <div className="mb-10 md:hidden">
        <Accordion allowZeroExpanded={true}>
          <AccordionItem className="">
            <AccordionItemHeading>
              <AccordionItemButton className="flex justify-center text-gray-700 focus:outline-none">
                <div className="flex items-center px-4 py-2 space-x-2 text-white uppercase rounded bg-secondary">
                  <span>
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-6 h-6 adjustments"
                    >
                      <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
                    </svg>
                  </span>
                  <AccordionItemState>
                    {(state) => {
                      return state.expanded ? (
                        <span>Fermer les options de filtre</span>
                      ) : (
                        <span>Filtrer les évènements</span>
                      );
                    }}
                  </AccordionItemState>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="pt-3">
              <Accordion
                allowZeroExpanded={true}
                className="flex flex-col pt-4 pb-2 space-y-4 bg-white rounded"
              >
                <AccordionItem className="">
                  <AccordionItemHeading>
                    <AccordionItemButton className="flex text-gray-700">
                      <span className="text-gray-700">
                        <AccordionItemState>
                          {(state) => {
                            return state.expanded ? (
                              <svg
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-6 h-6 chevron-down"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            ) : (
                              <svg
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-6 h-6 chevron-right"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            );
                          }}
                        </AccordionItemState>
                      </span>
                      <span>Thème</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="px-6 pt-3">
                    <FilterToggles
                      list={data.allSanityTheme.edges}
                      getValues={setSelectedThemes}
                    />
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="">
                  <AccordionItemHeading>
                    <AccordionItemButton className="flex pb-2 text-gray-700">
                      <span className="text-gray-700">
                        <AccordionItemState>
                          {(state) => {
                            return state.expanded ? (
                              <svg
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-6 h-6 chevron-down"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            ) : (
                              <svg
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-6 h-6 chevron-right"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            );
                          }}
                        </AccordionItemState>
                      </span>
                      <span>Formes</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="px-6 pt-3">
                    <FilterToggles
                      list={data.allSanityFormat.edges}
                      getValues={setSelectedFormats}
                    />
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="">
                  <AccordionItemHeading>
                    <AccordionItemButton className="flex pb-2 text-gray-700">
                      <span className="text-gray-700">
                        <AccordionItemState>
                          {(state) => {
                            return state.expanded ? (
                              <svg
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-6 h-6 chevron-down"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            ) : (
                              <svg
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-6 h-6 chevron-right"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            );
                          }}
                        </AccordionItemState>
                      </span>
                      <span>Dates</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="px-6 pt-3 pb-4">
                    <DateFilter
                      getValues={setSelectedDates}
                      firstDate={firstDate}
                      lastDate={lastDate}
                    />
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
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
                scolaires={scolaires}
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
                getValues={setSelectedDates}
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
