import React, { useState } from 'react';
import { Link } from 'gatsby';
import Transition from '../../transition';
import SectionWrapper from '../../layout/sectionWrapper';
import SectionContainer from '../../layout/sectionContainer';
import LogoFds from '../../../images/logo-fds-rouge-white.svg';
import logoPdl from '../../../images/logo-pdl-white.svg';
import logoMinister from '../../../images/hero-pastille-minister.svg';
import styled from 'styled-components';

const NavbarPlaceholder = styled.div`
  height: 250px;
`;

const ContentCenter = styled.div`
  h3 {
    font-size: 3.25rem;
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

  return (
    <SectionWrapper backgroundColor="bg-teal-500 h-screen relative flex flex-col">
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: '0',
        }}
      >
        <source
          src="https://www.youtube.com/watch?v=Kna5ut8UYQE"
          type="video/mp4"
        />
      </video>
      <div
        className="absolute inset-0 z-10"
        style={{ background: '#2A3951', opacity: 0.9 }}
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
                    className="text-lg leading-6 font-medium text-white hover:border-b-2 hover:border-white focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
                  >
                    Accueil
                  </Link>

                  <Link
                    to="/editorial"
                    className="text-lg leading-6 font-medium text-white hover:border-b-2 hover:border-white focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
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
                      } group inline-flex items-center space-x-2 text-lg leading-6 font-medium hover:border-b-2 hover:border-white focus:outline-none focus:text-gray-900 transition ease-in-out duration-150`}
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
                      <div className="absolute left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
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
                    className="text-lg leading-6 font-medium text-white hover:border-b-2 hover:border-white focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
                  >
                    Multimedia
                  </Link>
                  <Link
                    to="/Contacts"
                    className="text-lg leading-6 font-medium text-white hover:border-b-2 hover:border-white focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
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
      <div className="flex-grow flex flex-col justify-between z-50">
        <SectionContainer customClasses="flex-grow flex items-center">
          <div className="flex flex-col">
            <ContentCenter
              data-name="content-center"
              className="flex flex-col items-center"
            >
              <div>
                <img src={LogoFds} alt="fête de la science" id="logo-fds" />
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
        <div className="flex justify-end z-40">
          <Timer className="uppercase text-white py-5 px-12 relative">
            <div className="space-x-6 flex">
              <div className="text-center">
                <p className="text-4xl">45</p>
                <p>jours</p>
              </div>
              <div className="text-center">
                <p className="text-4xl">13</p>
                <p>heures</p>
              </div>
              <div className="text-center">
                <p className="text-4xl">26</p>
                <p>minutes</p>
              </div>
              <div className="text-center">
                <p className="text-4xl">08</p>
                <p>secondes</p>
              </div>
            </div>
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
