import React, { useState } from 'react';
import { Link } from 'gatsby';
import logoFds from '../../images/s_bleu.png';
import {
  Accordion,
  AccordionItem,
  AccordionItemState,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

const HeaderMobileContent = ({ setIsMobileMenuOpen }) => {
  return (
    <div
      className={`absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden`}
    >
      <div className="rounded-lg shadow-lg">
        <div className="bg-white divide-y-2 rounded-lg shadow-xs divide-gray-50">
          <div className="px-5 pt-5 pb-6 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-gray-200">
              <div className="ml-2">
                <img
                  className="w-auto h-8"
                  src={logoFds}
                  alt="Fête de la Science"
                />
              </div>
              <div className="-mr-2">
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <nav className="grid grid-cols-1 gap-7">
                <Link
                  to="/"
                  className="flex items-center p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-full bg-secondary">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-6 h-6 home"
                    >
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                    </svg>
                  </div>
                  <div className="text-base font-medium leading-6 text-gray-900">
                    Accueil
                  </div>
                </Link>
                <Link
                  to="/editorial"
                  className="flex items-center p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-full bg-secondary">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-6 h-6 pencil"
                    >
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                    </svg>
                  </div>
                  <div className="text-base font-medium leading-6 text-gray-900">
                    Editorial
                  </div>
                </Link>

                <Accordion allowZeroExpanded={true}>
                  <AccordionItem dangerouslySetExpanding={true}>
                    <AccordionItemHeading>
                      <AccordionItemButton className="focus:outline-none">
                        <div className="flex items-center space-x-4 transition duration-150 ease-in-out">
                          <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-full bg-secondary">
                            <svg
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-6 h-6 map"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </div>
                          <div className="text-base font-medium leading-6 text-gray-900">
                            Programme par département
                          </div>
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
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="pt-6 pl-6">
                      <Link
                        to="/loire-atlantique"
                        className="text-base leading-6 text-gray-700 transition duration-150 ease-in-out hover:text-gray-700"
                      >
                        Loire Atlantique
                      </Link>
                    </AccordionItemPanel>
                    <AccordionItemPanel className="pt-6 pl-6">
                      <Link
                        to="/maine-et-loire"
                        className="text-base leading-6 text-gray-700 transition duration-150 ease-in-out hover:text-gray-700"
                      >
                        Maine et Loire
                      </Link>
                    </AccordionItemPanel>
                    <AccordionItemPanel className="pt-6 pl-6">
                      <Link
                        to="/mayenne"
                        className="text-base leading-6 text-gray-700 transition duration-150 ease-in-out hover:text-gray-700"
                      >
                        Mayenne
                      </Link>
                    </AccordionItemPanel>
                    <AccordionItemPanel className="pt-6 pl-6">
                      <Link
                        to="/sarthe"
                        className="text-base leading-6 text-gray-700 transition duration-150 ease-in-out hover:text-gray-700"
                      >
                        Sarthe
                      </Link>
                    </AccordionItemPanel>
                    <AccordionItemPanel className="pt-6 pl-6">
                      <Link
                        to="/vendee"
                        className="text-base leading-6 text-gray-700 transition duration-150 ease-in-out hover:text-gray-700"
                      >
                        Vendée
                      </Link>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
                <Link
                  to="/scolaires"
                  className="flex items-center p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-full bg-secondary">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-6 h-6 academic-cap"
                    >
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                    </svg>
                  </div>
                  <div className="text-base font-medium leading-6 text-gray-900">
                    Programme Scolaires
                  </div>
                </Link>
                <Link
                  to="/multimedia"
                  className="flex items-center p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-full bg-secondary">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-6 h-6 film"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div className="text-base font-medium leading-6 text-gray-900">
                    Multimedia
                  </div>
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-full bg-secondary">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-6 h-6 mail"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <div className="text-base font-medium leading-6 text-gray-900">
                    Contact
                  </div>
                </Link>
                <Link
                  to="/covid"
                  className="flex items-center p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-full bg-secondary">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-6 h-6 information-circle"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div className="text-base font-medium leading-6 text-gray-900">
                    Info Covid
                  </div>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobileContent;
