import React from 'react';
import { Link } from 'gatsby';
import { MdPlayArrow } from 'react-icons/md';
import SectionTitle from '../../sectionTitle';
import PdlMap from './vectorMap';

const RegionMap = () => {
  const departments = [
    { name: 'loire atlantique', link: '/loire-atlantique' },
    { name: 'maine et loire', link: '/maine-et-loire' },
    { name: 'mayenne', link: '/mayenne' },
    { name: 'sarthe', link: '/sarthe' },
    { name: 'vendée', link: '/vendee' },
  ];
  return (
    <section
      className="text-white py-20"
      style={{ backgroundColor: '#1B133A' }}
    >
      <div className="flex flex-col items-center">
        <SectionTitle text="Programme par département" color="white" />
      </div>
      <div id="map" className="flex space-x-10 justify-center">
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
  );
};

export default RegionMap;
