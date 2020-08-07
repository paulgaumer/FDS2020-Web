export const multiFilter = (arr, filters) => {
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

  const filtered = arr.filter((obj) => {
    // console.log('FILTERIIIIIIIIIIING');
    const matchesTheme = checkTheme(obj, filters);
    const matchesFormat = checkFormat(obj, filters);
    const matchesPublic = checkPublic(obj, filters);
    const selected = matchesTheme && matchesFormat && matchesPublic;

    return selected;

    // console.log(`*********************`);
    // console.log(`${obj.title}`);
    // // console.log(`theme: ${matchesTheme}`);
    // // console.log(`format: ${matchesFormat}`);
    // // console.log(`public: ${matchesPublic}`);
    // console.log(`selected: ${selected}`);
    // console.log(`*********************`);
  });
  return filtered;
};
