import React, { Component } from 'react';
import withNetworkStatus from './withNetworkStatus';
import withTabActiveStatus from './withTabActiveStatus';
import useNetworkStatus from './useOnlineStatus';
import useTabStatus from './useTabStatus';

// let ActiveDetail = props => {
//   return (
//     <div style={{ fontSize: 34 }}>
//       <p>Device is online: {String(props.isOnline)}</p>
//       <p>Tab is active: {String(props.isTabActive)}</p>
//     </div>
//   );
// };
// export default withNetworkStatus(ActiveDetail);
// export default withTabActiveStatus(({ isActive: isTabActive }) => {
//   let InsideComponent = withNetworkStatus(
//     ({ isActive: isOnline }) => (
//       <ActiveDetail isTabActive={isTabActive} isOnline={isOnline} />
//     )
//   );
//   return <InsideComponent />;
// });

/******* With hooks */
let ActiveDetail = props => {
  let isOnline = useNetworkStatus();
  let isTabActive = useTabStatus();

  return (
    <div style={{ fontSize: 34 }}>
      <p>Device is online: {String(isOnline)}</p>
      <p>Tab is active: {String(isTabActive)}</p>
    </div>
  );
};

export default ActiveDetail;
