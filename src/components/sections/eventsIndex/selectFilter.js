import React, { useState } from 'react';

const SelectFilter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-1">
      <label
        id="listbox-label"
        className="block text-sm font-medium leading-5 text-gray-700"
      ></label>
      <div className="relative" onClick={() => setIsOpen(!isOpen)}>
        <span className="inline-block w-full rounded-md shadow-sm">
          <button
            type="button"
            aria-haspopup="listbox"
            aria-expanded="true"
            aria-labelledby="listbox-label"
            className="relative w-full py-2 pl-3 pr-10 text-left transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md cursor-default focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
          >
            <span className="block truncate">Tom Cook</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </span>

        {/* Select popover, show/hide based on select state. */}
        <div
          className={`absolute w-full mt-1 bg-white rounded-md shadow-lg ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <ul
            tabIndex={-1}
            role="listbox"
            aria-labelledby="listbox-label"
            aria-activedescendant="listbox-item-3"
            className="py-1 overflow-auto text-base leading-6 rounded-md shadow-xs max-h-60 focus:outline-none sm:text-sm sm:leading-5"
          >
            {/* <!--
          Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.

          Highlighted: "text-white bg-indigo-600", Not Highlighted: "text-gray-900"
        --> */}
            <li
              id="listbox-option-0"
              role="option"
              className="relative py-2 pl-3 text-gray-900 cursor-default select-none pr-9"
            >
              {/* Selected: "font-semibold", Not Selected: "font-normal" */}
              <span className="block font-normal truncate">Wade Cooper</span>

              {/* <!--
            Checkmark, only display for selected option.

            Highlighted: "text-white", Not Highlighted: "text-indigo-600"
          --> */}
              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </li>

            {/* More options... */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SelectFilter;
