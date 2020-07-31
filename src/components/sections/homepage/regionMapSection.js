import React from 'react';
import { Link } from 'gatsby';
import { MdPlayArrow } from 'react-icons/md';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';
import styled from 'styled-components';
import tw from 'twin.macro';
import SectionContainer from '../../layout/sectionContainer';
import PdlMap from './vectorMap';
import SectionTitle from '../../sectionTitle';
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
      color: '#FF367F',
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
      ${tw`flex flex-col space-y-3 py-4 px-4 rounded-md mt-16`}
    `;

    return (
      <div
        data-name="vanta wrapper"
        style={{ height: '100%' }}
        ref={this.vantaRef}
      >
        <SectionContainer customClasses="z-20 py-28">
          <div className="flex flex-col items-center">
            <SectionTitle text="Programme par département" color="white" />
          </div>
          <div id="map" className="flex space-x-10 justify-center -mt-10">
            {/* Display clickable map */}
            <PdlMap background="map" backgroundHover="mapLink" width="w-1/2" />
            {/* Display departments list */}
            <div className=" flex flex-col">
              <LinksList>
                {departments.map((department) => (
                  <li key={department.name}>
                    <Link
                      to={department.link}
                      className="uppercase text-white bg-mapLink rounded-full py-2 px-4 inline-flex items-center space-x-1 hover:bg-mapLinkHover"
                    >
                      <MdPlayArrow className="text-2xl" />
                      <span>{department.name}</span>
                    </Link>
                  </li>
                ))}
              </LinksList>
            </div>
          </div>
          <div id="links-carousel">
            <MapCarousel />
          </div>

          {/* BACKGROUND FILTER */}
          {/* ****************** */}
        </SectionContainer>
        <div
          className="absolute inset-0 z-10"
          style={{ background: '#000D30', opacity: 0.2 }}
        ></div>
      </div>
    );
  }
}

export default RegionMap;