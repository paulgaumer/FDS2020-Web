import React, { useState, useEffect } from 'react';

const InputField = ({ item, handleChange }) => {
  return (
    <div className="flex items-center">
      <input
        id={item.id}
        type="checkbox"
        value={item.name}
        checked={item.isChecked}
        onChange={() => handleChange(item.id)}
        className="w-4 h-4 transition duration-150 ease-in-out text-secondary form-checkbox"
      />
      <label
        id={item.id}
        htmlFor={item.id}
        className="block ml-2 text-sm leading-5"
      >
        {item.name}
      </label>
    </div>
  );
};

const CheckboxFilter = ({ list, getValues }) => {
  // Initialize the list of themes and states
  const itemsList = list.map(({ node }) => {
    return {
      id: node.id,
      name: node.name,
      isChecked: false,
    };
  });
  const [items, setItems] = useState(itemsList);

  // Initialize selected items
  const [checkedItems, setCheckedItems] = useState([]);

  // Initialize reset
  const [resetItems, setResetItems] = useState(true);

  // Handle checkbox change
  const handleChange = (id) => {
    // Update isChecked state
    setItems(
      items.map((i) => {
        if (i.id === id) return { ...i, isChecked: !i.isChecked };
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

  const handleReset = () => {
    setResetItems(true);
    resetAll();
  };

  const resetAll = () => {
    setItems(
      items.map((i) => {
        return { ...i, isChecked: false };
      })
    );
    setCheckedItems([]);
  };

  // Listener to adjust the reset logic accordingly
  useEffect(() => {
    checkedItems.length <= 0 ? setResetItems(true) : setResetItems(false);
  }, [checkedItems]);

  // Listener to send checked items list to parent
  useEffect(() => {
    getValues(checkedItems);
  }, [checkedItems, getValues]);

  return (
    <div data-name="inputs" className="flex flex-col space-y-3">
      <div className="flex items-center">
        <input
          id="tous"
          type="checkbox"
          value="Tous"
          checked={resetItems}
          onChange={handleReset}
          className="w-4 h-4 transition duration-150 ease-in-out text-secondary form-checkbox"
        />
        <label
          id="tous"
          htmlFor="tous"
          className="block ml-2 text-sm leading-5"
        >
          Tous
        </label>
      </div>
      {items.map((item) => {
        return (
          <InputField item={item} key={item.id} handleChange={handleChange} />
        );
      })}
    </div>
  );
};

export default CheckboxFilter;
