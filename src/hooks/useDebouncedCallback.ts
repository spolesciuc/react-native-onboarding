import React from 'react';

const useDebouncedCallback = (func, wait) => {
  const timeout = React.useRef(0);

  return React.useCallback(
    (...args) => {
      const later = () => {
        clearTimeout(timeout.current);
        func(...args);
      };

      clearTimeout(timeout.current);
      timeout.current = setTimeout(later, wait);
    },
    [func, wait],
  );
};

export default useDebouncedCallback;
