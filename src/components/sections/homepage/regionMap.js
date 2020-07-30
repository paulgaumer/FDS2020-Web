import React from 'react';
import { Link } from 'gatsby';
import { MdPlayArrow } from 'react-icons/md';
import PdlMap from './vectorMap';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';
import SectionTitle from '../../sectionTitle';

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

    return (
      <div style={{ height: '800px' }} ref={this.vantaRef}>
        <section className="text-white pt-20 relative">
          <div className="flex flex-col items-center">
            <SectionTitle text="Programme par département" color="white" />
          </div>
          <div id="map" className="flex space-x-10 justify-center -mt-10">
            {/* Display clickable map */}
            <PdlMap background="map" backgroundHover="mapLink" width="w-1/2" />
            {/* Display departments list */}
            <div className=" flex flex-col">
              <ul className="flex flex-col space-y-2 bg-white py-4 px-4 rounded-md mt-16">
                {departments.map((department) => (
                  <li key={department.name}>
                    <Link
                      to={department.link}
                      className="capitalize text-white bg-mapLink rounded-full py-2 px-4 inline-flex items-center space-x-1 hover:bg-mapLinkHover"
                    >
                      <MdPlayArrow className="text-2xl" />
                      <span>{department.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div id="carousel"></div>
        </section>
      </div>
    );
  }
}

export default RegionMap;
