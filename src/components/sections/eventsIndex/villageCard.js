import React from 'react';
import { Link } from 'gatsby';
import CustomGatsbyImage from '../../global/customGatsbyImage';
import { MdToday } from 'react-icons/md';
import { excerpt } from '../../../utils/excerpt';
import { formatDepartmentName } from '../../../utils/formatDepartmentName';
import { processDate } from '../../../utils/processDate';
import CanceledLabel from '../../global/canceledLabel';

const VillageCard = ({ village, department, scolaires }) => {
  const { description, image, timeSlots, slug, title, eventCanceled } = village;
  const dpt = formatDepartmentName(department);

  // Rich text can contain images before text, which excerpt can't process. Check for the presence of text
  const showExcerpt = (richText) => {
    if (richText[0].children[0] !== undefined) {
      return richText[0].children[0].text
        ? excerpt(richText[0].children[0].text)
        : excerpt(richText[1].children[0].text);
    } else {
      return excerpt(richText[1].children[0].text);
    }
  };
  return (
    <Link to={`/${dpt}/${slug.current}`} className="col-span-1">
      <div className="shadow">
        <div data-name="image" style={{ height: '160px' }} className="relative">
          {image && <CustomGatsbyImage image={image} customClasses="h-full" />}
          {eventCanceled && (
            <div className="absolute flex w-full top-5 left-5">
              <CanceledLabel customClasses="uppercase font-bold" />
            </div>
          )}
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
          <p>{showExcerpt(description)}</p>
          <div className="flex items-center pt-6 space-x-1 text-sm">
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
      </div>
    </Link>
  );
};

export default VillageCard;
