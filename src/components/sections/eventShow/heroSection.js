import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { MdToday } from 'react-icons/md';
import { FaMapMarkerAlt, FaBan } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';
import CustomGatsbyImage from '../../global/customGatsbyImage';
import SectionWrapper from '../../layout/sectionWrapper';
import SectionContainer from '../../layout/sectionContainer';
import FeaturedLabel from '../../global/featuredLabel';
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

const BookingButton = ({
  isBookingNeeded,
  isMobile = false,
  scolaires,
  eventCanceled,
}) => {
  if (eventCanceled) {
    return (
      <span className="inline-flex rounded-md shadow-sm">
        <div
          className={`inline-flex items-center px-4 py-2 space-x-2 text-base font-bold leading-6 uppercase transition duration-150 ease-in-out rounded-full border-4 border-red-600 ${
            isMobile ? 'text-white' : 'text-red-600'
          }`}
        >
          <span>
            <FaBan />
          </span>
          <span>événement annulé</span>
        </div>
      </span>
    );
  } else if (isBookingNeeded) {
    return (
      <Link
        to="#reservation"
        className="inline-flex transform rounded-md hover:scale-105"
      >
        <button
          type="button"
          className={` inline-flex items-center text-base px-4 font-bold leading-6 text-orange-900 uppercase transition duration-150 ease-in-out border border-transparent rounded-full bg-secondary focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-secondary space-x-2 ${
            isMobile ? 'py-3' : 'py-2'
          }`}
        >
          <span className="text-xl">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </span>
          <span>réserver maintenant</span>
        </button>
      </Link>
    );
  } else {
    return (
      <span className="inline-flex rounded-md">
        <div
          className={`inline-flex items-center px-4 py-2 text-base font-bold leading-6 text-gray-700 uppercase transition duration-150 ease-in-out border border-transparent rounded-full ${
            scolaires ? 'bg-edu' : 'bg-primary'
          }`}
        >
          entrée libre
        </div>
      </span>
    );
  }
};

const HeroSection = ({ event, scolaires }) => {
  const {
    title,
    audience,
    audienceCustom,
    theme,
    format,
    bookingRequired,
    bookingRecommanded,
    timeSlots,
    image,
    featured,
    eventCanceled,
    map,
  } = event;

  const [isBookingNeeded, setIsBookingNeeded] = useState(
    bookingRequired || bookingRecommanded
  );

  const getBackgroundColor = () => {
    if (eventCanceled) {
      return 'bg-red-600';
    } else if (isBookingNeeded) {
      return 'bg-secondary';
    } else {
      return 'bg-primary';
    }
  };

  const [displayAudience, setDisplayAudience] = useState(null);
  useEffect(() => {
    if (audience?.name) {
      setDisplayAudience(audience?.name);
    } else if (audienceCustom) {
      const value = `${audienceCustom?.from || ''}${
        audienceCustom?.to ? '-' : ''
      }${audienceCustom?.to || ''} ans`;
      setDisplayAudience(value);
    } else {
      setDisplayAudience(null);
    }
  }, []);

  return (
    <SectionWrapper>
      <SectionContainer customClasses="pt-0 md:pt-20 pb-12">
        <HeroCard className="mx-auto overflow-hidden bg-white rounded-lg shadow md:max-w-5xl">
          <div data-name="image" className="relative bg-sectionBackground">
            {image && (
              <CustomGatsbyImage image={image} customClasses="h-full" />
            )}
            <div className="absolute flex space-x-2 top-5 left-4 md:left-10">
              {featured && <FeaturedLabel customClasses="text-base" />}
            </div>
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
                <span>- {theme[0].name}</span>
                <span className="md:hidden"> -</span>
              </p>
            </div>
            <div className="flex flex-col col-span-1 row-start-2 mt-8 space-y-4 md:mt-0">
              {/* ADDRESS & MAP */}
              <Link
                to="#carte-evenement"
                className="flex items-center space-x-2"
              >
                <span className="text-lg">
                  <FaMapMarkerAlt />
                </span>
                <span>
                  {map.address} (<span className="underline">carte</span>)
                </span>
              </Link>
              {/* TIMESLOTS */}
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
              <BookingButton
                isBookingNeeded={isBookingNeeded}
                scolaires={scolaires}
                eventCanceled={eventCanceled}
              />
            </div>
            <div className="flex-col col-span-1 col-start-2 mt-6 space-y-3 md:space-y-2 md:mt-0">
              {/* FORMAT */}
              <div className="flex items-center space-x-2">
                <span
                  className={`h-8 w-8 text-2xl text-white rounded-full p-2 flex items-center justify-center ${
                    scolaires ? 'bg-eduDark' : 'bg-primary'
                  }`}
                >
                  <Img
                    fluid={format[0].formatIcon.asset.fluid}
                    className="w-full"
                  />
                </span>
                <span>{format[0].name}</span>
              </div>
              {/* AUDIENCE */}
              <div className="flex items-center space-x-2">
                <span
                  className={`h-8 w-8 p-1 flex items-center justify-center text-2xl text-white rounded-full ${
                    scolaires ? 'bg-eduDark' : 'bg-primary'
                  }`}
                >
                  <IoIosPeople />
                </span>
                {displayAudience && (
                  <span>
                    {!audienceCustom?.from && <span>Dès</span>}{' '}
                    <span>{displayAudience}</span>
                  </span>
                )}
                {!displayAudience && <span>Tout Public</span>}
              </div>
            </div>
          </div>
          <div
            className={`flex items-center justify-center w-full mt-6 md:hidden ${getBackgroundColor()}`}
          >
            <BookingButton
              isBookingNeeded={isBookingNeeded}
              isMobile={true}
              eventCanceled={eventCanceled}
            />
          </div>
        </HeroCard>
      </SectionContainer>
    </SectionWrapper>
  );
};

export default HeroSection;
