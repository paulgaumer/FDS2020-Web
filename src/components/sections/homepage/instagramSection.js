import React, { useState, useEffect } from 'react';
import SectionWrapper from '../../layout/sectionWrapper';
import SectionContainer from '../../layout/sectionContainer';
import InstagramIcon from '../../icons/instagram';

// Hook fetch instagram pics from netlify serverless function
const url = `/.netlify/functions/instagramById`;
function useInstagram() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(url)
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
    <a href={pic.url} target="_blank">
      <img src={pic.thumbnail} alt={pic.caption} className="rounded-lg" />
    </a>
  );
};

const InstagramSection = ({ instagramTitle }) => {
  // number of pics limited to 10 in the netlify function
  const instaPics = useInstagram();

  // Wait for the instagram pictures to load
  const [isLoading, setIsLoading] = useState(true);
  const [gridPics, setGridPics] = useState([]);

  useEffect(() => {
    if (instaPics.length > 0) {
      const pics = [
        [instaPics[0], instaPics[1], instaPics[2], instaPics[3]],
        [instaPics[4], instaPics[5]],
        [instaPics[6], instaPics[7], instaPics[8], instaPics[9]],
      ];
      setGridPics(pics);
      setIsLoading(false);
    }
  }, [instaPics]);

  return (
    <SectionWrapper backgroundColor="bg-secondary">
      <SectionContainer customClasses="pt-10 pb-20 md:py-28">
        {!isLoading && (
          <>
            {/* Mobile Grid Start */}
            <div className="md:hidden">
              <div className="flex flex-col items-center justify-center col-span-2 mb-6 space-y-2 font-bold text-purple-900 item-text-content">
                <div className="flex items-center justify-center space-x-3">
                  <h2 className="text-4xl">#FDS2020</h2>
                  <a href="https://instagram.com">
                    <InstagramIcon customClasses="w-10 h-10 text-featured" />
                  </a>
                </div>
                <p className="text-2xl text-center">{instagramTitle}</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {instaPics.slice(0, 6).map((pic) => {
                  return (
                    <a
                      href={pic.url}
                      target="_blank"
                      key={pic.id}
                      className="col-span-1"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={pic.thumbnail}
                        alt={pic.caption}
                        className="rounded-lg"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
            {/* Mobile Grid End */}

            {/* Desktop Grid Start */}
            <div className="hidden gap-5 md:grid md:grid-cols-4 lg:grid-rows-3">
              {gridPics[0].map((pic) => (
                <InstaPic pic={pic} key={pic.id} />
              ))}
              <InstaPic pic={gridPics[1][0]} />
              <div className="flex-col items-center justify-center hidden col-span-2 px-10 space-y-2 font-bold text-purple-900 md:flex item-text-content">
                <h2 className="text-4xl">#FDS2020</h2>
                <p className="text-2xl text-center">{instagramTitle}</p>
                <a href="https://instagram.com">
                  <InstagramIcon customClasses="w-10 h-10 text-featured transform hover:scale-105" />
                </a>
              </div>
              <InstaPic pic={gridPics[1][1]} />
              {gridPics[2].map((pic) => (
                <InstaPic pic={pic} key={pic.id} />
              ))}
            </div>
            {/* Desktop Grid End */}
          </>
        )}
      </SectionContainer>
    </SectionWrapper>
  );
};

export default InstagramSection;
