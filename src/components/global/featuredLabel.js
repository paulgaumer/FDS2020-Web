import React from 'react';
import { MdFavorite } from 'react-icons/md';

const FeaturedLabel = ({ customClasses }) => {
  return (
    <p
      className={`flex items-center px-2 py-1 space-x-1 text-white rounded-lg bg-featured ${customClasses}`}
    >
      <span>
        <MdFavorite />
      </span>
      <span>Coup de coeur</span>
    </p>
  );
};

export default FeaturedLabel;
