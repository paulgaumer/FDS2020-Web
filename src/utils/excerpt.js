export const excerpt = (text, characters = 160) => {
  return `${text.substring(0, characters)}${text.length >= 55 ? '...' : ''}`;
};
