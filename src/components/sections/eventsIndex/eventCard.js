import React from 'react';
import { Link } from 'gatsby';
import CustomGatsbyImage from '../../global/customGatsbyImage';
import { excerpt } from '../../../utils/excerpt';
import { formatDepartmentName } from '../../../utils/formatDepartmentName';

const EventCard = ({ event, department }) => {
  const { description, image, startDate, endDate, slug } = event;
  const dpt = formatDepartmentName(department);

  return (
    <div className="col-span-1 shadow">
      <Link to={`/${dpt}/${slug.current}`} className="max-w-1/3">
        <div data-name="image" style={{ height: '160px' }} className="">
          <CustomGatsbyImage image={image} />
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

export default EventCard;
