import React from 'react';
import { Link } from 'gatsby';
import { MdPlayArrow } from 'react-icons/md';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';
import styled from 'styled-components';
import tw from 'twin.macro';
import SectionContainer from '../../layout/sectionContainer';
import PdlMap from './vectorMap';
import SectionTitle from '../../global/sectionTitle';
import MapCarousel from './mapCarousel';

class RegionMap extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }
  componentDidMount() {
    this.vantaEffect = NET({
      el: this.vantaRef.current,
      THREE: THREE,
      color: '#13F0BA',
      backgroundColor: '#23153D',
      points: 14,
      maxDistance: 20,
      mouseControls: true,
      touchControls: true,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
    });
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }

  render() {
    const departments = [
      { name: 'loire atlantique', link: '/loire-atlantique' },
      { name: 'maine et loire', link: '/maine-et-loire' },
      { name: 'mayenne', link: '/mayenne' },
      { name: 'sarthe', link: '/sarthe' },
      { name: 'vendée', link: '/vendee' },
    ];

    const LinksList = styled.ul`
      background: rgba(255, 255, 255, 0.9);
      box-shadow: 6px 6px 15px rgba(255, 255, 255, 0.3);
    `;

    return (
      <div
        data-name="vanta wrapper"
        style={{ height: '100%' }}
        ref={this.vantaRef}
      >
        <div
          style={{ position: 'relative', top: '-50px' }}
          id="departmentsMap"
        />
        <SectionContainer customClasses="z-20 pt-16 pb-0 md:py-20 lg:py-28">
          <div className="flex flex-col items-center">
            <SectionTitle text="Programme par département" color="white" />
          </div>
          <div
            id="map"
            className="flex flex-col-reverse items-center justify-center -mt-10 space-x-20 md:-mt-0 lg:mr-20 lg:items-start lg:flex-row"
          >
            {/* Display clickable map */}
            <PdlMap
              background="map"
              backgroundHover="mapLink"
              width="w-full md:w-3/4 lg:w-2/3"
            />
            {/* Display departments list */}
            <LinksList className="flex-wrap justify-center hidden px-2 py-4 space-x-6 rounded-md lg:px-4 lg:space-x-0 md:flex lg:mt-16 lg:space-y-6 lg:flex-col">
              {departments.map((department) => (
                <li key={department.name} className="py-3 lg:py-0">
                  <Link
                    to={department.link}
                    className="inline-flex items-center px-4 py-2 space-x-1 text-white uppercase rounded-full bg-mapLink hover:bg-mapLinkHover"
                  >
                    <MdPlayArrow className="text-2xl" />
                    <span className="md:text-sm xl:text-base">
                      {department.name}
                    </span>
                  </Link>
                </li>
              ))}
            </LinksList>
          </div>
          <div id="links-carousel" className="">
            <MapCarousel />
          </div>
        </SectionContainer>
        {/* BACKGROUND FILTER */}
        {/* ****************** */}
        <div
          className="absolute inset-0 z-10"
          style={{ background: '#000D30', opacity: 0.2 }}
        ></div>
      </div>
    );
  }
}

export default RegionMap;
