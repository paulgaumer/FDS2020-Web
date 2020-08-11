import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Countdown from 'react-countdown';
import Transition from '../../global/transition';
import SectionWrapper from '../../layout/sectionWrapper';
import SectionContainer from '../../layout/sectionContainer';
import LogoFds from '../../../images/logo-fds-rouge-white.svg';
import logoPdl from '../../../images/logo-pdl-white.svg';
import logoMinister from '../../../images/hero-pastille-minister.svg';
import poster from '../../../images/teaser-poster.png';
import teaser from '../../../../static/video/teaser.mp4';

const NavbarPlaceholder = styled.div`
  height: 250px;
`;

const ContentCenter = styled.div`
  h3 {
    font-size: 4.5rem;
  }
  #logo-fds {
    width: 70em;
  }
`;

const Timer = styled.div`
  background: rgba(239, 79, 95, 0.9);
`;

const HeroSection = () => {
  const [isDepartmentActive, setIsDepartmentActive] = useState(false);

  const Completionist = () => <p className="text-3xl">La Fête vous attend!</p>;

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div className="flex justify-center">
          <div className="flex space-x-6">
            <div className="text-center">
              <p className="text-4xl">45</p>
              <p>jours</p>
            </div>
            <div className="text-center">
              <p className="text-4xl">{hours}</p>
              <p>heures</p>
            </div>
            <div className="text-center">
              <p className="text-4xl">{minutes}</p>
              <p>minutes</p>
            </div>
            <div className="text-center">
              <p className="text-4xl">{seconds}</p>
              <p>secondes</p>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <SectionWrapper backgroundColor="bg-teal-500 h-screen relative flex flex-col">
      <video
        autoPlay
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
      {/* Background filter */}
      <div
        className="absolute inset-0 z-10"
        style={{ background: 'rgb(42, 74, 81)', opacity: 0.9 }}
      />
      {/* ABSOLUTE NAVBAR START */}
      <div className="absolute inset-x-0 top-0 z-40">
        <div className="flex items-start justify-between">
          <img src={logoMinister} alt="ministère de l'enseignement supérieur" />
          <div className="flex items-center justify-between flex-grow ">
            {/* NAVIGATION MENU START */}
            <div data-name="top-menu" className="flex-grow mt-10">
              <div className="flex justify-center">
                <nav className="space-x-10 md:flex">
                  <Link
                    to="/"
                    className="text-xl font-medium leading-6 text-white transition duration-150 ease-in-out hover:border-b-2 hover:border-white focus:outline-none focus:text-gray-900"
                  >
                    Accueil
                  </Link>

                  <Link
                    to="/editorial"
                    className="text-xl font-medium leading-6 text-white transition duration-150 ease-in-out hover:border-b-2 hover:border-white focus:outline-none focus:text-gray-900"
                  >
                    Editorial
                  </Link>

                  <div className="relative">
                    {/* Item active: "text-gray-900", Item inactive: "text-white" */}
                    <button
                      type="button"
                      onClick={() => setIsDepartmentActive(!isDepartmentActive)}
                      className={`${
                        isDepartmentActive ? 'text-white' : 'text-white'
                      } group inline-flex items-center space-x-2 text-xl leading-6 font-medium hover:border-b-2 hover:border-white focus:outline-none focus:text-gray-900 transition ease-in-out duration-150`}
                    >
                      <span>Départements</span>
                      {/* Item active: "text-gray-600", Item inactive: "text-gray-400" */}
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
                                <p className="text-lg font-medium leading-6 text-gray-900">
                                  Loire Atlantique
                                </p>
                              </Link>
                              <Link
                                to="/maine-et-loire"
                                className="block p-3 -m-3 space-y-1 transition duration-150 ease-in-out rounded-md hover:bg-gray-50"
                              >
                                <p className="text-lg font-medium leading-6 text-gray-900">
                                  Maine et Loire
                                </p>
                              </Link>
                              <Link
                                to="/mayenne"
                                className="block p-3 -m-3 space-y-1 transition duration-150 ease-in-out rounded-md hover:bg-gray-50"
                              >
                                <p className="text-lg font-medium leading-6 text-gray-900">
                                  Mayenne
                                </p>
                              </Link>
                              <Link
                                to="/sarthe"
                                className="block p-3 -m-3 space-y-1 transition duration-150 ease-in-out rounded-md hover:bg-gray-50"
                              >
                                <p className="text-lg font-medium leading-6 text-gray-900">
                                  Sarthe
                                </p>
                              </Link>
                              <Link
                                to="/vendee"
                                className="block p-3 -m-3 space-y-1 transition duration-150 ease-in-out rounded-md hover:bg-gray-50"
                              >
                                <p className="text-lg font-medium leading-6 text-gray-900">
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
                    className="text-xl font-medium leading-6 text-white transition duration-150 ease-in-out hover:border-b-2 hover:border-white focus:outline-none focus:text-gray-900"
                  >
                    Multimedia
                  </Link>
                  <Link
                    to="/Contacts"
                    className="text-xl font-medium leading-6 text-white transition duration-150 ease-in-out hover:border-b-2 hover:border-white focus:outline-none focus:text-gray-900"
                  >
                    Contacts
                  </Link>
                </nav>
              </div>
            </div>
            {/* NAVIGATION MENU END */}
            <img src={logoPdl} alt="pays de la loire" className="mt-10 mr-8" />
          </div>
        </div>
      </div>
      {/* ABSOLUTE NAVBAR END */}
      {/* ****************** */}
      {/* ****************** */}

      {/* NAVBAR PLACEHOLDER BLOCK */}
      <NavbarPlaceholder />
      {/* CENTER BLOCK */}
      <div className="z-30 flex flex-col justify-between flex-grow">
        <SectionContainer customClasses="flex-grow flex items-center">
          <div className="flex flex-col">
            <ContentCenter
              data-name="content-center"
              className="flex flex-col items-center"
            >
              <div>
                <img
                  src={LogoFds}
                  alt="fête de la science"
                  id="logo-fds"
                  className=""
                />
                <div className="my-20 text-white">
                  <h3 className="font-bold tracking-tight">Pays de la Loire</h3>
                  <p className="text-3xl uppercase">
                    02 Octobre - 12 Octobre 2020
                  </p>
                </div>
                <span className="inline-flex rounded-md shadow-sm">
                  <a
                    href="#departmentsMap"
                    className="inline-flex items-center px-6 py-6 text-3xl font-bold leading-6 text-white uppercase transition duration-150 ease-in-out border border-transparent rounded-md bg-primary hover:bg-primary focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
                  >
                    découvrir les évenements
                  </a>
                </span>
              </div>
            </ContentCenter>
          </div>
        </SectionContainer>
        {/* TIMER BLOCK */}

        <div className="z-40 grid grid-cols-12">
          <div className="flex items-center justify-center col-start-6 col-end-8">
            <a
              href="#aboutSection"
              className="px-1 pt-4 pb-2 border-2 border-white rounded-full"
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
            </a>
          </div>
          <Timer className="relative col-start-10 col-end-13 px-12 py-5 text-white uppercase">
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
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
