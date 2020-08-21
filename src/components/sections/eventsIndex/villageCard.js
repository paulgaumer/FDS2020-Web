import React from 'react';
import { Link } from 'gatsby';
import CustomGatsbyImage from '../../global/customGatsbyImage';
import { MdToday } from 'react-icons/md';
import { excerpt } from '../../../utils/excerpt';
import { formatDepartmentName } from '../../../utils/formatDepartmentName';

const VillageCard = ({ village, department, scolaires }) => {
  const { description, image, startDate, endDate, slug, title } = village;
  const dpt = formatDepartmentName(department);

  return (
    <Link to={`/${dpt}/${slug.current}`}>
      <div className="shadow">
        <div
          data-name="image"
          style={{ height: '160px' }}
          className="relative "
        >
          {image && <CustomGatsbyImage image={image} customClasses="h-full" />}
          <div
            data-name="title"
            className={`absolute z-10 px-6 py-2 font-bold text-gray-700 -left-4 ${
              scolaires ? 'bg-edu' : 'bg-primary'
            }`}
            style={{ bottom: '-23px' }}
          >
            <h4 className="text-xl">{title}</h4>
          </div>
        </div>
        <div data-name="content" className="px-4 pt-16 pb-6 bg-white">
          <p>{excerpt(description[0].children[0].text)}</p>
          <div className="flex items-center pt-6 space-x-1 text-sm">
            <span className="text-base">
              <MdToday />
            </span>
            <span>
              Du {startDate.local} au {endDate.local}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VillageCard;
