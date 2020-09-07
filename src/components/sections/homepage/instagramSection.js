import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SectionWrapper from '../../layout/sectionWrapper';
import SectionContainer from '../../layout/sectionContainer';
import InstagramIcon from '../../icons/instagram';
import Spinner from '../../global/spinner';

// To force square format on pictures while keeping responsive grid
const InstaGrid = styled.div`
  grid-auto-rows: 1fr;
  &::before {
    content: '';
    width: 0;
    padding-bottom: 100%;
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }
  & > *:first-child {
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }
`;

// ***********************************************************
// ***********************************************************
// Hook fetch instagram pics from netlify serverless function
const url = `/.netlify/functions/instagramByHashtag`;

function useInstagram(hashtag) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({ hashtag }),
    })
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);
  return posts;
}

// InstaPic Component
const InstaPic = ({ pic }) => {
  return (
    <a
      href={pic.permalink}
      target="_blank"
      rel="noopener noreferrer"
      alt={`Instagram picture`}
    >
      <div
        className="w-full h-full rounded"
        style={{
          backgroundImage: `url(${pic.media_url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
    </a>
  );
};

const InstagramSection = ({ instagramTitle, instagramSettings }) => {
  const { instagramHashtag, instagramLink } = instagramSettings;

  // Number of pics limited to 10 in the netlify function
  const instaPics = instagramHashtag ? useInstagram(instagramHashtag) : [];

  // Wait for the instagram pictures to load
  const [isLoading, setIsLoading] = useState(true);
  const [gridPics, setGridPics] = useState([]);

  useEffect(() => {
    if (instaPics && instaPics.length > 0) {
      const pics = [
        [instaPics[0], instaPics[1], instaPics[2], instaPics[3]],
        [instaPics[4], instaPics[5]],
        [instaPics[6], instaPics[7], instaPics[8], instaPics[9]],
      ];
      setGridPics(pics);
      setIsLoading(false);
    }
  }, [instaPics]);

  // return the section only if a hashtag is specified
  return instagramHashtag ? (
    <SectionWrapper backgroundColor="bg-secondary">
      <SectionContainer customClasses="pt-10 pb-20 md:py-28">
        {isLoading && <Spinner />}
        {!isLoading && instaPics.length > 0 && (
          <>
            {/* Mobile Grid Start */}
            <div className="md:hidden">
              <div className="flex flex-col items-center justify-center col-span-2 mb-6 space-y-2 font-bold text-purple-900 item-text-content">
                <div className="flex items-center justify-center px-2 space-x-3">
                  <h2 className="text-2xl uppercase md:text-4xl">
                    #{instagramHashtag}
                  </h2>
                  <a href={instagramLink} aria-label="Visiter Instagram">
                    <InstagramIcon customClasses="w-8 h-8 md:w-10 md:h-10 text-featured" />
                  </a>
                </div>
                <p className="text-xl text-center md:text-2xl">
                  {instagramTitle}
                </p>
              </div>
              <InstaGrid className="grid grid-cols-2 gap-2">
                {instaPics.slice(0, 6).map((pic) => {
                  return <InstaPic pic={pic} key={pic.id} />;
                })}
              </InstaGrid>
            </div>
            {/* Mobile Grid End */}

            {/* Desktop Grid Start */}
            <InstaGrid className="hidden gap-5 md:grid md:grid-cols-4">
              {gridPics[0].map((pic) => {
                return <InstaPic pic={pic} key={pic.id} />;
              })}
              <InstaPic pic={gridPics[1][0]} />
              <div className="flex-col items-center justify-center hidden col-span-2 px-10 space-y-2 font-bold text-purple-900 md:flex item-text-content">
                <h2 className="text-4xl uppercase">#{instagramHashtag}</h2>
                <p className="text-2xl text-center">{instagramTitle}</p>
                <a href={instagramLink}>
                  <InstagramIcon customClasses="w-10 h-10 text-featured transform hover:scale-105" />
                </a>
              </div>
              <InstaPic pic={gridPics[1][1]} />
              {gridPics[2].map((pic) => (
                <InstaPic pic={pic} key={pic.id} />
              ))}
            </InstaGrid>
            {/* Desktop Grid End */}
          </>
        )}
      </SectionContainer>
    </SectionWrapper>
  ) : null;
};

export default InstagramSection;
