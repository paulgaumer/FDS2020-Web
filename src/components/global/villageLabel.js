import React from 'react';
import { FaCampground } from 'react-icons/fa';

const VillageLabel = ({ customClasses, title }) => {
  return (
    <div
      className={`inline-flex sm:flex lg:inline-flex xl:flex items-center px-2 py-1 space-x-1 rounded-lg bg-primary text-gray-600 ${customClasses}`}
    >
      <span>
        <FaCampground />
      </span>
      <span>{title}</span>
    </div>
  );
};

export default VillageLabel;
