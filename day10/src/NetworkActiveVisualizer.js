import React, {
  Component,
  useState,
  useEffect,
  useCallback
} from 'react';
import withNetworkStatus from './withNetworkStatus';
import useNetworkStatus from './useOnlineStatus';

// let NetworkActiveVisualizer = props => {
//   return (
//     <div
//       style={{
//         width: 200,
//         height: 200,
//         margin: '0 auto',
//         backgroundColor: props.onlineStatus
//           ? props.isOnline
//           : props.isOffline
//       }}
//     />
//   );
// };

/******** With Hooks */

let NetworkActiveVisualizer = props => {
  let isOnline = useNetworkStatus();
  return (
    <div
      style={{
        width: 200,
        height: 200,
        margin: '0 auto',
        backgroundColor: isOnline ? props.isOnline : props.isOffline
      }}
    />
  );
};

export default NetworkActiveVisualizer;
