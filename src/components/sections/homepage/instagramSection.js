import React from 'react';
import styled from 'styled-components';
import SectionWrapper from '../../layout/sectionWrapper';
import SectionContainer from '../../layout/sectionContainer';
import InstagramIcon from '../../icons/instagram';

const InstaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    'instaPic1 instaPic2 instaPic3 instaPic4 instaPic5 instaPic6 instaPic7'
    'instaPic8 instaPic9 gridText gridText gridText instaPic10 instaPic11'
    'instaPic12 instaPic13 instaPic14 instaPic15 instaPic16 instaPic17 instaPic18';
  column-gap: 25px;
  row-gap: 20px;
  align-items: center;

  .item-text-content {
    grid-area: gridText;
  }
  .item-picture-1 {
    grid-area: instaPic1;
  }
  /* .item-picture-2 {
    grid-area: instaPic2;
  }
  .item-picture-3 {
    grid-area: instaPic3;
  }
  .item-picture-4 {
    grid-area: instaPic4;
  }
  .item-picture-5 {
    grid-area: instaPic5;
  }
  .item-picture-6 {
    grid-area: instaPic6;
  }
  .item-picture-7 {
    grid-area: instaPic7;
  }
  .item-picture-8 {
    grid-area: instaPic8;
  }
  .item-picture-9 {
    grid-area: instaPic9;
  }
  .item-picture-10 {
    grid-area: instaPic10;
  }
  .item-picture-11 {
    grid-area: instaPic11;
  }
  .item-picture-12 {
    grid-area: instaPic12;
  }
  .item-picture-13 {
    grid-area: instaPic13;
  }
  .item-picture-14 {
    grid-area: instaPic14;
  }
  .item-picture-15 {
    grid-area: instaPic15;
  }
  .item-picture-16 {
    grid-area: instaPic16;
  }
  .item-picture-17 {
    grid-area: instaPic17;
  }
  .item-picture-18 {
    grid-area: instaPic18;
  } */
`;

const InstagramSection = () => {
  const picturesNumber = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
  ];
  return (
    <SectionWrapper backgroundColor="bg-secondary">
      <SectionContainer customClasses="py-20">
        <InstaGrid>
          <div className="item-text-content text-purple-900 flex flex-col items-center justify-center space-y-2 px-10 font-bold">
            <h2 className="text-4xl">#FDS2020</h2>
            <p className="text-2xl text-center">
              Partagez votre Fête de la Science sur notre communauté
            </p>
            <a href="https://instagram.com">
              <InstagramIcon customClasses="w-10 h-10 text-featured" />
            </a>
          </div>
          {picturesNumber.map((nb) => {
            return (
              <div className={`item-picture-${nb}`}>
                <img
                  src="http://placekitten.com/200/200"
                  alt="instagram"
                  className="rounded-sm"
                />
              </div>
            );
          })}
        </InstaGrid>
      </SectionContainer>
    </SectionWrapper>
  );
};

export default InstagramSection;
