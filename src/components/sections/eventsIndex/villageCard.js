import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { excerpt } from '../../../utils/excerpt';
import { formatDepartmentName } from '../../../utils/formatDepartmentName';

const VillageCard = ({ village, department }) => {
  const { description, image, startDate, endDate, slug } = village;
  const dpt = formatDepartmentName(department);

  return (
    <div className="col-span-1 shadow">
      <Link to={`/${dpt}/${slug.current}`} className="max-w-1/3">
        <div data-name="image" style={{ height: '160px' }} className="relative">
          <Img
            fluid={image.asset.fluid}
            alt={image.alt}
            className="object-cover h-full"
            imgStyle={{ objectPosition: 'center' }}
          />
          <div
            data-name="title"
            className="absolute z-10 px-6 py-2 font-bold text-gray-700 bg-primary -left-4"
            style={{ bottom: '-23px' }}
          >
            <h4 className="text-xl">{village.title}</h4>
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
      </Link>
    </div>
  );
};

export default VillageCard;
