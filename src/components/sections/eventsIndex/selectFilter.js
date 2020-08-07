import React from 'react';

const SelectFilter = () => {
  // const [isSelected, setIsSelected] = useState(false);

  return (
    <div>
      <select
        id="location"
        className="block w-full py-2 pl-3 pr-10 mt-1 text-base leading-6 border-gray-300 form-select focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
      >
        <option selected>Tout public</option>
        <option>A partir de 7 ans</option>
        <option>A partir de 15 ans</option>
      </select>
    </div>
  );
};

export default SelectFilter;
