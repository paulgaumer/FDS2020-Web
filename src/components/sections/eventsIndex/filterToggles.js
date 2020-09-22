import React, { useState, useEffect } from 'react';
import { excerpt } from '../../../utils/excerpt';

const FilterToggles = ({ list, getValues }) => {
  // Initialize the list of themes and states
  const itemsList = list.map(({ node }) => {
    return {
      id: node.id,
      name: node.name,
      isChecked: false,
    };
  });

  // Initialize selected items
  const [items, setItems] = useState(itemsList);
  const [checkedItems, setCheckedItems] = useState([]);

  const handleClick = (id) => {
    // Update isChecked state
    setItems(
      items.map((i) => {
        if (i.id === id)
          return {
            ...i,
            isChecked: !i.isChecked,
          };
        return i;
      })
    );
    // Update the list of selected items
    setCheckedItems(
      checkedItems.includes(id)
        ? checkedItems.filter((el) => el !== id)
        : [...checkedItems, id]
    );
  };

  // Listener to send checked items list to parent
  useEffect(() => {
    getValues(checkedItems);
  }, [checkedItems]);

  return (
    <ul data-name="toggles" className="flex flex-wrap">
      {items.map((item) => {
        return (
          <li
            role="checkbox"
            tabIndex="0"
            aria-checked={item.isChecked}
            className={`relative inline-flex items-center justify-center flex-shrink-0 px-3 py-1 mb-2 mr-3 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer focus:outline-none text-sm ${
              item.isChecked
                ? 'bg-secondary text-orange-900'
                : 'text-indigo-500 bg-indigo-100'
            }`}
            id={item.id}
            key={item.id}
            onClick={() => handleClick(item.id)}
          >
            <span className="hidden sm:inline-block">{item.name}</span>
            <span className="sm:hidden">{excerpt(item.name, 40)}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default FilterToggles;
