import React, { useState, useEffect } from 'react';

const SelectFilter = ({ list, getValue }) => {
  const defaultValue = list[0].node.id;
  const [selectedItem, setSelectedItem] = useState(defaultValue);

  const handleChange = (e) => {
    setSelectedItem(e.target.value);
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
        onChange={handleChange}
      >
        {list.map(({ node }) => {
          return (
            <option key={node.id} id={node.id} value={node.id}>
              {node.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectFilter;
