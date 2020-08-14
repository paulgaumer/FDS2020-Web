import React, { useState } from 'react';
import { Link } from 'gatsby';
import Transition from '../global/transition';
import logo from '../../images/s_bleu.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDepartmentActive, setIsDepartmentActive] = useState(false);

  return (
    <header className="fixed z-50 w-full shadow-sm">
      <div className="relative bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
            <div className="lg:w-0 lg:flex-1">
              <a href="/" className="flex">
                <img className="w-auto h-8 sm:h-12" src={logo} alt="Workflow" />
              </a>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
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
            <nav className="items-center hidden space-x-10 md:flex">
              <Link
                to="/"
                className="text-base font-medium leading-6 text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
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
                {/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}
                <button
                  type="button"
                  onClick={() => setIsDepartmentActive(!isDepartmentActive)}
                  className={`${
                    isDepartmentActive ? 'text-gray-900' : 'text-gray-500'
                  } group inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150`}
                >
                  <span>Départements</span>
                  {/* Item active: "text-gray-600", Item inactive: "text-gray-400" */}
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
                {/* <!--
          'More' flyout menu, show/hide based on flyout menu state.

          Entering: "transition ease-out duration-200"
            From: "opacity-0 translate-y-1"
            To: "opacity-100 translate-y-0"
          Leaving: "transition ease-in duration-150"
            From: "opacity-100 translate-y-0"
            To: "opacity-0 translate-y-1"
        --> */}
                <Transition
                  show={isDepartmentActive}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <div className="absolute z-50 w-screen max-w-xs px-2 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0">
                    <div className="rounded-lg shadow-lg">
                      <div className="overflow-hidden rounded-lg shadow-xs">
                        <div className="relative z-20 grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
                          <Link
                            to="/loire-atlantique"
                            className="block p-3 -m-3 space-y-1 transition duration-150 ease-in-out rounded-md hover:bg-gray-50"
                          >
                            <p className="text-base font-medium leading-6 text-gray-900">
                              Loire Atlantique
                            </p>
                          </Link>
                          <Link
                            to="/maine-et-loire"
                            className="block p-3 -m-3 space-y-1 transition duration-150 ease-in-out rounded-md hover:bg-gray-50"
                          >
                            <p className="text-base font-medium leading-6 text-gray-900">
                              Maine et Loire
                            </p>
                          </Link>
                          <Link
                            to="/mayenne"
                            className="block p-3 -m-3 space-y-1 transition duration-150 ease-in-out rounded-md hover:bg-gray-50"
                          >
                            <p className="text-base font-medium leading-6 text-gray-900">
                              Mayenne
                            </p>
                          </Link>
                          <Link
                            to="/sarthe"
                            className="block p-3 -m-3 space-y-1 transition duration-150 ease-in-out rounded-md hover:bg-gray-50"
                          >
                            <p className="text-base font-medium leading-6 text-gray-900">
                              Sarthe
                            </p>
                          </Link>
                          <Link
                            to="/vendee"
                            className="block p-3 -m-3 space-y-1 transition duration-150 ease-in-out rounded-md hover:bg-gray-50"
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
              <Link
                to="/mesures-covid"
                className="px-3 py-2 text-sm font-medium leading-4 text-white transition duration-150 ease-in-out border border-transparent rounded bg-mapBackground hover:bg-blue-900 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-mapBackground"
              >
                Info Covid
              </Link>
            </nav>
            <div className="items-center justify-end hidden space-x-8 md:flex md:flex-1 lg:w-0">
              <span className="inline-flex rounded-md shadow-sm">
                <Link
                  to="/scolaires"
                  className="inline-flex items-center justify-center px-4 py-2 space-x-1 text-sm font-bold leading-6 text-gray-700 uppercase whitespace-no-wrap transition duration-150 ease-in-out border border-transparent rounded-md bg-edu hover:bg-eduLight focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
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
            </div>
          </div>
        </div>

        {/* <!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  --> */}
        <Transition
          show={isMobileMenuOpen}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div
            className={`absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden`}
          >
            <div className="rounded-lg shadow-lg">
              <div className="bg-white divide-y-2 rounded-lg shadow-xs divide-gray-50">
                <div className="px-5 pt-5 pb-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="w-auto h-8"
                        src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
                        alt="Workflow"
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
                      <a
                        href="/"
                        className="flex items-center p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-md">
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
                              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                            />
                          </svg>
                        </div>
                        <div className="text-base font-medium leading-6 text-gray-900">
                          Analytics
                        </div>
                      </a>
                      <a
                        href="/"
                        className="flex items-center p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-md">
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
                              d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                            />
                          </svg>
                        </div>
                        <div className="text-base font-medium leading-6 text-gray-900">
                          Engagement
                        </div>
                      </a>
                      <a
                        href="/"
                        className="flex items-center p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-md">
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
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                        </div>
                        <div className="text-base font-medium leading-6 text-gray-900">
                          Security
                        </div>
                      </a>
                      <a
                        href="/"
                        className="flex items-center p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-md">
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
                              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                            />
                          </svg>
                        </div>
                        <div className="text-base font-medium leading-6 text-gray-900">
                          Integrations
                        </div>
                      </a>
                      <a
                        href="/"
                        className="flex items-center p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-md">
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
                              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                            />
                          </svg>
                        </div>
                        <div className="text-base font-medium leading-6 text-gray-900">
                          Automations
                        </div>
                      </a>
                      <a
                        href="/"
                        className="flex items-center p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-indigo-500 rounded-md">
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
                              d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </div>
                        <div className="text-base font-medium leading-6 text-gray-900">
                          Reports
                        </div>
                      </a>
                    </nav>
                  </div>
                </div>
                <div className="px-5 py-6 space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href="/"
                      className="text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out hover:text-gray-700"
                    >
                      Pricing
                    </a>
                    <a
                      href="/"
                      className="text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out hover:text-gray-700"
                    >
                      Docs
                    </a>
                    <a
                      href="/"
                      className="text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out hover:text-gray-700"
                    >
                      Enterprise
                    </a>
                    <a
                      href="/"
                      className="text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out hover:text-gray-700"
                    >
                      Blog
                    </a>
                    <a
                      href="/"
                      className="text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out hover:text-gray-700"
                    >
                      Help Center
                    </a>
                    <a
                      href="/"
                      className="text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out hover:text-gray-700"
                    >
                      Guides
                    </a>
                    <a
                      href="/"
                      className="text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out hover:text-gray-700"
                    >
                      Security
                    </a>
                    <a
                      href="/"
                      className="text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out hover:text-gray-700"
                    >
                      Events
                    </a>
                  </div>
                  <div className="space-y-6">
                    <span className="flex w-full rounded-md shadow-sm">
                      <a
                        href="/"
                        className="flex items-center justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
                      >
                        Sign up
                      </a>
                    </span>
                    <p className="text-base font-medium leading-6 text-center text-gray-500">
                      Existing customer?
                      <a
                        href="/"
                        className="text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500"
                      >
                        Sign in
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </header>
  );
};

export default Header;
