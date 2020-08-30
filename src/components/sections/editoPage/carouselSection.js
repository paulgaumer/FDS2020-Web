import React from 'react';
import styled from 'styled-components';
import SectionWrapper from '../../layout/sectionWrapper';
import SectionContainer from '../../layout/sectionContainer';
import SectionTitle from '../../global/sectionTitle';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const PicContainer = styled.div``;

const CarouselSection = ({ previousEditions }) => {
  return (
    <SectionWrapper>
      <SectionContainer customClasses="py-16 md:py-20">
        <SectionTitle text="Editions Précedentes" />
        <Carousel
          autoPlay
          infiniteLoop
          interval={3000}
          showStatus={false}
          swipeable={true}
          showThumbs={true}
          dynamicHeight={true}
        >
          {previousEditions.map((pic) => {
            return (
              <PicContainer key={pic.asset.id}>
                <img
                  src={pic.asset.url}
                  alt={pic.alt ? pic.alt : 'Edition précédente'}
                />
                {pic.caption && <p className="legend">{pic.caption}</p>}
              </PicContainer>
            );
          })}
        </Carousel>
      </SectionContainer>
    </SectionWrapper>
  );
};

export default CarouselSection;
