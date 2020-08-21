import moment from 'moment';
// Accepts date strings
export const processDate = (startDate, endDate) => {
  moment.locale('fr');

  if (moment(startDate).month() !== moment(endDate).month()) {
    return `${
      moment(startDate).format('DD MMMM, H[h]mm') -
      moment(endDate).format('DD MMMM, H[h]mm')
    }`;
  }

  if (moment(startDate).day() !== moment(endDate).day()) {
    return (
      moment(startDate).format('DD MMMM, H[h]mm') +
      ' - ' +
      moment(endDate).format('DD MMMM, H[h]mm')
    );
  } else {
    return (
      moment(startDate).format('DD MMMM') +
      ', ' +
      'de ' +
      moment(startDate).format('H[h]mm') +
      ' à ' +
      moment(endDate).format('H[h]mm')
    );
  }
};
