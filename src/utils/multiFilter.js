export const multiFilter = (arr, filters, scolaires) => {
  const checkTheme = (item, filtersList) => {
    const itemThemes = item.theme.map((a) => a.id);
    if (filtersList.themes.length === 0) {
      return true;
    } else if (filtersList.themes.some((theme) => itemThemes.includes(theme))) {
      return true;
    } else {
      return false;
    }
  };

  const checkFormat = (item, filtersList) => {
    const itemFormats = item.format.map((a) => a.id);
    if (filtersList.formats.length === 0) {
      return true;
    } else if (
      filtersList.formats.some((format) => itemFormats.includes(format))
    ) {
      return true;
    } else {
      return false;
    }
  };

  const checkAudience = (item, filtersList) => {
    let itemAge = 0;
    if (item?.audienceCustom?.from) {
      itemAge = parseInt(item?.audienceCustom?.from);
    } else {
      itemAge = parseInt(item?.audience?.name.split(' ans')[0]) || 0;
    }
    const selectedAudience = filtersList.audiences;

    if (selectedAudience <= 3) {
      return true;
    } else if (itemAge > selectedAudience) {
      return false;
    } else {
      return true;
    }
  };

  const checkDepartment = (item, filtersList) => {
    return (
      filtersList.department === item.department.id ||
      filtersList.department === 'all'
    );
  };

  const checkDates = (item, filterList) => {
    const itemStartDate = new Date(
      `${item.timeSlots[0].startDate}T${item.timeSlots[0].startTime}:00.000`
    ).getTime();
    const itemEndDate = new Date(
      `${item.timeSlots[0].endDate}T${item.timeSlots[0].endTime}:00.000`
    ).getTime();
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
    const matchesAudience = checkAudience(obj, filters);
    const matchesDepartment = checkDepartment(obj, filters);
    const matchesDates = checkDates(obj, filters);
    const selected =
      matchesTheme && matchesFormat && matchesAudience && matchesDates;
    const selectedScolaires =
      matchesTheme &&
      matchesFormat &&
      matchesDepartment &&
      matchesDates &&
      matchesAudience;

    return scolaires ? selectedScolaires : selected;

    // console.log(`*********************`);
    // console.log(`${obj.title}`);
    // console.log(`theme: ${matchesTheme}`);
    // console.log(`format: ${matchesFormat}`);
    // console.log(`audience: ${matchesAudience}`);
    // console.log(`department: ${matchesDepartment}`);
    // console.log(`selected: ${selectedScolaires}`);
    // console.log(`*********************`);
  });
  return filtered;
};
