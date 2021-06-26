import React, { useState, useEffect } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemState,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { GatsbyImage } from 'gatsby-plugin-image';

const InputField = ({ item, handleChange, scolaires }) => {
  return (
    <div className="flex items-center">
      <input
        id={`inp-${item.id}`}
        type="checkbox"
        value={item.name}
        checked={item.isChecked}
        onChange={() => handleChange(item.id)}
        className="w-4 h-4 transition duration-150 ease-in-out text-secondary form-checkbox"
      />
      <label
        id={item.id}
        htmlFor={`inp-${item.id}`}
        className="flex items-center ml-2 space-x-2 text-sm leading-5"
      >
        {item.icon && (
          <div
            className={`h-7 w-7 flex items-center justify-center p-2 rounded-full ${
              scolaires ? 'bg-eduDark' : 'bg-primary'
            }`}
          >
            <GatsbyImage image={item.icon} className="w-full" />
          </div>
        )}
        <span>{item.name}</span>
      </label>
    </div>
  );
};

const CheckboxFilter = ({ list, getValues, topic, scolaires }) => {
  // Initialize the list of themes and states
  const itemsList = list.map(({ node }) => {
    return {
      id: node.id,
      name: node.name,
      isChecked: false,
      icon: topic === 'format' ? node.formatIcon.asset.gatsbyImageData : null,
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
          id={`tous-${topic}`}
          type="checkbox"
          value="Tous"
          checked={resetItems}
          onChange={handleReset}
          className="w-4 h-4 transition duration-150 ease-in-out text-secondary form-checkbox"
        />
        <label
          id="tous"
          htmlFor={`tous-${topic}`}
          className="block ml-2 text-sm leading-5"
        >
          {topic === 'format' ? 'Toutes' : 'Tous'}
        </label>
      </div>
      <Accordion allowZeroExpanded={true}>
        <AccordionItem className="">
          <AccordionItemHeading>
            <AccordionItemButton className="flex items-center -ml-1 text-sm text-gray-500">
              <span className="">
                <AccordionItemState>
                  {(state) => {
                    return state.expanded ? (
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 chevron-down"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 chevron-right"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    );
                  }}
                </AccordionItemState>
              </span>
              <span>Plus d'Options</span>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="pt-3">
            <div className="flex flex-col space-y-3">
              {items.map((item) => {
                return (
                  <InputField
                    item={item}
                    key={item.id}
                    handleChange={handleChange}
                    scolaires={scolaires}
                  />
                );
              })}
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default CheckboxFilter;
