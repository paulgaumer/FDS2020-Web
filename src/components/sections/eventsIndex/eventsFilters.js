import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const InputField = ({ item, handleChange }) => {
  return (
    <div className="flex items-center">
      <input
        id={item.id}
        type="checkbox"
        value={item.name}
        checked={item.isChecked}
        onClick={() => handleChange(item.id)}
        className="w-4 h-4 transition duration-150 ease-in-out text-secondary form-checkbox"
      />
      <label htmlFor={item.id} className="block ml-2 text-sm leading-5">
        {item.name}
      </label>
    </div>
  );
};

const EventsFilters = () => {
  const data = useStaticQuery(graphql`
    query ThemesQuery {
      allSanityTheme(sort: { fields: name, order: ASC }) {
        edges {
          node {
            name
            id
          }
        }
      }
    }
  `);

  // Initialize the list of themes and states
  const themeList = data.allSanityTheme.edges.map(({ node }) => {
    return { id: node.id, name: node.name, isChecked: false };
  });
  const [themes, setThemes] = useState(themeList);

  // Initialize selected themes
  const [checkedThemes, setCheckedThemes] = useState([]);

  // Initialize reset
  const [resetThemes, setResetThemes] = useState(true);

  // Handle checkbox change
  const handleChange = (id) => {
    // Update isChecked state
    setThemes(
      themes.map((t) => {
        if (t.id === id) return { ...t, isChecked: !t.isChecked };
        return t;
      })
    );
    // Update the list of selected themes
    setCheckedThemes(
      checkedThemes.includes(id)
        ? checkedThemes.filter((el) => el !== id)
        : [...checkedThemes, id]
    );
  };

  const handleReset = () => {
    setResetThemes(true);
    resetAll();
  };

  const resetAll = () => {
    setThemes(
      themes.map((t) => {
        return { ...t, isChecked: false };
      })
    );
    setCheckedThemes([]);
  };

  // Listener to adjust the reset logic accordingly
  useEffect(() => {
    checkedThemes.length <= 0 ? setResetThemes(true) : setResetThemes(false);
  }, [checkedThemes]);

  return (
    <>
      <div className="overflow-hidden text-gray-500 bg-white rounded-lg shadow">
        <div className="px-4 py-5 sm:p-6">
          <h4 className="pb-6 font-bold text-gray-700 uppercase">thèmes</h4>
          <div data-name="inputs" className="flex flex-col space-y-3">
            <div className="flex items-center">
              <input
                id="tous"
                type="checkbox"
                value="Tous"
                checked={resetThemes}
                onClick={handleReset}
                className="w-4 h-4 transition duration-150 ease-in-out text-secondary form-checkbox"
              />
              <label htmlFor="tous" className="block ml-2 text-sm leading-5">
                Tous
              </label>
            </div>
            {themes.map((theme) => {
              return (
                <InputField
                  item={theme}
                  key={theme.id}
                  handleChange={handleChange}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsFilters;
