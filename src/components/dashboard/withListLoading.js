import React from 'react';

function WithListLoading(Component) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <div className="dashboard__users-loading">
        <div className="visuallyhidden">Loading Users</div>
        <div className="loader"></div>
      </div>
    );
  };
}

export default WithListLoading;
