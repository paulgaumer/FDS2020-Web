import React from 'react';
import styled from 'styled-components';
import SectionWrapper from '../../layout/sectionWrapper';
import SectionContainer from '../../layout/sectionContainer';
import SectionTitle from '../../global/sectionTitle';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const PicsContainer = styled.div`
  height: 300px;

  .carousel-wrapper,
  .carousel,
  .carousel > .slider-wrapper,
  .carousel > .slider-wrapper > .slider {
    height: 100%;
  }

  .image-container {
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  @media (min-width: 768px) {
    height: 400px;
  }
  @media (min-width: 1024px) {
    height: 600px;
  }
`;

const CarouselSection = ({ previousEditions }) => {
  return (
    <SectionWrapper backgroundColor="bg-white">
      <SectionContainer customClasses="py-16 md:py-20">
        <SectionTitle text="Editions Précedentes" />
        <PicsContainer>
          <Carousel
            autoPlay
            infiniteLoop
            interval={3000}
            showStatus={false}
            swipeable={true}
            showThumbs={false}
            // dynamicHeight={true}
            className="carousel-wrapper"
          >
            {previousEditions.map((pic) => {
              return (
                // <PicContainer key={pic.asset.id}>
                //   <img
                //     src={pic.asset.url}
                //     alt={pic.alt ? pic.alt : 'Edition précédente'}
                //   />
                //   {pic.caption && <p className="legend">{pic.caption}</p>}
                // </PicContainer>

                <div
                  className="image-container"
                  style={{
                    backgroundImage: `url(${pic.asset.url})`,
                  }}
                >
                  {pic.caption && <p className="legend">{pic.caption}</p>}
                </div>
              );
            })}
          </Carousel>
        </PicsContainer>
      </SectionContainer>
    </SectionWrapper>
  );
};

export default CarouselSection;
