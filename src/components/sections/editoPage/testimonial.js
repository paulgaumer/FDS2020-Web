import React from 'react';
import getYoutubeId from 'get-youtube-id';
import styled from 'styled-components';
import PortableText from '@sanity/block-content-to-react';
import { serializers } from '../../../utils/portableTextSerializers';
import CustomGatsbyImage from '../../global/customGatsbyImage';

// Custom component styled to spread full width while retaining a correct height
const VideoContainer = styled.div`
  .youtubeContainer {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
  }

  .yVideo {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 1024px) {
    margin-bottom: -290px !important;
    .yVideo {
      width: 70%;
      height: 70%;
    }
  }
`;

const Testimonial = ({ ambassador, reverse = false }) => {
  const { name, role, image, _rawTestimony, video } = ambassador;
  const id = getYoutubeId(video) || '';
  const youtubeUrl = `https://www.youtube.com/embed/${id}`;

  return (
    <>
      <div
        data-name="testimonial"
        className={`flex items-center justify-between space-x-8 lg:space-x-20 ${
          reverse ? 'lg:flex-row-reverse lg:space-x-reverse' : 'lg:flex-row '
        }`}
      >
        {image && (
          <div className="relative flex-shrink-0 hidden lg:block">
            <div className="absolute z-0 w-full h-full right-5 bg-primary top-5" />
            <CustomGatsbyImage
              image={image}
              alt={name}
              customClasses={`relative z-10 border border-black w-64`}
            />
          </div>
        )}

        <div className="relative pt-10 lg:flex lg:items-center">
          <div className="relative lg:ml-10">
            <svg
              className="absolute top-0 left-0 text-indigo-200 transform -translate-x-8 -translate-y-24 opacity-50 h-36 w-36"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 144 144"
            >
              <path
                strokeWidth="2"
                d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
              />
            </svg>
            <blockquote className="relative">
              <div className="text-base leading-9 text-gray-700 sm:text-lg">
                <PortableText
                  blocks={_rawTestimony}
                  serializers={serializers}
                />
              </div>
              <footer className="mt-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0 lg:hidden">
                    {image && (
                      <CustomGatsbyImage
                        image={image}
                        alt={name}
                        customClasses="w-24 h-24 rounded-full"
                      />
                    )}
                  </div>
                  <div className="ml-4 lg:ml-0">
                    <div className="text-sm leading-6 text-gray-600 sm:text-base">
                      {name}
                    </div>
                    <div className="text-sm leading-6 text-gray-600 sm:text-base">
                      {role}
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
      {video && (
        <VideoContainer data-name="testimonial-video">
          <div className="youtubeContainer">
            <iframe
              title="Youtube Preview"
              className="yVideo"
              src={youtubeUrl}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
              allowFullScreen
            />
          </div>
        </VideoContainer>
      )}
    </>
  );
};

export default Testimonial;
