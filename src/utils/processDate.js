import moment from 'moment';
import 'moment/locale/fr';

// Accepts date strings
export const processDate = (timeSlot) => {
  // Structure:
  // timeSlot = {
  //   startDate: "2020-10-02",
  //   startTime: "09:00",
  //   endDate: "2020-10-02",
  //   endTime: "09:00",
  // }
  moment.locale('fr');
  const { startDate, startTime, endDate, endTime } = timeSlot;
  const start = `${startDate}T${startTime}:00.000`;
  const end = `${endDate}T${endTime}:00.000`;

  if (moment(start).month() !== moment(end).month()) {
    return `${
      'Du ' +
      moment(start).format('DD MMMM, H[h]mm') +
      ' au ' +
      moment(end).format('DD MMMM, H[h]mm')
    }`;
  }

  if (moment(start).date() !== moment(end).date()) {
    return (
      'Du ' +
      moment(start).format('DD MMMM, H[h]mm') +
      ' au ' +
      moment(end).format('DD MMMM, H[h]mm')
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
// export const processDateOld = (startDate, endDate) => {
//   moment.locale('fr');

//   if (moment(startDate).month() !== moment(endDate).month()) {
//     return `${
//       'Du ' +
//       moment(startDate).format('DD MMMM, H[h]mm') +
//       ' au ' +
//       moment(endDate).format('DD MMMM, H[h]mm')
//     }`;
//   }

//   if (moment(startDate).date() !== moment(endDate).date()) {
//     return (
//       'Du ' +
//       moment(startDate).format('DD MMMM, H[h]mm') +
//       ' au ' +
//       moment(endDate).format('DD MMMM, H[h]mm')
//     );
//   } else {
//     return (
//       'Le ' +
//       moment(startDate).format('DD MMMM') +
//       ', ' +
//       'de ' +
//       moment(startDate).format('H[h]mm') +
//       ' à ' +
//       moment(endDate).format('H[h]mm')
//     );
//   }
// };
