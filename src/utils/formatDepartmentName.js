export const formatDepartmentName = (name) => {
  return name.toLowerCase().replace(/ /g, '-').replace('é', 'e');
};
