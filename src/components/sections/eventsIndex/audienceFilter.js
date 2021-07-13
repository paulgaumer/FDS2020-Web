import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Accordion,
  AccordionItem,
  AccordionItemState,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

const InputContainer = styled.div`
  input[type='range'] {
    -webkit-appearance: none;
  }
  input[type='range']:focus {
    outline: none;
  }
  input[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    background: #fdbf37;
    border-radius: 3px;
  }
  input[type='range']::-webkit-slider-thumb {
    border: 1px solid #a0aec0;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -4px;
  }
  input[type='range']:focus::-webkit-slider-runnable-track {
    background: #fdbf37;
  }
  input[type='range']::-moz-range-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    background: #fdbf37;
    border-radius: 3px;
  }
  input[type='range']::-moz-range-thumb {
    border: 1px solid #a0aec0;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: #ffffff;
    cursor: pointer;
  }
  input[type='range']::-ms-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    border-width: 16px 0;
    color: transparent;
  }
  input[type='range']::-ms-fill-lower {
    background: #fdbf37;
    border-radius: 2.6px;
  }
  input[type='range']::-ms-fill-upper {
    background: #fdbf37;
    border-radius: 2.6px;
  }
  input[type='range']::-ms-thumb {
    border: 1px solid #a0aec0;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: #ffffff;
    cursor: pointer;
  }
  input[type='range']:focus::-ms-fill-lower {
    background: #fdbf37;
  }
  input[type='range']:focus::-ms-fill-upper {
    background: #fdbf37;
  }
`;

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
          className="w-4 h-4 transition duration-150 ease-in-out cursor-pointer text-secondary form-checkbox"
        />
        <label
          htmlFor="tous-ages"
          className="block ml-2 text-sm leading-5 cursor-pointer"
        >
          Tout age
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
              <span>Personnaliser</span>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="pt-3">
            <InputContainer className="flex items-center space-x-4">
              <input
                type="range"
                min={`${baseAudience}`}
                max="25"
                value={selectedAudience}
                id="audienceRange"
                onInput={(e) => handleSelect(e)}
                onChange={(e) => handleSelect(e)}
                className="cursor-pointer"
              />
              <p className="text-base leading-5">{selectedAudience} ans</p>
            </InputContainer>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AudienceFilter;
