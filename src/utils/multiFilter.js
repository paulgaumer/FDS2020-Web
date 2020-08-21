export const multiFilter = (arr, filters, scolaires) => {
  const checkTheme = (item, filtersList) => {
    if (filtersList.themes.length === 0) {
      return true;
    } else if (filtersList.themes.includes(item.theme[0].id)) {
      return true;
    } else {
      return false;
    }
  };

  const checkFormat = (item, filtersList) => {
    if (filtersList.formats.length === 0) {
      return true;
    } else if (filtersList.formats.includes(item.format[0].id)) {
      return true;
    } else {
      return false;
    }
  };

  const checkPublic = (item, filtersList) => {
    return (
      filtersList.public === item.audience.id ||
      filtersList.public === '-d4e31ef1-7615-5290-88e1-b85b940c521a'
    );
  };
  const checkDepartment = (item, filtersList) => {
    return (
      filtersList.department === item.department.id ||
      filtersList.department === 'all'
    );
  };

  const checkDates = (item, filterList) => {
    const itemStartDate = new Date(item.startDate.local).getTime();
    const itemEndDate = new Date(item.endDate.local).getTime();
    const filterStartDate = filterList.dates.startDate.getTime();
    const filterEndDate = filterList.dates.endDate.getTime();

    return (
      (itemStartDate >= filterStartDate || itemEndDate >= filterStartDate) &&
      (itemEndDate <= filterEndDate || itemStartDate <= filterEndDate)
    );
  };

  const filtered = arr.filter((obj) => {
    // console.log('FILTERIIIIIIIIIIING');
    const matchesTheme = checkTheme(obj, filters);
    const matchesFormat = checkFormat(obj, filters);
    const matchesPublic = checkPublic(obj, filters);
    const matchesDepartment = checkDepartment(obj, filters);
    const matchesDates = checkDates(obj, filters);
    const selected =
      matchesTheme && matchesFormat && matchesPublic && matchesDates;
    const selectedScolaires =
      matchesTheme && matchesFormat && matchesDepartment && matchesDates;

    return scolaires ? selectedScolaires : selected;

    // console.log(`*********************`);
    // console.log(`${obj.title}`);
    // console.log(`theme: ${matchesTheme}`);
    // console.log(`format: ${matchesFormat}`);
    // console.log(`public: ${matchesPublic}`);
    // console.log(`department: ${matchesDepartment}`);
    // console.log(`selected: ${selectedScolaires}`);
    // console.log(`*********************`);
  });
  return filtered;
};
