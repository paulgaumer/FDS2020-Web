import React from 'react';
import { FaBan } from 'react-icons/fa';

const CanceledLabel = ({ customClasses }) => {
  return (
    <div
      className={`flex items-center justify-center px-2 py-1 space-x-2 text-mapBackground rounded-lg bg-white border-2 border-mapBackground w-full mr-10 ${customClasses}`}
    >
      <span>
        <FaBan />
      </span>
      <span className=""> événement annulé</span>
    </div>
  );
};

export default CanceledLabel;
