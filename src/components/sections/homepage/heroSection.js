import React, { useState, useContext } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Countdown from 'react-countdown';
import Transition from '../../global/transition';
import HeaderMobileContent from '../../header/headerMobileContent';
import SectionWrapper from '../../layout/sectionWrapper';
import LogoFds from '../../../images/logo-fds-rouge-white.svg';
import logoPdl from '../../../images/logo-pdl-white.svg';
import logoMinister from '../../../images/hero-pastille-minister.svg';
import poster from '../../../images/teaser-poster.png';
import teaser from '../../../../static/video/teaser.mp4';
import { GlobalStateContext } from '../../../context/global-context-provider';

const ContentCenter = styled.div``;

const Timer = styled.div`
  background: rgba(239, 79, 95, 0.9);
`;

const HeroSection = ({ heroButton = 'Découvrir les événements' }) => {
  const [isDepartmentActive, setIsDepartmentActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const showCovid = useContext(GlobalStateContext).showCovid;

  // **** Settings for Timer Start ****
  const Completionist = () => <p className="text-3xl">La Fête vous attend!</p>;
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div className="flex justify-center">
          <div className="flex space-x-6">
            <div className="text-center">
              <p className="text-2xl 2xl:text-4xl">{days}</p>
              <p>jours</p>
            </div>
            <div className="text-center">
              <p className="text-2xl 2xl:text-4xl">{hours}</p>
              <p>heures</p>
            </div>
            <div className="text-center">
              <p className="text-2xl 2xl:text-4xl">{minutes}</p>
              <p>minutes</p>
            </div>
            <div className="text-center">
              <p className="text-2xl 2xl:text-4xl">{seconds}</p>
              <p>secondes</p>
            </div>
          </div>
        </div>
      );
    }
  };
  // **** Settings for Timer End ****

  return (
    <SectionWrapper backgroundColor="bg-teal-500 h-screen relative flex flex-col">
      <video
        autoPlay
        playsInline
        loop
        muted
        poster={poster}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: '0',
        }}
      >
        <source src={teaser} type="video/mp4" />
      </video>
      {/* Video Background filter Start */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: 'rgb(42, 74, 81)',
          opacity: 0.9,
        }}
      />
      {/* Video Background filter End */}

      {/* NAVBAR START */}
      <div className="absolute top-0 left-0 right-0 z-40">
        <div className="relative flex items-start justify-between">
          <img
            data-name="logo-ministere"
            src={logoMinister}
            alt="ministère de l'enseignement supérieur"
            className="w-auto pr-4 max-w-1/2 sm:w-56 md:w-4/12 lg:w-56 xl:w-2/12"
          />
          <div className="flex items-center justify-between flex-grow ">
            {/* NAVIGATION MENU START */}
            <div data-name="top-menu" className="flex-grow lg:mt-10">
              <div
                data-name="nav-desktop"
                className="justify-center hidden lg:flex"
              >
                <nav className="flex items-center px-6 space-x-10">
                  <Link
                    to="/editorial"
                    className="text-xl font-medium leading-6 text-white transition duration-150 ease-in-out hover:border-b-2 hover:border-white focus:outline-none focus:text-white focus:shadow-outline-indigo"
                  >
                    Editorial
                  </Link>

                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsDepartmentActive(!isDepartmentActive)}
                      className={`${
                        isDepartmentActive ? 'text-white' : 'text-white'
                      } group inline-flex items-center space-x-2 text-xl leading-6 font-medium hover:border-b-2 hover:border-white focus:outline-none focus:shadow-outline-indigo focus:text-white transition ease-in-out duration-150`}
                    >
                      <span>Départements</span>
                      <svg
                        className={`${
                          isDepartmentActive ? 'text-white' : 'text-white'
                        } h-5 w-5 group-hover:text-white group-focus:text-white transition ease-in-out duration-150`}
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
                      <div className="absolute z-50 w-screen max-w-xs px-2 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0">
                        <div className="rounded-lg shadow-lg">
                          <div className="overflow-hidden rounded-lg shadow-xs">
                            <div className="relative z-20 flex-col px-5 py-6 text-center bg-white">
                              <Link
                                to="/loire-atlantique"
                                className="block pb-4 transition duration-150 ease-in-out border-b border-gray-200 hover:bg-gray-50"
                              >
                                <p className="text-lg font-medium leading-6 text-gray-900">
                                  Loire Atlantique
                                </p>
                              </Link>
                              <Link
                                to="/maine-et-loire"
                                className="block py-4 transition duration-150 ease-in-out border-b border-gray-200 hover:bg-gray-50"
                              >
                                <p className="text-lg font-medium leading-6 text-gray-900">
                                  Maine et Loire
                                </p>
                              </Link>
                              <Link
                                to="/mayenne"
                                className="block py-4 transition duration-150 ease-in-out border-b border-gray-200 hover:bg-gray-50"
                              >
                                <p className="text-lg font-medium leading-6 text-gray-900">
                                  Mayenne
                                </p>
                              </Link>
                              <Link
                                to="/sarthe"
                                className="block py-4 transition duration-150 ease-in-out border-b border-gray-200 hover:bg-gray-50"
                              >
                                <p className="text-lg font-medium leading-6 text-gray-900">
                                  Sarthe
                                </p>
                              </Link>
                              <Link
                                to="/vendee"
                                className="block pt-4 pb-6 transition duration-150 ease-in-out hover:bg-gray-50"
                              >
                                <p className="text-lg font-medium leading-6 text-gray-900">
                                  Vendée
                                </p>
                              </Link>
                              <Link
                                to="/scolaires"
                                className="flex items-center justify-center px-4 py-2 space-x-1 text-sm font-bold leading-6 text-gray-700 uppercase whitespace-no-wrap transition duration-150 ease-in-out border border-transparent rounded-md -flex bg-edu hover:bg-eduLight focus:outline-none focus:shadow-outline-indigo active:bg-bg-eduLight"
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
                                <span>Scolaires</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Transition>
                  </div>
                  <Link
                    to="/multimedia"
                    className="text-xl font-medium leading-6 text-white transition duration-150 ease-in-out hover:border-b-2 hover:border-white focus:outline-none focus:text-white focus:shadow-outline-indigo"
                  >
                    Multimedia
                  </Link>
                  <Link
                    to="/contact"
                    className="text-xl font-medium leading-6 text-white transition duration-150 ease-in-out hover:border-b-2 hover:border-white focus:outline-none focus:text-white focus:shadow-outline-indigo"
                  >
                    Contact
                  </Link>
                  {showCovid && (
                    <Link
                      to="/covid"
                      className="hidden px-3 py-2 text-base font-medium leading-4 text-center text-white transition duration-150 ease-in-out border border-white rounded hover:bg-white hover:text-gray-700 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-white xl:inline-block"
                    >
                      <span className="hidden 2xl:inline-block">Info</span>{' '}
                      <span>Covid</span>
                    </Link>
                  )}
                </nav>
              </div>

              {/* BURGER BUTTON FOR MOBILE MENU START */}
              {/* <div
                data-name="nav-mobile"
                className="flex justify-center my-8 text-2xl lg:hidden"
              >
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="inline-flex items-center justify-center p-2 space-x-2 text-white transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
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
                  <span>MENU</span>
                </button>
              </div> */}
              {/* BURGER BUTTON FOR MOBILE MENU END */}
            </div>
            {/* NAVIGATION MENU END */}
            <img
              src={logoPdl}
              alt="pays de la loire"
              className="self-end w-auto pl-4 pr-2 mt-10 max-w-3/4 sm:w-56 md:w-3/6 lg:w-56 md:ml-0 md:mr-8 xl:w-auto"
            />
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
      {/* NAVBAR END */}
      {/* ****************** */}
      {/* ****************** */}

      {/* CENTER BLOCK */}
      <div className="z-30 flex flex-col justify-between flex-auto">
        {/* NAV PADDING START */}
        <div className="h-40 md:h-52 lg:h-40 2xl:h-52" />
        {/* NAV PADDING END */}
        {/* CTA BLOCK START */}
        <section className="flex self-center justify-center flex-grow w-full max-w-3xl px-6 pb-20 xl:pb-10 2xl:max-w-5xl 2xl:pb-20 3xl:max-w-7xl md:px-14 sm:px-6 lg:px-8">
          <ContentCenter
            data-name="content-center"
            className="flex flex-col items-center flex-grow lg:items-start"
          >
            <img
              src={LogoFds}
              alt="fête de la science"
              id="logo-fds"
              className="h-full"
            />

            <div className="mt-2 mb-10 text-white md:mb-12 2xl:mb-20">
              <h3 className="text-4xl font-bold tracking-tight md:text-5xl 2xl:text-7xl">
                Pays de la Loire
              </h3>

              <p className="text-lg uppercase md:text-2xl 2xl:text-3xl">
                02 Octobre - 12 Octobre 2020
              </p>
            </div>
            <span className="inline-flex flex-shrink-0 rounded-md shadow-sm">
              <Link
                to="/#carte-accueil"
                className="inline-flex items-center px-3 py-3 text-lg font-bold leading-6 text-white uppercase transition duration-150 ease-in-out border border-transparent rounded-md xl:text-2xl xl:px-4 xl:py-4 2xl:px-6 2xl:py-6 2xl:text-3xl bg-primary hover:bg-primary focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-primary"
              >
                {heroButton}
              </Link>
            </span>
          </ContentCenter>
        </section>
        {/* CTA BLOCK END */}

        {/* TIMER BLOCK START */}
        <div className="z-40 hidden grid-cols-12 lg:grid">
          <div className="flex items-center justify-center col-start-6 col-end-8">
            <Link
              to="/#a-propos"
              className="px-1 pt-4 pb-2 border-2 border-white rounded-full"
              aria-label="Section A propos"
            >
              <svg
                className="w-6 h-6 text-white animate-bounce "
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </Link>
          </div>
          <Timer className="relative block col-start-8 col-end-13 py-2 text-sm text-white uppercase xl:col-start-9 2xl:text-base 2xl:px-12 2xl:py-5 2xl:col-start-10">
            {/* <Countdown date={'2020-10-02T00:00:00'} renderer={renderer} /> */}
            <Countdown date={'2020-10-02T00:00:00'} renderer={renderer} />

            {/* Top Triangle */}
            <svg
              width="42"
              height="39"
              viewBox="0 0 42 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 left-0"
            >
              <path d="M0 39V0H41.2776L0 39Z" fill="white" />
            </svg>
          </Timer>
        </div>
        {/* TIMER BLOCK END */}
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
