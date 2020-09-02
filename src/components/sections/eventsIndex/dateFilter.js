import React, { useState, useEffect } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import fr from 'date-fns/locale/fr';
import 'react-datepicker/dist/react-datepicker.css';

const DateFilter = ({ getValues, firstDate, lastDate }) => {
  registerLocale('fr', fr);
  const defaultStart = new Date(firstDate);
  const defaultEnd = new Date(lastDate);

  const [startDate, setStartDate] = useState(defaultStart);
  const [endDate, setEndDate] = useState(defaultEnd);
  const [allDates, setAllDates] = useState(true);

  useEffect(() => {
    if (allDates) {
      setStartDate(defaultStart);
      setEndDate(defaultEnd);
      getValues({ startDate: defaultStart, endDate: defaultEnd });
    }
  }, [allDates]);

  useEffect(() => {
    if (
      startDate.getTime() === defaultStart.getTime() &&
      endDate.getTime() === defaultEnd.getTime()
    ) {
      setAllDates(true);
      getValues({ startDate, endDate });
    } else {
      setAllDates(false);
      getValues({ startDate, endDate });
    }
  }, [startDate, endDate]);

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center">
        <input
          id="tous-dates"
          type="checkbox"
          value="tous"
          checked={allDates}
          onChange={() => setAllDates(!allDates)}
          className="w-4 h-4 transition duration-150 ease-in-out text-secondary form-checkbox"
        />
        <label htmlFor="tous-dates" className="block ml-2 text-sm leading-5">
          Toutes les dates
        </label>
      </div>
      <div className="flex space-x-4 md:space-x-0 md:flex-col md:space-y-4">
        <div>
          <p className="text-sm text-gray-700">Date de début</p>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            locale="fr"
            dateFormat="dd/MM/yyyy"
            className="block w-full form-input sm:text-sm sm:leading-5"
          />
        </div>
        <div>
          <p className="text-sm text-gray-700">Date de fin</p>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            locale="fr"
            dateFormat="dd/MM/yyyy"
            className="block w-full form-input sm:text-sm sm:leading-5"
          />
        </div>
      </div>
    </div>
  );
};

export default DateFilter;
