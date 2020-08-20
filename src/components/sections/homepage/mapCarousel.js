import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import tw from 'twin.macro';
import { MdFavorite } from 'react-icons/md';

const CarouselContainer = styled.div`
  display: flex !important;
  justify-content: center !important;
  margin-top: 50px;

  .carousel {
    border-radius: 5px;
    color: #23153d;

    .myCarousel-item {
      .item-text-content {
        ${tw`py-6`}
      }
    }

    .control-arrow {
      ${tw`opacity-100 hover:bg-white`}
    }
    .control-prev.control-arrow::before {
      border-right: 8px solid #23153d;
    }
    .control-next.control-arrow::before {
      border-left: 8px solid #23153d;
    }
    .slide {
      ${tw`h-24 text-black bg-white`}
    }
    .dot {
      ${tw`w-3 h-3 shadow-none opacity-50 bg-mapBackground`}
    }
    .dot.selected {
      ${tw`opacity-100`}
    }
  }
`;

const MapCarousel = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      setIsMobile(window.innerWidth <= 640);
    }
  }, []);
  return (
    <CarouselContainer
      data-styled="carousel-container"
      className="max-w-3xl mx-auto"
    >
      <Carousel
        autoPlay
        infiniteLoop
        interval={4000}
        showStatus={false}
        showArrows={!isMobile}
        showThumbs={false}
      >
        <div className="h-20 myCarousel-item">
          <div className="flex items-center justify-center space-x-1 text-sm item-text-content sm:text-base">
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
            <span>
              Les scolaires ont une page dédiée,{' '}
              <Link
                to="/programme-scolaires"
                className="border-b-4 border-secondary"
              >
                c’est par ici
              </Link>{' '}
            </span>
          </div>
        </div>
        <div className="h-20 myCarousel-item">
          <div className="flex items-center justify-center space-x-2 text-sm item-text-content sm:text-base">
            <MdFavorite className="text-featured" />
            <span>
              Retrouvez notre sélection de{' '}
              <Link
                to="/coups-de-coeur"
                className="border-b-4 border-secondary"
              >
                coups de coeur
              </Link>{' '}
            </span>
          </div>
        </div>
      </Carousel>
    </CarouselContainer>
  );
};

export default MapCarousel;
