import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Countdown from 'react-countdown';
import Transition from '../../transition';
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
          <div className="space-x-6 flex">
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
        <div className="flex justify-between items-start">
          <img src={logoMinister} alt="ministère de l'enseignement supérieur" />
          <div className="flex-grow flex justify-between  items-center ">
            {/* NAVIGATION MENU START */}
            <div data-name="top-menu" className="mt-10 flex-grow">
              <div className="flex justify-center">
                <nav className="md:flex space-x-10">
                  <Link
                    to="/"
                    className="text-xl leading-6 font-medium text-white hover:border-b-2 hover:border-white focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
                  >
                    Accueil
                  </Link>

                  <Link
                    to="/editorial"
                    className="text-xl leading-6 font-medium text-white hover:border-b-2 hover:border-white focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
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
                      <div className="absolute left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0 z-50">
                        <div className="rounded-lg shadow-lg">
                          <div className="rounded-lg shadow-xs overflow-hidden">
                            <div className="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                              <Link
                                to="/loire-atlantique"
                                className="-m-3 p-3 block space-y-1 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                              >
                                <p className="text-lg leading-6 font-medium text-gray-900">
                                  Loire Atlantique
                                </p>
                              </Link>
                              <Link
                                to="/maine-et-loire"
                                className="-m-3 p-3 block space-y-1 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                              >
                                <p className="text-lg leading-6 font-medium text-gray-900">
                                  Maine et Loire
                                </p>
                              </Link>
                              <Link
                                to="/mayenne"
                                className="-m-3 p-3 block space-y-1 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                              >
                                <p className="text-lg leading-6 font-medium text-gray-900">
                                  Mayenne
                                </p>
                              </Link>
                              <Link
                                to="/sarthe"
                                className="-m-3 p-3 block space-y-1 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                              >
                                <p className="text-lg leading-6 font-medium text-gray-900">
                                  Sarthe
                                </p>
                              </Link>
                              <Link
                                to="/vendee"
                                className="-m-3 p-3 block space-y-1 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                              >
                                <p className="text-lg leading-6 font-medium text-gray-900">
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
                    className="text-xl leading-6 font-medium text-white hover:border-b-2 hover:border-white focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
                  >
                    Multimedia
                  </Link>
                  <Link
                    to="/Contacts"
                    className="text-xl leading-6 font-medium text-white hover:border-b-2 hover:border-white focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
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
      <div className="flex-grow flex flex-col justify-between z-30">
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
                <div className="text-white my-20">
                  <h3 className="font-bold tracking-tight">Pays de la Loire</h3>
                  <p className="uppercase text-3xl">
                    02 Octobre - 12 Octobre 2020
                  </p>
                </div>
                <span className="inline-flex rounded-md shadow-sm">
                  <Link
                    to="/"
                    className="uppercase inline-flex items-center px-6 py-6 border border-transparent text-3xl leading-6 font-bold font-medium rounded-md text-white bg-primary hover:bg-primary focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                  >
                    découvrir les évenements
                  </Link>
                </span>
              </div>
            </ContentCenter>
          </div>
        </SectionContainer>
        {/* TIMER BLOCK */}

        <div className="grid grid-cols-12 z-40">
          <div className="col-start-6 col-end-8 flex items-center justify-center">
            <div className="border-2 border-white px-1 pt-4 pb-2 rounded-full">
              <svg
                className="animate-bounce w-6 h-6 text-white "
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
          <Timer className="uppercase text-white py-5 px-12 relative col-start-10 col-end-13">
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
