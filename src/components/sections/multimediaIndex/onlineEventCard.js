import React from 'react';
import { Link } from 'gatsby';
import moment from 'moment';
import { MdToday } from 'react-icons/md';
import { IoIosPeople } from 'react-icons/io';
import CustomGatsbyImage from '../../global/customGatsbyImage';
import { excerpt } from '../../../utils/excerpt';
import { processDate } from '../../../utils/processDate';

const OnlineEventCard = ({ event }) => {
  const { description, image, timeSlots, slug, title, theme, audience } = event;
  moment.locale('fr');

  return (
    <Link to={`/multimedia/${slug.current}`} className="max-w-1/3 ">
      <div
        data-name="event-card"
        className="overflow-hidden rounded-md shadow "
      >
        <div data-name="image" style={{ height: '200px' }} className="relative">
          {image && <CustomGatsbyImage image={image} customClasses="h-full" />}
        </div>
        <div
          data-name="content"
          className="px-4 pt-8 pb-6 text-gray-500 bg-white"
        >
          <div className="flex justify-between">
            <div>
              <h4 className="text-xl font-bold text-gray-700">{title}</h4>
              <p className="text-sm leading-tight text-purple-400">
                - {theme[0].name}
              </p>
            </div>
            <div className="flex items-center pr-2 space-x-2">
              <span
                className={`h-7 w-7 p-1 flex items-center justify-center text-2xl text-white rounded-full bg-primary`}
              >
                <IoIosPeople />
              </span>
              <span>{audience[0].name}</span>
            </div>
          </div>

          <p className="pt-6">{excerpt(description[0].children[0].text)}</p>
          {timeSlots.length > 0 && (
            <div className="pt-6">
              <div className="flex items-center space-x-1 text-sm">
                <span className="text-base">
                  <MdToday />
                </span>
                {timeSlots.length > 1 && <span>Horaires Multiples</span>}
                {timeSlots.length === 1 && (
                  <div>
                    <span>{processDate(timeSlots[0])}</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default OnlineEventCard;
