import React from 'react';
import urlBuilder from '@sanity/image-url';
import getYoutubeId from 'get-youtube-id';
import styled from 'styled-components';

// Custom component styled to spread full width while retaining a correct height
const YoutubeContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;

  & > .yVideo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const urlFor = (source) =>
  urlBuilder({
    projectId: process.env.GATSBY_SANITY_PROJECT_ID,
    dataset: 'production',
  }).image(source);

// Used to transcribe and style Sanity's Portable Text format
export const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        case 'h2':
          return (
            <h2 className="mt-20 mb-10 text-3xl text-gray-700">
              {props.children}
            </h2>
          );
        case 'h3':
          return (
            <h3 className="my-10 text-2xl text-gray-700">{props.children}</h3>
          );
        case 'h4':
          return (
            <h4 className="mt-8 mb-6 text-xl text-gray-700">
              {props.children}
            </h4>
          );
        default:
          return (
            <p className="mb-6 leading-relaxed tracking-wide">
              {props.children}
            </p>
          );
      }
    },
    youtube(props) {
      const id = getYoutubeId(props.node.url);
      const url = `https://www.youtube.com/embed/${id}`;
      return (
        <YoutubeContainer className="flex justify-center my-20">
          <iframe
            title="Youtube Preview"
            className="yVideo"
            src={url}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
            allowFullScreen
          />
        </YoutubeContainer>
      );
    },
    mainImage(props) {
      return (
        <figure className="flex flex-col items-center justify-center my-10">
          <img
            src={urlFor(props.node.asset).url()}
            alt={`${props.node.alt ? props.node.alt : 'illustration'}`}
            className="w-full rounded-sm md:w-1/2"
          />
          {props.node.caption && (
            <figcaption className="pt-4 text-sm italic text-gray-500">
              - {props.node.caption} -
            </figcaption>
          )}
        </figure>
      );
    },
  },
  marks: {
    link: ({ children, mark }) => (
      <a
        href={mark.href}
        target="_blank"
        rel="noopener noreferrer"
        className="border-b-4 border-primary hover:text-primary"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => <span className="font-bold">{children}</span>,
    em: ({ children }) => <span className="italic">{children}</span>,
  },
  listItem: (props) => {
    switch (props.node.listItem) {
      case 'bullet': {
        return (
          <li className="text-lg list-disc list-inside">{props.children}</li>
        );
      }
      case 'number': {
        return (
          <li className="text-lg list-decimal list-inside">{props.children}</li>
        );
      }
      default: {
        return (
          <li className="text-lg list-disc list-inside">{props.children}</li>
        );
      }
    }
  },
};
