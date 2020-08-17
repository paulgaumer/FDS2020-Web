import React, { useState, useEffect } from 'react';

const SelectDepartmentFilter = ({ list, getValue }) => {
  const defaultValue = 'all';
  const [selectedItem, setSelectedItem] = useState(defaultValue);

  const handleClick = (e) => {
    setSelectedItem(e.target.id);
  };

  useEffect(() => {
    getValue(selectedItem);
  }, [selectedItem, getValue]);

  return (
    <div>
      <select
        id="location"
        className="block w-full py-2 pl-3 pr-10 mt-1 text-base leading-6 border-gray-300 form-select focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
        defaultValue={selectedItem}
      >
        <option id="all" onClick={handleClick}>
          Tous
        </option>
        {list.map(({ node }) => {
          return (
            <option
              // selected={selectedItem === node.id}
              key={node.id}
              onClick={handleClick}
              id={node.id}
            >
              {node.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectDepartmentFilter;
