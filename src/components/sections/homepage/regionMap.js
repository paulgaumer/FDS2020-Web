import React from 'react';
import { Link } from 'gatsby';
import { MdPlayArrow } from 'react-icons/md';
import SectionTitle from '../../sectionTitle';
import PdlMap from './vectorMap';
import { render } from 'react-dom';
import NET from 'vanta/dist/vanta.net.min';

class RegionMap extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }
  componentDidMount() {
    this.vantaEffect = NET({
      el: this.vantaRef.current,
      color: '#FF367F',
      backgroundColor: '#FDBF37',
      points: 10,
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
    // const departments = [
    //   { name: 'loire atlantique', link: '/loire-atlantique' },
    //   { name: 'maine et loire', link: '/maine-et-loire' },
    //   { name: 'mayenne', link: '/mayenne' },
    //   { name: 'sarthe', link: '/sarthe' },
    //   { name: 'vendée', link: '/vendee' },
    // ];
    return (
      <div style={{ height: '922px' }} ref={this.vantaRef}>
        Foreground content goes here
      </div>
      // <div style={{ height: '922px' }} ref={this.vantaRef}>
      //   <section id="banner" className={'banner' ? 'minor' : 'major fit'}>
      //     <div className="inner text-white">
      //       <header className="major">
      //         {/* <h1 style={{ textAlign: 'right' }}></h1> */}
      //       </header>
      //       <p style={{ float: 'right' }}>
      //         {
      //           <React.Fragment>
      //             Luminosity is an interdisciplinary research and development
      //             lab driven by a hand-selected team of high-performing students
      //             from Arizona State University. <br />
      //             <br />
      //             We design, build, and deploy novel solutions to address some
      //             of the world’s most pressing challenges.
      //           </React.Fragment>
      //         }
      //       </p>
      //     </div>
      //   </section>
      // </div>
      // <section
      //   className="text-white py-20"
      //   style={{ backgroundColor: '#1B133A' }}
      // >
      //   <div className="flex flex-col items-center">
      //     <SectionTitle text="Programme par département" color="white" />
      //   </div>
      //   <div id="map" className="flex space-x-10 justify-center">
      //     {/* Display clickable map */}
      //     <PdlMap background="map" backgroundHover="mapLink" width="w-1/2" />
      //     {/* Display departments list */}
      //     <div className=" flex flex-col">
      //       <ul className="flex flex-col space-y-2 bg-white py-4 px-4 rounded-md mt-16">
      //         {departments.map((department) => (
      //           <li key={department.name}>
      //             <Link
      //               to={department.link}
      //               className="capitalize text-white bg-mapLink rounded-full py-2 px-4 inline-flex items-center space-x-1 hover:bg-mapLinkHover"
      //             >
      //               <MdPlayArrow className="text-2xl" />
      //               <span>{department.name}</span>
      //             </Link>
      //           </li>
      //         ))}
      //       </ul>
      //     </div>
      //   </div>
      //   <div id="carousel"></div>
      // </section>
    );
  }
}

export default RegionMap;
