import React, { useState } from 'react';

const AudienceFilter = ({ setFilter }) => {
  const baseAudience = 3;
  const [allAudiences, setAllAudiences] = useState(true);
  const [selectedAudience, setSelectedAudience] = useState(baseAudience);

  const handleSelect = (e) => {
    const value = parseInt(e.target.value);
    setAllAudiences(false);
    setSelectedAudience(value);
    setFilter(value);
  };

  const handleReset = () => {
    setAllAudiences(true);
    setSelectedAudience(baseAudience);
    setFilter(baseAudience);
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center">
        <input
          id="tous-ages"
          type="checkbox"
          value="tous"
          checked={allAudiences}
          onChange={handleReset}
          className="w-4 h-4 transition duration-150 ease-in-out text-secondary form-checkbox"
        />
        <label htmlFor="tous-dates" className="block ml-2 text-sm leading-5">
          Tout age
        </label>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="range"
          min={`${baseAudience}`}
          max="25"
          value={selectedAudience}
          id="audienceRange"
          onInput={(e) => handleSelect(e)}
          onChange={(e) => handleSelect(e)}
        />
        <p className="text-base leading-5">{selectedAudience} ans</p>
      </div>
    </div>
  );
};

export default AudienceFilter;
