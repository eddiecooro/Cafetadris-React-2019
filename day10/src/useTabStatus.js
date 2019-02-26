import { useState, useEffect, useCallback } from 'react';

let useTabStatus = () => {
  let [tabIsActive, setTabIsActive] = useState(!document.hidden);
  let handleVisibilityChange = useCallback(event => {
    setTabIsActive(!event.target.hidden);
  });
  useEffect(() => {
    document.addEventListener(
      'visibilitychange',
      handleVisibilityChange
    );
    return () => {
      document.removeEventListener(
        'visibilityChange',
        handleVisibilityChange
      );
    };
  }, []);
  return tabIsActive;
};

export default useTabStatus;
