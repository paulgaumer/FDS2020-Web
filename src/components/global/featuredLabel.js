import React from 'react';
import { MdFavorite } from 'react-icons/md';

const FeaturedLabel = ({ customClasses }) => {
  return (
    <div
      className={`inline-flex sm:flex lg:inline-flex xl:flex items-center px-2 py-1 space-x-1 text-white rounded-lg bg-featured ${customClasses}`}
    >
      <span>
        <MdFavorite />
      </span>
      <span>Coup de coeur</span>
    </div>
  );
};

export default FeaturedLabel;
