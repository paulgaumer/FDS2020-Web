import moment from 'moment';
import 'moment/locale/fr';

/**
 * @function processDate
 * @param {object} timeSlot - object structured as follows {
    startDate: "2020-10-02",
    startTime: "09:00",
    endDate: "2020-10-02",
    endTime: "09:00",
  }
 * @param {string} size - optionnal prop indicating the format to display -> "short" or null by default 
 * @returns {string} - returns a string display the start date and end date in a sentence
 */
export const processDate = (timeSlot, size = null) => {
  const formatDisplay = size === 'short' ? 'DD MMMM' : 'DD MMMM, H[h]mm';
  moment.locale('fr');
  const { startDate, startTime, endDate, endTime } = timeSlot;
  const start = `${startDate}T${startTime}:00.000`;
  const end = `${endDate}T${endTime}:00.000`;

  if (moment(start).month() !== moment(end).month()) {
    return `${
      'Du ' +
      moment(start).format(formatDisplay) +
      ' au ' +
      moment(end).format(formatDisplay)
    }`;
  }

  if (moment(start).date() !== moment(end).date()) {
    return (
      'Du ' +
      moment(start).format(formatDisplay) +
      ' au ' +
      moment(end).format(formatDisplay)
    );
  } else {
    return (
      'Le ' +
      moment(start).format('DD MMMM') +
      ', ' +
      'de ' +
      moment(start).format('H[h]mm') +
      ' à ' +
      moment(end).format('H[h]mm')
    );
  }
};

/**
 * Sort events according to their first startDate, from oldest to most recent
 * @function sortEventsByDate
 * @param {array} events - Array of events objects each containing an array of timeSlots
 * @returns {array} - returns an array of sorted events
 */
export const sortEventsByDate = (events) => {
  // Sort the timeSlots object by startDates when several timeslots are available
  const sortEventTimeSlots = (timeSlots) => {
    return timeSlots.sort((a, b) => {
      const aDate = new Date(a.startDate);
      const bDate = new Date(b.startDate);
      return aDate - bDate;
    });
  };

  const sortedEvents = events.sort((a, b) => {
    const aStart = sortEventTimeSlots(a.timeSlots);
    const bStart = sortEventTimeSlots(b.timeSlots);

    const aStartDate = new Date(aStart[0].startDate);
    const bStartDate = new Date(bStart[0].startDate);
    return aStartDate - bStartDate;
  });
  return sortedEvents;
};
