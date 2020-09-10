import React from 'react';
import { FaCampground } from 'react-icons/fa';

const VillageLabel = ({ customClasses, title }) => {
  return (
    <p
      className={`flex items-center px-2 py-1 space-x-1 rounded-lg bg-primary text-gray-600 ${customClasses}`}
    >
      <span>
        <FaCampground />
      </span>
      <span>{title}</span>
    </p>
  );
};

export default VillageLabel;
