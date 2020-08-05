import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import SectionWrapper from '../../layout/sectionWrapper';
import SectionContainer from '../../layout/sectionContainer';
import { MdToday, MdFavorite, MdMic } from 'react-icons/md';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';

const HeroCard = styled.div`
  [data-name='image'] {
    height: 22.5em;
  }

  [data-name='grid-info'] {
    display: grid;
    grid-template-columns: 70% 1fr;
    grid-template-rows: auto auto;
    grid-row-gap: 2.5em;
  }
`;

const BookingButton = ({ bookingRequired }) => {
  if (bookingRequired) {
    return (
      <a href="#booking-section" class="inline-flex rounded-md shadow-sm">
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 text-base font-medium font-bold leading-6 text-orange-900 uppercase transition duration-150 ease-in-out border border-transparent rounded-full bg-secondary hover:bg-yellow-200 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
        >
          réservation obligatoire
        </button>
      </a>
    );
  } else {
    return (
      <span class="inline-flex rounded-md shadow-sm">
        <div className="inline-flex items-center px-4 py-2 text-base font-medium font-bold leading-6 text-gray-700 uppercase transition duration-150 ease-in-out border border-transparent rounded-full bg-primary ">
          entrée libre
        </div>
      </span>
    );
  }
};

const HeroSection = ({ event }) => {
  const {
    title,
    theme,
    format,
    bookingRequired,
    endDate,
    startDate,
    address,
    image,
  } = event;

  return (
    <SectionWrapper>
      <SectionContainer customClasses="pt-20 pb-12">
        <HeroCard className="max-w-5xl mx-auto overflow-hidden bg-white rounded-lg shadow">
          <div data-name="image" className="relative bg-red-200">
            <Img
              fluid={image.asset.fluid}
              alt={image.alt}
              className="object-cover h-full"
              imgStyle={{ objectPosition: 'center' }}
            />
            <p className="absolute flex items-center px-3 py-1 space-x-1 text-base text-white rounded-lg bottom-5 left-10 bg-featured">
              <span>
                <MdFavorite />
              </span>
              <span>Coup de coeur</span>
            </p>
          </div>
          <div
            data-name="grid-info"
            className="px-4 py-5 text-gray-500 sm:py-6 sm:px-10"
          >
            <div className="col-span-1 row-span-1">
              <h1 className="text-3xl font-bold text-gray-700 uppercase">
                {title}
              </h1>
              <p className="text-lg font-hairline">- {theme[0].name}</p>
            </div>
            <div className="flex flex-col col-span-1 row-start-2 space-y-4">
              <p className="flex items-center space-x-2">
                <span className="text-xl">
                  <MdToday />
                </span>
                <span>
                  {startDate} - {endDate}
                </span>
              </p>
              <p className="flex items-center space-x-2">
                <span className="text-lg">
                  <FaMapMarkerAlt />
                </span>
                <span>{address}</span>
              </p>
            </div>

            <div className="flex items-center col-span-1 col-start-2">
              <BookingButton bookingRequired={bookingRequired} />
            </div>
            <div className="flex flex-col col-span-1 col-start-2 space-y-2">
              <p className="flex items-center space-x-2">
                <span className="p-1 text-2xl text-white rounded-full bg-primary">
                  <MdMic />
                </span>
                <span>{format[0].name}</span>
              </p>
              <p className="flex items-center space-x-2">
                <span className="p-1 text-2xl text-white rounded-full bg-primary">
                  <IoIosPeople />
                </span>
                <span>Tout Public</span>
              </p>
            </div>
          </div>
        </HeroCard>
      </SectionContainer>
    </SectionWrapper>
  );
};

export default HeroSection;
