import { useState, useEffect } from 'react';

const useDebounce = (value, timeout) => {
  const [state, setState] = useState(value);

  useEffect(() => {
    // Set timeout to run after delay
    const handler = setTimeout(() => setState(value), timeout);

    // clear the setTimeout listener on unMount
    return () => clearTimeout(handler);
  }, [value, timeout]);

  return state;
};

export default useDebounce;
