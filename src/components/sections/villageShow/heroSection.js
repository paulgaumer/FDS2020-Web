import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { MdToday } from 'react-icons/md';
import { FaMapMarkerAlt, FaBan } from 'react-icons/fa';
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
    grid-row-gap: 2.5em;
    grid-column-gap: 1em;
  }
`;

const BookingButton = ({ eventCanceled }) => {
  if (eventCanceled) {
    return (
      <span className="inline-flex rounded-md shadow-sm">
        <div
          className={`inline-flex items-center px-4 py-2 space-x-2 text-base font-bold leading-6 text-red-600 uppercase transition duration-150 ease-in-out rounded-full border-4 border-red-600 `}
        >
          <span>
            <FaBan />
          </span>
          <span>événement annulé</span>
        </div>
      </span>
    );
  } else {
    return (
      <span className="inline-flex transform rounded-md shadow-sm hover:scale-105">
        <Link
          to="#village-events"
          className={`inline-flex items-center px-4 py-2 text-base font-bold leading-6 text-gray-700 uppercase transition duration-150 ease-in-out border border-transparent rounded-full bg-primary `}
        >
          Voir les évenements
        </Link>
      </span>
    );
  }
};

const HeroSection = ({ village }) => {
  const { title, timeSlots, image, map, eventCanceled } = village;

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
              <h1 className="text-2xl font-bold text-gray-700 uppercase sm:text-3xl md:text-3xl">
                {title}
              </h1>
              <p className="text-base font-hairline text-purple-400 md:text-lg">
                <span>- Village des Sciences</span>
                <span className="md:hidden"> -</span>
              </p>
            </div>
            <div className="flex flex-col col-span-1 row-start-2 mt-8 space-y-4 md:mt-0">
              <Link
                to="#carte-evenement"
                className="flex items-center space-x-2"
              >
                <span className="text-lg">
                  <FaMapMarkerAlt />
                </span>
                <span>
                  {map.address} <span className="underline">(carte)</span>
                </span>
              </Link>
              <div className="flex items-center space-x-2">
                <span className="text-xl">
                  <MdToday />
                </span>
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
              <BookingButton eventCanceled={eventCanceled} />
            </div>
            <div className="flex col-span-1 col-start-2 mt-6 space-x-6 md:mt-0 md:space-x-0 md:space-y-2 md:flex-col"></div>
          </div>
          <div
            className={`flex items-center justify-center w-full mt-6 md:hidden bg-primary`}
          >
            <BookingButton eventCanceled={eventCanceled} />
          </div>
        </HeroCard>
      </SectionContainer>
    </SectionWrapper>
  );
};

export default HeroSection;
