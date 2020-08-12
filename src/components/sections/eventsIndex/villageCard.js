import React from 'react';
import { Link } from 'gatsby';
import CustomGatsbyImage from '../../global/customGatsbyImage';
import { excerpt } from '../../../utils/excerpt';
import { formatDepartmentName } from '../../../utils/formatDepartmentName';

const VillageCard = ({ village, department }) => {
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
          <CustomGatsbyImage image={image} customClasses="h-full" />
          <div
            data-name="title"
            className="absolute z-10 px-6 py-2 font-bold text-gray-700 bg-primary -left-4"
            style={{ bottom: '-23px' }}
          >
            <h4 className="text-xl">{title}</h4>
          </div>
        </div>
        <div data-name="content" className="px-4 pt-16 pb-6 bg-white">
          <p>{excerpt(description)}</p>
          <div className="pt-6 text-sm">
            <span></span>
            <span>
              Du {startDate} au {endDate}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VillageCard;
