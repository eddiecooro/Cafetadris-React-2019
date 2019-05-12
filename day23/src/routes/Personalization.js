import React from 'react';
import axiosInstance from '../api/axios';
export default props => {
  const [res, setRes] = React.useState(null);
  React.useEffect(() => {
    axiosInstance
      .get('/me')
      .then(res => setRes(res.data))
      .catch(err => console.log(err));
  }, []);
  if (!res) return 'Loading...';
  return <pre>{JSON.stringify(res)}</pre>;
};
