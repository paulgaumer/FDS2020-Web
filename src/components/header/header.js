import React, { useState, useEffect, useContext, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'gatsby';
import HeaderMobileContent from '../header/headerMobileContent';
import Transition from '../global/transition';
import logo from '../../images/s_bleu.png';
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from '../../context/global-context-provider';
import useClickOutside from '../../hooks/useClickOutside';

const CovidButton = styled.span`
  background-color: rgba(42, 57, 81, 0.9);
  &:active,
  &:hover {
    background-color: rgba(42, 57, 81, 1);
  }
`;

const Header = ({ isVisible = true, isHomepage = false }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDepartmentActive, setIsDepartmentActive] = useState(false);

  const showCovid = useContext(GlobalStateContext).showCovid;
  const dispatch = useContext(GlobalDispatchContext);

  // Register to global state if the mobile menu is open or not, to stop hidding the navbar if necessary (=> scrollNavHook component)
  useEffect(() => {
    isMobileMenuOpen
      ? dispatch({
          type: 'mobileMenuOpen',
        })
      : dispatch({
          type: 'mobileMenuClosed',
        });
  }, [isMobileMenuOpen]);

  // Create a ref that we add to the element for which we want to detect outside clicks
  const depMenuRef = useRef();
  // State for our modal
  // const [isDepMenuOpen, setDepMenuOpen] = useState(false);
  // Call hook passing in the ref and a function to call on outside click
  useClickOutside(depMenuRef, () => setIsDepartmentActive(false));

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{
            opacity: isHomepage ? 0 : 1,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.4,
            },
          }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.2,
            },
          }}
          className="fixed z-50 w-full shadow-sm"
        >
          <div className="relative bg-white">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="flex items-center justify-between py-6 lg:justify-start">
                <div className="lg:w-0 lg:flex-1">
                  <Link to="/" className="flex">
                    <img
                      className="w-auto h-8 sm:h-12"
                      src={logo}
                      alt="homepage"
                    />
                  </Link>
                </div>
                <div className="-my-2 -mr-2 lg:hidden">
                  {/* BURGER BUTTON FOR MOBILE MENU */}
                  <button
                    type="button"
                    onClick={() => setIsMobileMenuOpen(true)}
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
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
                <nav className="hidden lg:items-center lg:space-x-10 lg:flex">
                  <Link
                    to="/"
                    className="hidden text-base font-medium leading-6 text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900 xl:inline-block"
                  >
                    Accueil
                  </Link>

                  <Link
                    to="/editorial"
                    className="text-base font-medium leading-6 text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
                  >
                    Editorial
                  </Link>

                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsDepartmentActive(!isDepartmentActive)}
                      className={`${
                        isDepartmentActive ? 'text-gray-900' : 'text-gray-500'
                      } group inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150`}
                    >
                      <span>Départements</span>
                      <svg
                        className={`${
                          isDepartmentActive ? 'text-gray-600' : 'text-gray-400'
                        } h-5 w-5 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <Transition
                      show={isDepartmentActive}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <div
                        ref={depMenuRef}
                        className="absolute z-50 w-screen max-w-xs px-2 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0"
                      >
                        <div className="rounded-lg shadow-lg">
                          <div className="overflow-hidden rounded-lg shadow-xs">
                            <div className="relative z-20 grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
                              <Link
                                to="/loire-atlantique"
                                className="block p-3 -m-3 space-y-1 transition duration-150 ease-in-out rounded-md hover:bg-gray-100"
                              >
                                <p className="text-base font-medium leading-6 text-gray-900">
                                  Loire Atlantique
                                </p>
                              </Link>
                              <Link
                                to="/maine-et-loire"
                                className="block p-3 -m-3 space-y-1 transition duration-150 ease-in-out rounded-md hover:bg-gray-100"
                              >
                                <p className="text-base font-medium leading-6 text-gray-900">
                                  Maine et Loire
                                </p>
                              </Link>
                              <Link
                                to="/mayenne"
                                className="block p-3 -m-3 space-y-1 transition duration-150 ease-in-out rounded-md hover:bg-gray-100"
                              >
                                <p className="text-base font-medium leading-6 text-gray-900">
                                  Mayenne
                                </p>
                              </Link>
                              <Link
                                to="/sarthe"
                                className="block p-3 -m-3 space-y-1 transition duration-150 ease-in-out rounded-md hover:bg-gray-100"
                              >
                                <p className="text-base font-medium leading-6 text-gray-900">
                                  Sarthe
                                </p>
                              </Link>
                              <Link
                                to="/vendee"
                                className="block p-3 -m-3 space-y-1 transition duration-150 ease-in-out rounded-md hover:bg-gray-100"
                              >
                                <p className="text-base font-medium leading-6 text-gray-900">
                                  Vendée
                                </p>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Transition>
                  </div>
                  <Link
                    to="/multimedia"
                    className="text-base font-medium leading-6 text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
                  >
                    Multimedia
                  </Link>
                  <Link
                    to="/contact"
                    className="text-base font-medium leading-6 text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
                  >
                    Contact
                  </Link>
                  {showCovid && (
                    <Link to="/covid">
                      <CovidButton className="px-3 py-2 text-sm font-medium leading-4 text-white transition duration-150 ease-in-out border border-transparent rounded bg-mapBackground hover:bg-blue-900 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-mapBackground">
                        Info Covid
                      </CovidButton>
                    </Link>
                  )}
                  <span className="inline-flex rounded-md shadow-sm">
                    <Link
                      to="/scolaires"
                      className="inline-flex items-center justify-center px-4 py-2 space-x-1 text-sm font-bold leading-6 text-gray-700 uppercase whitespace-no-wrap transition duration-150 ease-in-out border border-transparent rounded-md bg-edu hover:bg-eduLight focus:outline-none focus:shadow-outline-indigo active:bg-bg-eduLight"
                    >
                      <svg
                        className="w-7 h-7"
                        viewBox="0 0 31 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.71875 21.2303L15.5 25.0448L22.2812 21.2303V17.2002L24.2188 16.1238V22.3634L15.5 27.2677L6.78125 22.3634V16.1238L8.71875 17.2002V21.2303Z"
                          fill="currentColor"
                        />
                        <path
                          d="M15.5 2.78375L29.0625 9.81615V11.4954L15.5 19.0299L3.875 12.5718V17.9219H1.9375V9.81615L15.5 2.78375ZM5.8125 11.4317L7.75 12.5081L15.5 16.8139L23.25 12.5081L25.1875 11.4317L26.5304 10.6857L15.5 4.96622L4.46963 10.6857L5.8125 11.4317Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span>Programme Scolaires</span>
                    </Link>
                  </span>
                </nav>
              </div>
            </div>
            <Transition
              show={isMobileMenuOpen}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <HeaderMobileContent setIsMobileMenuOpen={setIsMobileMenuOpen} />
            </Transition>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Header;
