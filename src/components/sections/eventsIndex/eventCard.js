import React from 'react';
import { Link } from 'gatsby';
import moment from 'moment';
import { MdToday } from 'react-icons/md';
import CustomGatsbyImage from '../../global/customGatsbyImage';
import FeaturedLabel from '../../global/featuredLabel';
import { excerpt } from '../../../utils/excerpt';
import { formatDepartmentName } from '../../../utils/formatDepartmentName';
import { processDate } from '../../../utils/processDate';

const EventCard = ({ event }) => {
  const {
    description,
    image,
    startDate,
    endDate,
    slug,
    title,
    theme,
    featured,
    department,
    // audience,
  } = event;
  const dpt = formatDepartmentName(department.name);
  moment.locale('fr');

  return (
    <Link to={`/${dpt}/${slug.current}`} className="max-w-1/3 ">
      <div className="overflow-hidden rounded-md shadow ">
        <div data-name="image" style={{ height: '160px' }} className="relative">
          {image && <CustomGatsbyImage image={image} customClasses="h-full" />}
          {featured && (
            <FeaturedLabel customClasses="absolute top-5 left-5 text-sm" />
          )}
        </div>
        <div
          data-name="content"
          className="px-4 pt-8 pb-6 text-gray-500 bg-white"
        >
          <h4 className="text-xl font-bold text-gray-700">{title}</h4>
          <p className="text-sm leading-tight text-purple-400">
            - {theme[0].name}
          </p>
          {/* <p>{audience.name}</p> */}
          <p className="pt-6">{excerpt(description[0].children[0].text)}</p>
          <div className="flex items-center pt-6 space-x-1 text-sm">
            <span className="text-base">
              <MdToday />
            </span>
            <span>{processDate(startDate.local, endDate.local)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
