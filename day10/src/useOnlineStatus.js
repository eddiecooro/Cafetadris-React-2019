import { useEffect, useCallback, useState } from 'react';

let useNetworkStatus = () => {
  let [onlineStatus, setOnlineStatus] = useState(navigator.onLine);
  let changeStatusHandler = useCallback(event =>
    setOnlineStatus(event.type === 'online')
  );
  useEffect(() => {
    window.addEventListener('offline', changeStatusHandler);
    window.addEventListener('online', changeStatusHandler);
    return () => {
      window.removeEventListener('offline', changeStatusHandler);
      window.removeEventListener('online', changeStatusHandler);
    };
  }, []);
  return onlineStatus;
};

export default useNetworkStatus;
