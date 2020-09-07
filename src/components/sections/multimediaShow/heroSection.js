import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { MdToday } from 'react-icons/md';
import { IoIosPeople } from 'react-icons/io';
import CustomGatsbyImage from '../../global/customGatsbyImage';
import SectionWrapper from '../../layout/sectionWrapper';
import SectionContainer from '../../layout/sectionContainer';
import { processDate } from '../../../utils/processDate';

const HeroCard = styled.div`
  [data-name='image'] {
    height: 22.5em;

    @media (max-width: 768px) {
      height: 14em;
    }
  }

  [data-name='grid-info'] {
    grid-template-columns: 70% 1fr;
    grid-template-rows: auto auto;
    grid-row-gap: 1.5em;
    grid-column-gap: 1em;
  }
`;

const BookingButton = ({ mediaUrl }) => {
  return (
    <a
      href={mediaUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex transform rounded-md shadow-sm md:hover:scale-105"
    >
      <div
        className={`inline-flex items-center px-4 py-4 md:py-2 space-x-2 text-base font-bold leading-6 text-gray-700 uppercase transition duration-150 ease-in-out border border-transparent rounded-full bg-primary`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
        <span>Accéder au contenu</span>
      </div>
    </a>
  );
};

const HeroSection = ({ event }) => {
  const { title, audience, theme, timeSlots, image, mediaUrl } = event;

  return (
    <SectionWrapper>
      <SectionContainer customClasses="pt-0 md:pt-20 pb-12">
        <HeroCard className="mx-auto overflow-hidden bg-white rounded-lg shadow md:max-w-5xl">
          <div data-name="image" className="relative bg-sectionBackground">
            {image && (
              <CustomGatsbyImage image={image} customClasses="h-full" />
            )}
          </div>
          <div
            data-name="grid-info"
            className="px-4 py-5 text-gray-500 sm:py-6 sm:px-10 md:grid"
          >
            <div className="col-span-1 row-span-1 text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-700 uppercase md:text-3xl">
                {title}
              </h1>
              <p className="text-base font-hairline text-purple-400 md:text-lg">
                <span>- {theme[0].name}</span>
                <span className="md:hidden"> -</span>
              </p>
            </div>
            <div className="flex flex-col col-span-1 row-start-2 mt-8 space-y-4 md:mt-0">
              <div className="flex items-center ml-1 space-x-4 md:space-x-2 md:ml-0">
                <span
                  className={`text-xl ${
                    timeSlots.length > 0
                      ? 'inline-block'
                      : 'hidden md:inline-block'
                  }`}
                >
                  <MdToday />
                </span>

                {timeSlots.length === 0 && (
                  <p className="hidden md:block">En ligne</p>
                )}
                {timeSlots.length > 1 && (
                  <Link to="#opening-hours" className="underline">
                    <p>Voir tous les horaires</p>
                  </Link>
                )}
                {timeSlots.length === 1 && (
                  <div>
                    <p>{processDate(timeSlots[0])}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="items-center hidden col-span-1 col-start-2 md:flex">
              <BookingButton mediaUrl={mediaUrl} />
            </div>
            <div
              className={`flex col-span-1 col-start-2 space-x-6 md:mt-0 md:space-x-0 md:space-y-2 md:flex-col ${
                timeSlots.length === 0 ? 'justify-center mt-0' : 'mt-2'
              }`}
            >
              <div className="flex items-center space-x-2">
                <span
                  className={`h-8 w-8 flex items-center justify-center text-2xl text-gray-500 rounded-full `}
                >
                  <IoIosPeople />
                </span>
                <span>{audience[0].name}</span>
              </div>
            </div>
          </div>
          <div
            className={`flex items-center justify-center w-full mt-2 md:hidden bg-primary`}
          >
            <BookingButton mediaUrl={mediaUrl} />
          </div>
        </HeroCard>
      </SectionContainer>
    </SectionWrapper>
  );
};

export default HeroSection;
